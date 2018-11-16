"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_1 = require("egg");
const fs = require("fs");
const path = require("path");
var Payment = require("wechat-pay").Payment;
var initConfig = {
    partnerKey: "shadow2016shadow2016shadow2016sh",
    appId: "wx800e2a542b39cf46",
    mchId: "1499196302",
    notifyUrl: "http://airuanjian.vip/wechat/pay-test",
    pfx: fs.readFileSync(path.resolve(__dirname, "../../env/apiclient_cert.p12"))
};
var payment = new Payment(initConfig);
const OAuth = require("wechat-oauth");
var client = new OAuth("wx800e2a542b39cf46", "7d1aec534959dc79b518472d66685671");
const WechatApi = require("wechat-api");
var api = new WechatApi("wx800e2a542b39cf46", "7d1aec534959dc79b518472d66685671");
let obj = {};
class Wechat extends egg_1.Service {
    getOauthUrl(urlPath, serverHost = "http://www.airuanjian.vip") {
        return client.getAuthorizeURL(serverHost + urlPath, "state", "snsapi_userinfo");
    }
    getWechatUserByCode(code) {
        if (!code) {
            return false;
        }
        return new Promise(resolve => {
            client.getAccessToken(code, function (err, result) {
                if (err)
                    console.log(err);
                // var accessToken = result.data.access_token;
                var openid;
                if (!result.data) {
                    openid = obj[code];
                }
                else {
                    openid = result.data.openid;
                    obj[code] = openid;
                }
                client.getUser(openid, function (err, result) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (err)
                            console.log(err);
                        var userInfo = result;
                        // console.log(userInfo)
                        resolve(userInfo);
                    });
                });
            });
        });
    }
    /**
     * 获取订单支付参数,用于h5内调起支付参数
     *
     * @param orderData
     */
    getPaymentArgs(orderData) {
        return new Promise(resolve => {
            payment.getBrandWCPayRequestParams(orderData, function (err, payargs) {
                if (err)
                    console.log(err);
                resolve(payargs);
            });
        });
    }
    getTicket(url, debug = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(`ticket url:`, url);
            var param = {
                debug: debug,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"],
                url
            };
            return new Promise(resolove => {
                api.getJsConfig(param, (err, data) => {
                    if (err)
                        console.log(err);
                    resolove(data);
                });
            });
        });
    }
}
exports.default = Wechat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VjaGF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3NlcnZpY2Uvd2VjaGF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUE4QjtBQUM5Qix5QkFBMEI7QUFDMUIsNkJBQThCO0FBQzlCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDNUMsSUFBSSxVQUFVLEdBQUc7SUFDZixVQUFVLEVBQUUsa0NBQWtDO0lBQzlDLEtBQUssRUFBRSxvQkFBb0I7SUFDM0IsS0FBSyxFQUFFLFlBQVk7SUFDbkIsU0FBUyxFQUFFLHVDQUF1QztJQUNsRCxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0NBQzlFLENBQUM7QUFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV0QyxzQ0FBdUM7QUFFdkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQ3BCLG9CQUFvQixFQUNwQixrQ0FBa0MsQ0FDbkMsQ0FBQztBQUNGLHdDQUF5QztBQUN6QyxJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FDckIsb0JBQW9CLEVBQ3BCLGtDQUFrQyxDQUNuQyxDQUFDO0FBRUYsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBRWIsWUFBNEIsU0FBUSxhQUFPO0lBQ3pDLFdBQVcsQ0FBQyxPQUFlLEVBQUUsVUFBVSxHQUFHLDJCQUEyQjtRQUNuRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQzNCLFVBQVUsR0FBRyxPQUFPLEVBQ3BCLE9BQU8sRUFDUCxpQkFBaUIsQ0FDbEIsQ0FBQztJQUNKLENBQUM7SUFDRCxtQkFBbUIsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBTSxPQUFPLENBQUMsRUFBRTtZQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFTLEdBQUcsRUFBRSxNQUFNO2dCQUM5QyxJQUFJLEdBQUc7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsOENBQThDO2dCQUM5QyxJQUFJLE1BQU0sQ0FBQztnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDaEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO2lCQUNwQjtnQkFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFlLEdBQUcsRUFBRSxNQUFNOzt3QkFDL0MsSUFBSSxHQUFHOzRCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzFCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQzt3QkFDdEIsd0JBQXdCO3dCQUN4QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BCLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRDs7OztPQUlHO0lBRUgsY0FBYyxDQUFDLFNBUWQ7UUFDQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLEVBQUUsVUFBUyxHQUFHLEVBQUUsT0FBTztnQkFDakUsSUFBSSxHQUFHO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVLLFNBQVMsQ0FBQyxHQUFXLEVBQUUsUUFBaUIsS0FBSzs7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxLQUFLLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzNELEdBQUc7YUFDSixDQUFDO1lBQ0YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDNUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7b0JBQ25DLElBQUksR0FBRzt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRjtBQXRFRCx5QkFzRUMifQ==