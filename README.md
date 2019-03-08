# vue-admin-pro
Solution for company middle and backstage, written using the vue and nuxtjs

# 介绍
vue-admin-pro是一个企业中后台的前端解决方案。该方案使用了vue、nuxtjs。在设计上的参考目标是阿里使用ant design设计的ant design pro。在线查看地址[http://vueadmin.sikukeji.com](http://vueadmin.sikukeji.com)

![首页](http://common.qiniu.sikukeji.com/004.png)

# 安装使用
首先clone该代码库到本地
```
git clone https://github.com/gmars/vue-admin-pro.git
```
然后运行
```
cd vue-admin-pro

yarn install
```
运行项目
```
yarn dev
```
浏览
在浏览器中输入 http://localhost:3000 就可以访问

# 目录结构

|-components   封装的组件目录  <br>
|-pages        页面组件  <br>
|-plugins      第三方组件的配置在该项目中使用了element-ui和axios  <br>
|-layouts      布局和公共页面组件  <br>
|-store        基于vuex的状态管理  <br>
|-utils        工具函数等  <br>

# 依赖
```
"@nuxtjs/axios": "^5.0.0",
"@nuxtjs/style-resources": "^0.1.1",
"cross-env": "^5.2.0",
"echarts": "^4.2.0-rc.2",
"element-ui": "^2.4.6",
"less": "^3.9.0",
"less-loader": "^4.1.0",
"nuxt": "^2.0.0",
"v-charts": "^1.19.0"
```
# 截屏
![](http://common.qiniu.sikukeji.com/001.png)

![](http://common.qiniu.sikukeji.com/002.png)

![](http://common.qiniu.sikukeji.com/003.png)
