module.exports = app => {
    const { router, controller } = app;
    router.get('/version', controller.common.version.version);
};

module.exports = app => {
    const subRouter = app.router.namespace('/common');
    require('./router/common')(app, subRouter);
};

module.exports = app => {
    const subRouter = app.router.namespace('/common');
    require('./router/common')(app, subRouter);
};
