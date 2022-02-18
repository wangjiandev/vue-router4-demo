# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 启动 json-server 模拟后端接口

安装 json-server 和 mockjs

```sh
yarn add json-server -g
yarn add mockjs -d
```

db.js

```js
const Mock = require('mockjs')
//Mock.Random 是一个工具类，用于生成各种随机数据
const Random = Mock.Random

module.exports = () => {
  //定义json-server需要的数据结构
  let data = { article: [] }

  //添加20条包含中文的内容
  for (let i = 1; i <= 20; i++) {
    data.article.push({
      id: i,
      title: Random.cword(10, 20),
      content: Random.cparagraph(10),
    })
  }
  return data
}
```

然后执行 json-server 命令，并指定数据源为 db.js 文件

```sh

json-server --watch --port 3002 --host 127.0.0.1 db.js

```
