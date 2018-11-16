import { Service } from "egg";
// import { IOSSFile } from "../oss-file";
// import db = require("../share/model");
// import { OssFile } from '../share/model/entity/ossFile';
export default class OSS extends Service {
    async put(filename: string, base64: string) {
        let pattern = /png|jpeg|jpg/.exec(base64);
        if (pattern) {
            base64 = base64.replace(
                new RegExp(`data:image/${pattern[0]};base64,`),
                ""
            );
        }
        let { ctx } = this;
        // console.log(base64);
        return ctx.oss.put(filename, Buffer.from(base64, "base64"));
    }
    async uploadImage(base64: string) {
        // let { ctx } = this;
        let filename = `/images/` + Date.now() + ".png";
        let response: OSSUploadResponse = await this.put(filename, base64);
        // console.log(ctx.["common"]);
        return response;
    }
    /**图片处理 */
    async getImage(name: string, process: string) {
        let { ctx } = this;
        return ctx.oss.get(name, "./name-detail", {
            process: process ? process : `image/crop,w_100,h_100,x_100,y_100,r_1`
        });
    }
}
