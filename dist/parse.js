"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const cheerio = require("cheerio");
let reg = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} \(.* .*\) - written to stdout \[.*\]\s*(=========)*/gim;
function parseFile(filePath) {
    console.log(filePath);
    console.time('parse Start');
    let str = fs.readFileSync(filePath, 'utf8');
    let count = str.replace(reg, "$&=========|||=========");
    //--2018-07-21 12:14:36--  http://shop.zbj.com/20270508/
    // let count = /--\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}-- \{0,}/g.exec(str);
    // console.log(count as RegExpExecArray);/
    if (count) {
        let items = count.match(reg);
        let lines = count.split(`=========|||=========`).filter(line => line);
        lines.pop();
        console.log(`lines:`, lines[0]);
        // console .log('matched', reg.exec(str), 'total', str.length);
        if (items) {
            console.log(items.length);
        }
        // lines.forEach(line => {
        // console.log(line)
        // })
        // console.log(lines[0]);
        let result = lines[0].match(/--\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}--  (.*)/);
        if (result) {
            // console.log('addres', result[1]);x/
            let address = result[1];
            console.log(`address :${address}`);
            let html = lines[0].replace(/\<\/htm..l>[\s\S]*$/, '</html>').match(/\<!DOCTYPE html>[\s\S]*$/);
            if (html) {
                // console.log(`html`, html);
                let $ = cheerio.load(html[0]);
                console.log($);
            }
        }
        let downloadLinks = lines.map(line => {
            let result = line.match(/--\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}--  (.*)/);
            if (result) {
                // console.log('addres', result[1]);x/
                let address = result[1];
                console.log(`address :${address}`);
                let html = line.replace(/\<\/htm..l>[\s\S]*$/, '</html>').match(/\<!DOCTYPE html>[\s\S]*$/);
                if (html) {
                }
                return { ip: address, html };
            }
        });
        console.log(downloadLinks.length);
        // lines.map(line=>{
        // return 
        // })
    }
    console.timeEnd('parse Start');
}
parseFile(__dirname + '/out.txt');
// console.log(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} \(\d{0,} KB\/s\) - written to stdout \[\d{0,}\]/g.exec('2018-07-21 12:14:40 (130 KB/s) - written to stdout [66576]'))
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYXJzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUEwQjtBQUMxQixtQ0FBbUM7QUFFbkMsSUFBSSxHQUFHLEdBQUcsNEZBQTRGLENBQUM7QUFDdkcsbUJBQW1CLFFBQWdCO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMzQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUU1QyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3hELHdEQUF3RDtJQUV4RCwwRUFBMEU7SUFDMUUsMENBQTBDO0lBQzFDLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IsK0RBQStEO1FBQy9ELElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDNUI7UUFDRCwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLEtBQUs7UUFDTCx5QkFBeUI7UUFDekIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQzdFLElBQUksTUFBTSxFQUFFO1lBQ1Isc0NBQXNDO1lBQ3RDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUNsQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1lBQy9GLElBQUksSUFBSSxFQUFFO2dCQUVOLDZCQUE2QjtnQkFDN0IsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNqQjtTQUVKO1FBQ0QsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDekUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1Isc0NBQXNDO2dCQUN0QyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxPQUFPLEVBQUUsQ0FBQyxDQUFBO2dCQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO2dCQUMzRixJQUFJLElBQUksRUFBRTtpQkFHVDtnQkFFRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQTthQUMvQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFakMsb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVixLQUFLO0tBQ1I7SUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR25DLENBQUM7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFBO0FBQ2pDLHlLQUF5SyJ9