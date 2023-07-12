'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
        notEmpty: true,
        comment: '用户ID',
      },
      username: {
        type: STRING(30),
        notNull: true,
        notEmpty: true,
        comment: '用户名',
      },
      name: {
        type: STRING(30),
        notNull: true,
        notEmpty: true,
        comment: '用户名',
      },
      password: {
        type: STRING,
        notNull: true,
        notEmpty: true,
        defaultValue: '',
        comment: '用户密码',
      },
      salt: {
        type: STRING(6),
        notNull: true,
        notEmpty: true,
        defaultValue: '',
        comment: '用户密码盐',
      },
      state: {
        type: INTEGER,
        notNull: true,
        notEmpty: true,
        defaultValue: 0,
        comment: '用户状态: 二进制状态, 从右到左, 是否激活, 是否禁止登录, 是否禁用 0为正常状态',
      },
      last_login: {
        type: DATE,
        notNull: true,
        notEmpty: true,
        defaultValue: '1971-01-01 00:00',
        comment: '最后登录时间',
      },
      created_at: DATE,
      updated_at: DATE,
    }, {});
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  },
};
