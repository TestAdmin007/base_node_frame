import BaseController from '../BaseController';

class ApiController extends BaseController {
    version() {
        return this.success({
            version: '1.0.0',
        });
    }
}

export default ApiController;
