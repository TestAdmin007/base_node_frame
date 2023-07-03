module.exports = () => {
    return async function auth(ctx, next) {
        const token: string = ctx.get('Authorization');
        if (token) {
            // 这里是有token
        } else {
            // 这里是没有token
        }

        await next();
    };
};
