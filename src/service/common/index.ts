
// import { apiHttp } from '../apiHttp';
// import Api from './api';
import * as Interface from './interface';

export default {
    // 登录接口
    login: async (loginFrom: Interface.LoginForm) => {
        // const res: any = await apiHttp(Api.LOGIN, loginFrom);
        return {
            uid: 'qwere23412qsdew',
            access_token: 'qwere23412qsdewqwere23412qsdew'
        };
    },
    getDictionaries: async () => {
        return {
            names: [ {id: 1, name: '超级管理员'}, {id: 2, name: '管理员'}, {id: 3, name: '用户'}]
        };
    },
};
