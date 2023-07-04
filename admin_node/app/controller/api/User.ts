import ApiController from './ApiController';

class UserController extends ApiController {
    register() {
        const createRule = {
            username: {
                type: 'string',
                min: 4,
                max: 32,
                trim: true,
            },
            password: {
                type: 'string',
                min: 32,
                max: 32,
                trim: true,
            },
        };

        const err = this.app.validator.validate(createRule, this.ctx.request.body);

        if (err) {
            console.log(err);
            return this.fail('不知道怎么返回');
        }

        return this.success([]);
    }
}

export default UserController;
