"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_1 = require("egg");
// import db = require('../share/model');
// import { MenuTypeEnum } from '../share/model/enum/menu_type.enum';
// import { Developer } from '../share/model/entity/developer';
// import { Subject } from '../share/model/entity/subject';
// import { Category } from '../share/model/entity/category';
// import { Market } from '../share/model/entity/market';
// import { MarketStatusEnum } from '../share/model/enum/market_status.enum';
// import { Member } from '../share/model/entity/member';
// import { CommonLog } from '../share/model/entity/common_log';
// import { CommonLogStatusTypeEnum } from '../share/model/enum/common_log_type_status.enum';
// import { MemberRealnameAuthStatusEnum } from '../share/model/enum/member_realname_auth_status.enum';
// import { Menu } from '../share/model/entity/menu';
class default_1 extends egg_1.Controller {
    // @ApiOperation(value = "元数据新增", notes = "元数据", httpMethod = "POST", produces = MediaType.APPLICATION_JSON_VALUE)
    // @PostMapping(value = "/create")
    createMataObject() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // ResponseBean resp = null;
            // if (metaObject == null) {
            //     resp = ResponseUtil.createRespBean(false, StatusMsgEnum.PARAM_NULL.getStatus(), StatusMsgEnum.PARAM_NULL.getMsg());
            //     return resp;
            // }
            // long count = this.metaObjectServiceImpl.count(metaObject);
            // if (count > 0) {
            //     resp = ResponseUtil.createRespBean(false, StatusMsgEnum.ADD_REPEAT.getStatus(), StatusMsgEnum.ADD_REPEAT.getMsg());
            //     return resp;
            // }
            // MetaObject metaObjectOld = this.metaObjectServiceImpl.save(metaObject);
            // resp = ResponseUtil.createRespBean(true, StatusMsgEnum.ADD_SUCCESS.getStatus(), StatusMsgEnum.ADD_SUCCESS.getMsg());
            // resp.getData().put("metaObject", metaObjectOld);
            // return resp;
        });
    }
    // @ApiOperation(value = "获取视图列表", notes = "", httpMethod = "GET")
    // @RequestMapping(value = "/list", method = RequestMethod.GET)
    getList() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    //删除视图对象，级联删除视图字段
    // @ApiOperation(value = "删除视图列表", notes = "", httpMethod = "GET")
    // @RequestMapping(value = "/delete", method = RequestMethod.GET)
    deleteMataObjecr() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    //元数据更新,先删除所有的原有字段,再添加新的字段
    // @ApiOperation(value = "更新元数据", notes = "先删除所有的原有字段,再添加新的字段", httpMethod = "POST")
    // @RequestMapping(value = "/update", method = RequestMethod.POST)
    updateMataObject() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    // @ApiOperation(value = "获取指定元数据对象详情", notes = "", httpMethod = "GET")
    // @GetMapping(value = "/detail")
    findOneMataObject() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    // @ApiOperation(value = "更新元数据的指定更新表的数据", notes = "", httpMethod = "POST")
    // @PostMapping(value = "/data/update")
    updataManyEntity() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    /**  根据 objectcode 得到对应的字段情况  **/
    /**
     * 根据前台传递过来的查询参数解析生成SQL
     * 1---- 根据查询名称  查找此表的源SQL语句  --- querySql 字段
     * 2---- 根据此表的查询名称找到相应的字段表及后台需要处理逻辑
     * 3---- 处理where  字段逻辑  包括：全局变量，JAVA函数，
     *
     * @param queryEntiy
     * @return
     */
    // @ApiOperation(value = "获取元数据的sql查询数据分页",notes = "" ,httpMethod = "POST")
    // @PostMapping(value = "/data/page")
    query() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    // post
    getFields() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2NvbnRyb2xsZXIvZGV2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUFpQztBQUNqQyx5Q0FBeUM7QUFDekMscUVBQXFFO0FBQ3JFLCtEQUErRDtBQUMvRCwyREFBMkQ7QUFDM0QsNkRBQTZEO0FBQzdELHlEQUF5RDtBQUN6RCw2RUFBNkU7QUFDN0UseURBQXlEO0FBQ3pELGdFQUFnRTtBQUNoRSw2RkFBNkY7QUFDN0YsdUdBQXVHO0FBQ3ZHLHFEQUFxRDtBQUdyRCxlQUFxQixTQUFRLGdCQUFVO0lBQ25DLGtIQUFrSDtJQUNsSCxrQ0FBa0M7SUFDM0IsZ0JBQWdCOztZQUNuQiw0QkFBNEI7WUFDNUIsNEJBQTRCO1lBQzVCLDBIQUEwSDtZQUMxSCxtQkFBbUI7WUFDbkIsSUFBSTtZQUNKLDZEQUE2RDtZQUM3RCxtQkFBbUI7WUFDbkIsMEhBQTBIO1lBQzFILG1CQUFtQjtZQUNuQixJQUFJO1lBQ0osMEVBQTBFO1lBQzFFLHVIQUF1SDtZQUN2SCxtREFBbUQ7WUFDbkQsZUFBZTtRQUNuQixDQUFDO0tBQUE7SUFHRCxrRUFBa0U7SUFDbEUsK0RBQStEO0lBQ3pELE9BQU87O1FBRWIsQ0FBQztLQUFBO0lBRUQsaUJBQWlCO0lBQ2pCLGtFQUFrRTtJQUNsRSxpRUFBaUU7SUFDM0QsZ0JBQWdCOztRQUV0QixDQUFDO0tBQUE7SUFFRCwwQkFBMEI7SUFDMUIsb0ZBQW9GO0lBQ3BGLGtFQUFrRTtJQUM1RCxnQkFBZ0I7O1FBRXRCLENBQUM7S0FBQTtJQUVELHVFQUF1RTtJQUN2RSxpQ0FBaUM7SUFDM0IsaUJBQWlCOztRQUV2QixDQUFDO0tBQUE7SUFFRCwyRUFBMkU7SUFDM0UsdUNBQXVDO0lBQ2hDLGdCQUFnQjs7UUFFdkIsQ0FBQztLQUFBO0lBRUQsaUNBQWlDO0lBQ2pDOzs7Ozs7OztPQVFHO0lBQ0gsMkVBQTJFO0lBQzNFLHFDQUFxQztJQUM5QixLQUFLOztRQUNaLENBQUM7S0FBQTtJQUNELE9BQU87SUFDQSxTQUFTOztRQUVoQixDQUFDO0tBQUE7Q0FnUUo7QUF0VUQsNEJBc1VDIn0=