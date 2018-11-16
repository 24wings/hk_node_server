"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
var qrcodeImage = require("qr-image");
class Qrcode extends egg_1.Service {
    urlToQrcode(url, type = "base64") {
        switch (type) {
            case "png":
            case "svg":
                return qrcodeImage.imageSync(url, { type });
            case "base64":
                return qrcodeImage.imageSync(url, { type: "png" }).toString("base64");
        }
    }
}
exports.default = Qrcode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3NlcnZpY2UvcXJjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBQzlCLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV0QyxZQUE0QixTQUFRLGFBQU87SUFDekMsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFpQyxRQUFRO1FBQ3hELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxLQUFLLENBQUM7WUFDWCxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDOUMsS0FBSyxRQUFRO2dCQUNYLE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekU7SUFDSCxDQUFDO0NBQ0Y7QUFWRCx5QkFVQyJ9