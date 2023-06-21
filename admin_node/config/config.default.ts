import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
require('dotenv').config(); // 加载dotenv配置文件用于支持 env


export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;
    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.security = {
        csrf: {
            enable: process.env.SECURITY_CSRF ? process.env.SECURITY_CSRF === 'true' : true,
        },
    };
    config.keys = appInfo.name + process.env.SECURITY_KEY || '_1687254724720_1708';

    // add your egg config in here
    config.middleware = [];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };
    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
