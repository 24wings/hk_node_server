import jwt = require('jsonwebtoken');
import { Service } from "egg";

const Secret = "secret";
const Expires = { expiresIn: 60 * 60 };
export default class extends Service {
    sign(object: Object) {
        return jwt.sign(object, Secret, Expires);
    }
    verify(token: string) {
        return jwt.verify(token, Secret);
    }
    /** 无期限验证,一般用于校验密码 */
    verifyIgnoreExpiration(token: string) {
        return jwt.verify(token, Secret, { ignoreExpiration: true });
    }

}