module.exports = app => {
    const { router, controller } = app;
    router.get('/version', controller.common.version.version);
};

module.exports = app => {
    console.log(app.router);
    // const subRouter = app.router.namespace('/common');
    require('./router/common')(app);
};

module.exports = app => {
    // const subRouter = app.router.namespace('/api');
    require('./router/api')(app);
};
