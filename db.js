const Mock = require('mockjs')
//Mock.Random 是一个工具类，用于生成各种随机数据
const Random = Mock.Random

module.exports = () => {
  //定义json-server需要的数据结构
  let data = { article: [], user: [] }

  //添加20条包含中文的内容
  for (let i = 1; i <= 20; i++) {
    data.article.push({
      id: i,
      title: Random.cword(10, 20),
      content: Random.cparagraph(10),
    })
  }

  //添加20条包含中文的内容
  for (let i = 1; i <= 20; i++) {
    data.user.push({
      id: i,
      name: Random.cname(),
    })
  }
  return data
}
