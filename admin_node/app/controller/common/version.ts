const BaseControllerApi = require('../BaseController');

class VersionController extends BaseControllerApi {
    async version() {
        this.success({ version: '1.0.0' });
    }
}

module.exports = VersionController;
