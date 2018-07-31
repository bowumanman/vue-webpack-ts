// import store from '../store';
export const LOCAL_USER = 'CVS_CMS_USER';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_DICTIONARY = 'SET_DICTIONARY';
export const SET_AUTH_LIST = 'SET_AUTH_LIST';
export const TAB_MENU_LIST = 'TAB_MENU_LIST';
export const TAB_MENU_CURR_INDEX = 'TAB_MENU_CURR_INDEX';
interface Action {
    // tslint:disable-next-line:no-any
    commit: any;
}
export default {
    state: {
        token: undefined,
        uid: undefined,
        dictionary: {},
        authList: [],
        menuList: [],
    },
    mutations: {
        [SIGN_IN](state: StoreState.State, user: StoreState.State) {
            Object.assign(state, user);
        },
        [SIGN_OUT](state: StoreState.State) {
            for (const key of Object.keys(state)) {
                delete state[key];
            }
        },
        [SET_DICTIONARY](state: StoreState.State, dictionary: object[]) {
            state.dictionary = dictionary;
            // state = {...dictionary, state};
        },
        [SET_AUTH_LIST](state: StoreState.State, authList: object[]) {
            state.authList = authList;
        },
    },
    actions: {
        // tslint:disable-next-line:no-any
        signIn({ commit }: Action, user: any) {
            commit(SIGN_IN, user);
            const promise = new Promise((retResolve) => {
                localStorage.setItem(LOCAL_USER, JSON.stringify(user));
                retResolve();
            });
            return promise;
        },
        singOut({ commit }: Action) {
            commit(SIGN_OUT);
            const promise = new Promise((retResolve) => {
                localStorage.removeItem(LOCAL_USER);
                retResolve();
            });
            return promise;
        },
        refreshUser({ commit }: Action) {
            const promise = new Promise((retResolve) => {
                const user = localStorage.getItem(LOCAL_USER);
                if ( user ) {
                    retResolve(JSON.parse(user));
                } else {
                    retResolve(undefined);
                }
            });
            return promise;
        },
        async refreshFieldList({commit}: Action) {
            // if (Object.keys(store.state.user).length > 0) {
                // let resData = await apiHttp(api.REFRESH_FIELD_LIST);
                // if (resData.resCode === STATUS_HTTP_SUCCESS) {
                //     commit(SIGN_IN, resData.data);
                //     return resData.data;
                // }
            // }
        }
    }
};