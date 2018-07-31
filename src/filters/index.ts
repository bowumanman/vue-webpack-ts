import store from '../store';
// tslint:disable-next-line:no-any
const state: any = store.state;
const filters = {
    // 通用csConst过滤器
    constFilter: (data, constType) => {
        const tempObj: { name: string}[] = state.csConst[constType].filter((item) => {
            return data === item.id;
        });
        if (tempObj.length === 0) {
            return '';
        } else {
            return tempObj[0].name;
        }
    }
};
export default filters;