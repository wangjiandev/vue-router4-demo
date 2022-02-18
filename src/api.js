const host = 'http://127.0.0.1:3002/article'
const all = () => {
  return fetch(host).then((res) => res.json())
}

export default { all }
