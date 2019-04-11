# 聊天客户端

![效果图](http://oss.bstu.cn/images/20190404/82oxlrmlfakv3szz.png)

> 聊一聊

* [注册账号](https://yun.bstu.cn/#/register)
* [聊天入口](http://chat.bstu.cn/)

## Dev Setup

``` bash
# 安装
npm install

# 启动
npm run dev

# 访问
localhost:8080

```

## Build Setup

``` bash

# 打包

npm run build:test  # 测试
npm run build:pre   # 预发
npm run build:prod  # 线上

# 复制对应打包命令生成的文件到线上环境

> dist/test
> dist/pre
> dist/prod

```

## 项目结构

```

# 开发环境文件
chat-client
  config                // 配置文件
  src                   // 项目入口
    api                 // api
    assets              // 公共
    components          // 公共模块
    views               // 页面
    App.vue             // 页面入口
    main.js             // vue主入口
    router.js           // 路由配置
  .babelrc              // babel配置
  .postcssrc.js         // 添加浏览器私缀配置
  index.html            // html模板
  package.json          // 插件配置
  webpack.config.js     // 打包配置

# 线上环境文件(打包完成后，Jenkins或复制以下文件到线上访问即可)
chat-client
  dist
    tets                // 打包生成测试文件
    pre                 // 打包生成预发文件
    prod                // 打包生成线上文件

```

## 项目技术栈

字段|描述
----|----
axios|http请求
element-ui|样式框架
nprogress|加载条
socket.io-client|加载条

