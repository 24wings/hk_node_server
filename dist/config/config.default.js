"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.default = (appInfo) => {
    const config = {};
    // app special config
    config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;
    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1524146141340_7369";
    // add your config here
    config.middleware = [];
    // config.sequelize = {
    //   dialect: "mysql", // support: mysql, mariadb, postgres, mssql
    //   database: "customer",
    //   host: "47.100.23.203",
    //   port: "3306",
    //   username: "misheng",
    //   password: "misheng"
    // };
    // config/config.${env}.js
    // config.mysql = {
    //   clients: {
    //     // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
    //     customer: {
    //       // host
    //       host: "221.234.36.118",
    //       // 端口号
    //       port: "3306",
    //       // 用户名
    //       user: "misheng",
    //       // 密码
    //       password: "misheng",
    //       // 数据库名
    //       database: "customer"
    //     },
    //     m2centraldb: {
    //       // host
    //       host: "221.234.36.118",
    //       // 端口号
    //       port: "3306",
    //       // 用户名
    //       user: "misheng",
    //       // 密码
    //       password: "misheng",
    //       // 数据库名
    //       database: "m2centraldb"
    //     }
    //   }
    // };
    // config.mongoose = {
    // client: {
    // url: "mongodb://118.31.72.227/tutu",
    // options: {}
    // }
    // };
    config.cluster = {
        listen: {
            port: 80,
            hostname: "0.0.0.0"
            // path: '/var/run/egg.sock',
        }
    };
    config.bodyParser = {
        enable: true,
        // encoding:'utf-8',
        jsonLimit: "1000mb",
        formLimit: "1000mb"
    };
    config.security = {
        protocolWhiteList: ["http"],
        // origin: "*",
        domainWhiteList: [
            "www.airuanjian.vip",
            "open.weixin.qq.com",
            "http://localhost",
            "localhost:4200",
            "manage.airuanjian.vip",
            "2a0808e1.ngrok.io"
        ],
        allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
        xframe: {
            enable: false
        },
        csrf: {
            ignoreJSON: true // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
        },
        csp: {
            ignore: () => true
        }
    };
    config.view = {
        defaultViewEngine: "nunjucks",
        mapping: {
            html: "nunjucks"
        },
        root: [
            path.join(appInfo.baseDir, "app/views")
            // path.join(appInfo.baseDir, 'path/to/another'),
        ].join(",")
    };
    config.static = {
        prefix: "/public"
    };
    config.oss = {
        client: {
            accessKeyId: "LTAIcMnaxxUG7dbk",
            accessKeySecret: "VhNgQZrGYz7dXpiCUS8r36mbLgy6db",
            bucket: "bangwei-store",
            endpoint: "oss-cn-beijing.aliyuncs.com",
            timeout: "60s"
        }
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvY29uZmlnLmRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2QkFBOEI7QUFTOUIsa0JBQWUsQ0FBQyxPQUFxQixFQUFFLEVBQUU7SUFFdkMsTUFBTSxNQUFNLEdBQUcsRUFBNEMsQ0FBQztJQUU1RCxxQkFBcUI7SUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxpREFBaUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRW5GLDBDQUEwQztJQUMxQyx1RUFBdUU7SUFDdkUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBRW5ELHVCQUF1QjtJQUN2QixNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2Qix1QkFBdUI7SUFDdkIsa0VBQWtFO0lBQ2xFLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsS0FBSztJQUNMLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdFQUFnRTtJQUNoRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLFFBQVE7SUFDUixNQUFNO0lBQ04sS0FBSztJQUVMLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxJQUFJO0lBQ0osS0FBSztJQUNMLE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDZixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxTQUFTO1lBQ25CLDZCQUE2QjtTQUM5QjtLQUNGLENBQUM7SUFDRixNQUFNLENBQUMsVUFBVSxHQUFHO1FBQ2xCLE1BQU0sRUFBRSxJQUFJO1FBRVosb0JBQW9CO1FBQ3BCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO0tBQ2IsQ0FBQztJQUVULE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDaEIsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDM0IsZUFBZTtRQUNmLGVBQWUsRUFBRTtZQUNmLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQix1QkFBdUI7WUFDdkIsbUJBQW1CO1NBQ3BCO1FBQ0QsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQzFFLE1BQU0sRUFBRTtZQUNOLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7UUFDRCxJQUFJLEVBQUU7WUFDSixVQUFVLEVBQUUsSUFBSSxDQUFDLHFFQUFxRTtTQUN2RjtRQUNELEdBQUcsRUFBRTtZQUNILE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO1NBQ25CO0tBQ0ssQ0FBQztJQUNULE1BQU0sQ0FBQyxJQUFJLEdBQUc7UUFDWixpQkFBaUIsRUFBRSxVQUFVO1FBQzdCLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxVQUFVO1NBQ2pCO1FBRUQsSUFBSSxFQUFFO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztZQUN2QyxpREFBaUQ7U0FDbEQsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0tBQ0wsQ0FBQztJQUNULE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxNQUFNLEVBQUUsU0FBUztLQUNYLENBQUM7SUFDVCxNQUFNLENBQUMsR0FBRyxHQUFHO1FBQ1gsTUFBTSxFQUFFO1lBQ04sV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixlQUFlLEVBQUUsZ0NBQWdDO1lBQ2pELE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsT0FBTyxFQUFFLEtBQUs7U0FDZjtLQUNGLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMifQ==