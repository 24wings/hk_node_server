"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { api } from '../share/api/customer.api';
module.exports = (app) => {
    let customer = app.controller.framework.market;
    let stq = app.controller.framework.stq;
    app.router
        // .post(api.memberRealnameAuthCreate, customer.memberRealnameAuthCreate)
        .get('/', customer.init)
        .get('/metaObject/list', customer.listObjects)
        .get('/metaField/list', customer.listObjectFields)
        .get('/stq', stq.entityDetail);
};
/**
 *
 *
 *
    @ApiOperation(value = "实名认证提交", notes = "", httpMethod = "Post")
    @RequestMapping(value = "/memberRealnameAuth/create", method = RequestMethod.POST)
    public ResponseBean memberRealnameauth(@RequestBody MemberRealnameAuth memberRealnameAuth,
            @RequestParam String authcode) {
        ResponseBean res = ResponseUtil.createRespBean(true, 200, "会员实名认证");
        if (memberRealnameAuth.getMobi() != null && !memberRealnameAuth.getMobi().isEmpty()) {
            Msg msg = this.msgService.getMarketPhoneLastAuthcode(memberRealnameAuth.getMobi(),
                    memberRealnameAuth.getMktId());

            if (msg != null) {
                if (msg.addtion.equals(authcode)) {
                    Member existMember = this.memberJPA.findByCustomerId(memberRealnameAuth.getCustomerId());
                    // Customer customer =
                    // this.customerJPA.findFirstByCustomerId(memberRealnameAuth.getCustomerId());
                    if (existMember == null) {
                        MemberRealnameAuth exitAuth = this.memberRealnameAuthJPA.findFirstByMktIdAndCustomerIdAndStatus(
                                memberRealnameAuth.getMktId(), memberRealnameAuth.getCustomerId(),
                                MemberRealnameStatus.Processing.toString());
                        if (exitAuth == null) {
                            MemberRealnameAuth newAuth = this.memberRealnameAuthJPA.saveAndFlush(memberRealnameAuth);
                            res.getData().put("memberRealnameAuth", newAuth);
                        } else {
                            res = ResponseUtil.createRespBean(false, 400, "您已经提交认证请求,请耐心等待工作人员审核");
                        }

                    } else {
                        res = ResponseUtil.createRespBean(false, 400, "您已经开通会员");
                    }
                } else {
                    res = ResponseUtil.createRespBean(false, 403, "验证码错误");
                }
            } else {
                res = ResponseUtil.createRespBean(false, 400, "请发送短信验证码");
            }
        } else {
            res = ResponseUtil.createRespBean(false, 400, "参数不全");
        }

        return res;
    }

    @ApiOperation(value = "获取用户会员状态,", notes = "", httpMethod = "Get")
    @RequestMapping(value = "/member/detail", method = RequestMethod.GET)
    public ResponseBean memberDetail(@RequestParam Integer customerId) {
        ResponseBean res = ResponseUtil.createRespBean(true, 200, "会员详情");
        Customer customer = customerJPA.findFirstByCustomerId(customerId);
        Member member = memberJPA.findByCustomerId(customerId);
        if (customer != null) {
            if (member == null) {
                // 检查是否申请实名认证
                MemberRealnameAuth auth = memberRealnameAuthJPA.findFirstByMktIdAndCustomerIdAndStatus(
                        customer.getMktId(), customer.getCustomerId(),
                        CommonStatus.MemberRealnameStatus.Processing.toString());
                if (auth == null) {
                    res.getData().put("status", "none");
                } else {

                    res.getData().put("status", "realnameAuth");
                    res.getData().put("auth", auth);

                }

            } else {
                res.getData().put("member", member);
                res.getData().put("status", "member");
            }
        } else {
            res = ResponseUtil.createRespBean(false, 400, "不存在的用户");
        }
        res.getData().put("member", member);
        return res;
    }

    @ApiOperation(value = "app用户注册", notes = "", httpMethod = "POST")
    @RequestMapping(value = "/check-authcode", method = RequestMethod.POST)
    public ResponseBean checkAuthcode(@RequestBody CheckAuthcode checkAuthcode) {
        ResponseBean res = ResponseUtil.createRespBean(true, 200, "校验成功");
        Msg msg = msgService.getMarketPhoneLastAuthcode(checkAuthcode.getPhone(), checkAuthcode.getMktId());
        if (msg.addtion.equals(checkAuthcode.getAuthcode())) {
            res = ResponseUtil.createRespBean(true, 200, "信息正确");
        } else {
            res = ResponseUtil.createRespBean(false, 400, "验证码错误");
        }

        return res;
    }

    @ApiOperation(value = "忘记密码", notes = "", httpMethod = "GET")
    @RequestMapping(value = "/forgotPassword", method = RequestMethod.POST)
    public ResponseBean forgotPassword(@RequestBody Customer customer, @RequestParam String authcode) throws Exception {
        Msg msg = this.msgService.getMarketPhoneLastAuthcode(customer.getMobi(), customer.getMktId());
        if (msg != null) {
            if (msg.addtion.equals(authcode)) {
                Customer existCustomer = customerJPA.findByMktIdAndMobi(customer.getMktId(), customer.getMobi());
                existCustomer.setPassword(customer.getPassword());
                customerJPA.saveAndFlush(existCustomer);

                return ResponseUtil.createRespBean(true, 200, "忘记密码成功");
            } else {
                return ResponseUtil.createRespBean(false, 200, "验证码错误");
            }

        } else {
            return ResponseUtil.createRespBean(false, 200, "未发送短信验证码");
        }
    }

    @ApiOperation(value = "app用户手机验证码", notes = "", httpMethod = "GET")
    @RequestMapping(value = "/authcode", method = RequestMethod.GET)
    public ResponseBean authcode(@RequestParam Integer mktId, @RequestParam String phone) throws Exception {

        SendSmsResponse response = this.msgService.sendAppAuthcode(phone, mktId);
        ResponseBean res;
        if (response.getCode().toLowerCase().equals("ok")) {
            res = ResponseUtil.createRespBean(true, StatusMsgEnum.ACTIVE_SUCCESS.getStatus(),
                    StatusMsgEnum.ACTIVE_SUCCESS.getMsg());
            return res;
        } else {
            res = ResponseUtil.createRespBean(false, StatusMsgEnum.SMS_FALSE.getStatus(),
                    StatusMsgEnum.SMS_FALSE.getMsg());
        }
        res.getData().put("msg", response);
        return res;
    }

    @ApiOperation(value = "app用户注册", notes = "", httpMethod = "POST")
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseBean singup(@Valid @RequestBody Customer newCustomer, @RequestParam String authcode)
            throws Exception {
        // return ResponseUtil.createRespBean(true, 200, newCustomer.getMobi() +
        // newCustomer.getMktId());
        Customer exsitCustomer = customerJPA.findByMktIdAndMobi(newCustomer.getMktId(), newCustomer.getMobi());

        if (exsitCustomer == null) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            newCustomer.setPasswordHash(encoder.encode(newCustomer.getPassword()));
            customerJPA.saveAndFlush(newCustomer);
            ResponseBean success = ResponseUtil.createRespBean(true, 200, "");
            success.getData().put("customer", newCustomer);
            return success;
        } else {
            ResponseBean fail = ResponseUtil.createRespBean(false, StatusMsgEnum.PHONE_CUSTOMER_EXISIT.getStatus(),
                    StatusMsgEnum.PHONE_CUSTOMER_EXISIT.getMsg());
            fail.getData().put("customer", null);
            return fail;
        }

    }

    @ApiOperation(value = "获取市场分页列表", notes = "", httpMethod = "GET")
    @RequestMapping(value = "/market-list", method = RequestMethod.GET)
    public ResponseBean listMarket() {
        ResponseBean res = ResponseUtil.createRespBean(true, 200, "成功获取列表");
        List<Market> markets = marketJPA.findAll();
        res.getData().put("markets", markets);
        return res;
    }

    @ApiOperation(value = "获取清单列表", notes = "", httpMethod = "GET")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public ResponseBean list() {
        List<Feelist> feelists = feelistJPA.findAll();
        ResponseBean res = ResponseUtil.createRespBean(true, 200, "msg");
        res.getData().put("markets", feelists);
        return res;
    }

    @ApiOperation(value = "app用户登陆", notes = "", httpMethod = "Post")
    @RequestMapping(value = "/customer/login", method = RequestMethod.POST)
    public ResponseBean signin(@RequestBody Customer loginCustomer) {
        String password = loginCustomer.getPassword();

        loginCustomer = customerJPA.findByMktIdAndMobi(loginCustomer.getMktId(), loginCustomer.getMobi());
        if (loginCustomer != null) {

            if (password.equals(loginCustomer.getPassword())) {
                ResponseBean res = ResponseUtil.createRespBean(true, 200, "msg");
                res.getData().put("customer", loginCustomer);
                return res;
            } else {
                ResponseBean res = ResponseUtil.createRespBean(false, 403, "用户名或密码错误");
                return res;
            }
        } else {
            ResponseBean res = ResponseUtil.createRespBean(false, 403, "用户不存在");
            return res;
        }
    }

 */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbXdvcmsucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvcm91dGUvZnJhbXdvcmsucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtREFBbUQ7QUFJbkQsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNsQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDL0MsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxNQUFNO1FBRU4seUVBQXlFO1NBQ3hFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQztTQUN2QixHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUM3QyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1NBQ2pELEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBR3RDLENBQUMsQ0FBQztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaU1HIn0=