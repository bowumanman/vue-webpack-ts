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

### 命名

* 目录命名采用-分割，例如：user-info
* 类名必须英文单词首字母大写，例如：UserInfo
* 变量名必须驼峰，例如：userName
* 常量名必须大写且多个单词时候用_分割，例如：MAX_AGE
* 方法名必须见名知意，必须添加动词,例如 getUserName()
* BEM规范
* [url命名规范](https://www.cnblogs.com/wangsen/p/5890995.html)
* URL规范：


### 例子
``` bash
# 初始化数据 相当于data
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

#  refs
  public $refs: {
    loginForm: HTMLFormElement
  };

#  计算属性
  get computedMsg() {
    return 'computed ' + this.form.username;
  }

#  watch
  @Watch('msg')
  public onChildChanged(val: string, oldVal: string) {
    return val + '***';
  }

#  生命周期钩子
  public mounted() {
    this.getMessage();
    particles();
  }
  public created() {
    this.getMessage();
  }

#  方法
  public getMessage() {
    this.msg = 456;
  }
、、、
  ### 分支
* master：主分支 
* develop：开发分支
* test：测试分支
* release：正式环境发布用的分支（非负责人不要修改）

