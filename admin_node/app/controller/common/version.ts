import BaseController from '../BaseController';

class VersionController extends BaseController {
    async version() {
        this.success({ version: '1.0.0' });
    }
}

export default VersionController;
