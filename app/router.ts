import { Application } from "egg";
import { Blueprint } from 'egg-blueprint'
console.log(process.env.NODE_ENV)

require('./typeorm');

export default (app: Application) => {
  Blueprint(app)
};
