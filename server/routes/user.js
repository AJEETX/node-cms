var express = require('express');
var router = express.Router();

var user = require('../../server/controllers/user');

//登录
router.route('/login').get(user.login).post(user.login);
//注册
router.route('/register').get(user.register).post(user.register);
//注销
router.route('/logout').get(user.logout);
//单个用户
router.route('/:id').get(user.one);
//编辑用户信息
router.route('/:id/edit').get(user.edit).post(user.edit);
//删除用户
router.route('/:id/del').get(user.del).post(user.del);
//用户列表
router.route('/').get(user.list);


module.exports = function(app) {
    //app.use('/user', router);
    var config = app.get('config');
    var path = (config.admin.dir ? '/' + config.admin.dir : '') + '/user';
    app.use(path, router);
};
