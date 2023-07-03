import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as process from 'process';
require('dotenv').config(); // 加载dotenv配置文件用于支持 env


export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;
    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.security = {
        csrf: {
            enable: process.env.SECURITY_CSRF ? process.env.SECURITY_CSRF === 'true' : true,
            ignoreJSON: true,
        },
        domainWhiteList: [ 'http://localhost:8080', '*' ],
    };
    config.keys = appInfo.name + process.env.SECURITY_KEY || '_1687254724720_1708';

    // add your egg config in here
    config.middleware = [];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };


    config.jwt = {
        secret: process.env.JWT_KEY ? process.env.JWT_KEY : 'admin@zhangp.cn',
    };
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };
    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};

// 数据库链接
exports.sequelize = {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || 3306,
    database: process.env.DATABASE_DATABASE || 'test',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PWD || '123456',
    underscored: true,
    timezone: process.env.TZ || '+UTC',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
