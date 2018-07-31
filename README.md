# cms2.0

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Style

### 命名

* 目录命名采用-分割，例如：user-info
* 类名必须英文单词首字母大写，例如：UserInfo
* 变量名必须驼峰，例如：userName
* 常量名必须大写且多个单词时候用_分割，例如：MAX_AGE
* 方法名必须见名知意，必须添加动词,例如 getUserName()
* BEM规范
* [url命名规范](https://www.cnblogs.com/wangsen/p/5890995.html)
* URL规范：
URL规范：
详情页：
company-detail
investor-detail
fund-detail
lp-detail
person-detail
transaction-detail（投融资事件）
new-issue-detail（新股发行事件）
organization-detail（行业组织）
exchange-detail（交易所）
列表页:
company-list
investor-list
fund-list
lp-list
person-list
transaction-list（全部事件列表）
financing-list（融资事件列表）
mna-list（并购事件列表）
withdraw-list （退出事件列表）
new-issue-list（新股发行事件列表）cms里面有的 就用这里面的



// 初始化数据 相当于data
  public msg: number = 123;
  public form: LoginForm = {
    username: '',
    password: '',
    grant_type: 'password'
  };
  public rules = {
    username: [ { required: true, message: '请输入用户名', trigger: 'blur' } ],
    password: [ { required: true, message: '请输入密码', trigger: 'blur' } ],
  };
  // refs
  public $refs: {
    loginForm: HTMLFormElement
  };

  // 计算属性
  get computedMsg() {
    return 'computed ' + this.form.username;
  }

  // watch
  @Watch('msg')
  public onChildChanged(val: string, oldVal: string) {
    return val + '***';
  }

  // 生命周期钩子
  public mounted() {
    this.getMessage();
    particles();
  }
  public created() {
    this.getMessage();
  }

  // 方法
  public getMessage() {
    this.msg = 456;
  }

  ### 分支
  master：主分支 
  develop：开发分支
  bug1.0：cms2.0第一个版本修复bug用的分支
  build-develop：当初因为编辑缓慢而新建的分支，用来测试并修改构建速度（试用了多种配置后感觉效果不太好）
  test：测试分支 对应232测试环境
  release：正式环境发布用的分支（非负责人不要修改）

