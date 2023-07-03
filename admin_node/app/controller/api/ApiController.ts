

class ApiController extends BaseController {

    constructor() {
        super();
    }
    version() {
        return this.success({
            version: '1.0.0',
        });
    }
}

module.exports = ApiController;
