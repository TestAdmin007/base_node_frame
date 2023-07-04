import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    tegg: {
        enable: true,
        package: '@eggjs/tegg-plugin',
    },
    teggConfig: {
        enable: true,
        package: '@eggjs/tegg-config',
    },
    teggController: {
        enable: true,
        package: '@eggjs/tegg-controller-plugin',
    },
    teggSchedule: {
        enable: true,
        package: '@eggjs/tegg-schedule-plugin',
    },
    eventbusModule: {
        enable: true,
        package: '@eggjs/tegg-eventbus-plugin',
    },
    aopModule: {
        enable: true,
        package: '@eggjs/tegg-aop-plugin',
    },
    tracer: {
        enable: true,
        package: 'egg-tracer',
    },
    jwt: {
        enable: true,
        package: 'egg-jwt',
    },
    cors: {
        enable: true,
        package: 'egg-cors',
    },
    routerPlus: {
        enable: true,
        package: 'egg-router-plus',
    },
};


export default plugin;


exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
// exports.routerPlus = {
//     enable: true,
//     package: 'egg-router-plus',
// };
