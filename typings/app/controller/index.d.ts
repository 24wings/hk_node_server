// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import App from '../../../app/controller/app';
import Common from '../../../app/controller/common';
import Hk from '../../../app/controller/hk';
import FrameworkDev from '../../../app/controller/framework/dev';
import FrameworkStq from '../../../app/controller/framework/stq';
import FrameworkUser from '../../../app/controller/framework/user';

declare module 'egg' {
  interface IController {
    app: App;
    common: Common;
    hk: Hk;
    framework: {
      dev: FrameworkDev;
      stq: FrameworkStq;
      user: FrameworkUser;
    };
  }
}
