module.exports = app => {
    const { router, controller } = app;
    const subRouter = router.namespace('/api');
    subRouter.get('/version', controller.api.apiController.version);
    subRouter.post('/user/register', controller.api.user.register);
};
