declare namespace StoreState {
    export interface State {
        token: string | undefined;
        dictionary: object[];
        authList: object[];
    }
}