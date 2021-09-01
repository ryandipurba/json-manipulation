const axios = require('axios').default
const fs = require('fs')

const loadData = async (url) => {
 try {
  const data = axios.get(url)
  return data
 } catch (err) {
  throw new Error(err)
 }
}


const nomorDua = async () => {
 try {
  const dataPost = await loadData('https://jsonplaceholder.typicode.com/posts')
  const dataUsers = await loadData('https://jsonplaceholder.typicode.com/users')
  const result = dataPost.data.map((post) => {
   return Object.assign({}, post, {
    user: dataUsers.data.filter((user) => post.userId === user.id)[0]
   })
  })
  console.log(result);
 } catch (err) {
  throw new Error(err)
 }

}

nomorDua()