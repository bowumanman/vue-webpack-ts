export default {
    // 登录
    LOGIN: { url: 'oauth/oauth/token', method: 'post' },
    // 文件上传授权-单个
    GET_POLICY: { url: 'cms/v2/api/policy/{ext}', method: 'get' },
    // 文件上传授权-单个
    GET_POLICY_LIST: { url: 'cms/v2/api/policy/list', method: 'post' },
    // 文件上传地址
    UPLOAD_URL: {url: 'https://chinaventure.oss-cn-beijing.aliyuncs.com/', method: 'post'},
};