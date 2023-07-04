const Controller = require('egg').Controller;

class BaseController extends Controller {

    /**
     * 功能:统一数据返回接口
     * @param data
     * @param message
     * @param code
     * @param httpCode
     * @private
     */
    #response(data: any, message: string, code: number, httpCode: number) {
        const { ctx } = this;
        ctx.body = {
            DATA: data,
            CODE: code,
            MESSAGE: message,
        };
        ctx.status = httpCode;
        return;
    }

    /**
     * 功能: 成功返回函数
     * @param data
     * @param message
     */
    success(data: any, message = '') {
        return this.#response(data, message, 0, 200);
    }

    /**
     * 功能:失败返回接口
     * @param message
     * @param code
     * @param httpCode
     */
    fail(message: string, code = 400, httpCode = 400) {
        return this.#response(undefined, message, code, httpCode);
    }
}
// module.exports = BaseController;

export default BaseController;
