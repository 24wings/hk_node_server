/**
 *   TEMP(0,"暂存"),SUBMIT(1,"下单"),SELLER_AGREE(2,"卖家同意"),TOBE_PAY(2,"待付"),CLOSED(3,"关闭"),TOBE_CONFIRM(4,"待确定"),PAID(4,"已付"),PAY_FAIL(5,"支付失败"),REFUNDED(6,"退货");
 */
export enum OrderStatusEnum {
    TEMP = "TEMP",
    SUBMIT = "SUBMIT",
    SELLER_AGREE = "SELLER_AGREE",
    TOBE_PAY = "TOBE_PAY",
    CLOSED = "CLOSED",
    TOBE_CONFIRM = "TOBE_CONFIRM", PAID = "PAID"
    , PAY_FAIL = "PAY_FAIL",
    REFUNDED = "REFUNDED"
}