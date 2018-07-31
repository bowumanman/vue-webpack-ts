
export default (type = process.env.NODE_ENV) => {
    let url: string = '';
    switch (type) {
        case 'development' :
        //    url = 'https://checking.cvsource.com.cn:6443';
             url = 'http://test.cvsource.com.cn:9005';
            break;
        case 'test' :
            url = 'http://test.cvsource.com.cn:9005';
            break;
        case 'production' :
            url = 'https://checking.cvsource.com.cn:6443';
            break;
        default : url = 'https://checking.cvsource.com.cn:6443';
    }
    return url;
};
