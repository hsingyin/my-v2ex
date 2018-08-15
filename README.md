# my-v2ex
为了掌握Vue相关技术，尝试做了一个更好看的V2EX社区，虽然轮子已经很多了

> 调用V2EX社区官方api获取数据，故每个 IP 每小时可以发起的 API 请求数被限制在 120 次。对于我们学习交流够用了

*API来自[官方文档](https://www.v2ex.com/p/7v9TEc53)以及[djyde](https://github.com/djyde/V2EX-API)的整理。*
## 预览
![首页](https://i.imgur.com/33imI3u.png)

![最新](https://i.imgur.com/ca74gtg.png)

![帖子详情](https://i.imgur.com/3ofuyZY.png)


## 快速起步

### 1.环境&技术

- **Vue** + **Vue-router** + ~~**Vuex**~~ + **Element-UI** + **Axios**

### 2.运行


``` bash
# 安装依赖
npm install

# 运行项目
npm run dev

```

### 3.相关解决方案

- 本地调试跨域方案
	通过通过配置代理表实现跨域

```
	config/index.js
	-------------------
	proxyTable: {
	  '/api': {
	    target: 'https://www.v2ex.com',
	    changeOrigin: true,
	    pathRewrite: {
	      '^/api': '/api'
	    }
	  }
	}

```

## 不足

- 分页未实现
- 移动端未适配

## 感谢
https://github.com/bergwhite/v2ex-vue
https://www.v2ex.com/p/7v9TEc53

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
