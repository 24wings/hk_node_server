import "reflect-metadata";
import path = require('path');
import { Connection } from "typeorm";
const FrameworkEntityPath = path.resolve(__dirname, "./share_platform/framework/entity/**/**.ts");
// const MarketEntityPath = path.resolve(__dirname, "./share_platform/market/entity/**/**.ts");
const hkEntityPath = path.resolve(__dirname, "./share_platform/hk/entity/**/**.ts");

let dbName = `org_test`;

export let conn = new Connection({

  type: "mysql",
  host: "47.95.203.108",
  port: 3306,
  username: "root",
  password: "!*@&#%$N1N",
  database: dbName,
  entities: [
    FrameworkEntityPath,
    // MarketEntityPath,
    hkEntityPath
  ],
  synchronize: true,


  logging: true
});



conn.connect()
//.then(r => r.query(`Create Database If Not Exists ${dbName}`))

/** 需要编写代理对象,已经注册的仓库直接获取 */



