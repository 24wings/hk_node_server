// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import User from '../../../app/service/user';
import FrameworkJwt from '../../../app/service/framework/jwt';
import FrameworkMapper from '../../../app/service/framework/mapper';
import FrameworkMetaQuery from '../../../app/service/framework/metaQuery';
import FrameworkMsg from '../../../app/service/framework/msg';
import FrameworkStq from '../../../app/service/framework/stq';
import FrameworkUtil from '../../../app/service/framework/util';
import LibMsg from '../../../app/service/lib/msg';
import LibNotify from '../../../app/service/lib/notify';
import LibOss from '../../../app/service/lib/oss';
import LibQrcode from '../../../app/service/lib/qrcode';
import LibSms from '../../../app/service/lib/sms';
import LibWechat from '../../../app/service/lib/wechat';
import MarketOrder from '../../../app/service/market/order';

declare module 'egg' {
  interface IService {
    user: User;
    framework: {
      jwt: FrameworkJwt;
      mapper: FrameworkMapper;
      metaQuery: FrameworkMetaQuery;
      msg: FrameworkMsg;
      stq: FrameworkStq;
      util: FrameworkUtil;
    };
    lib: {
      msg: LibMsg;
      notify: LibNotify;
      oss: LibOss;
      qrcode: LibQrcode;
      sms: LibSms;
      wechat: LibWechat;
    };
    market: {
      order: MarketOrder;
    };
  }
}
