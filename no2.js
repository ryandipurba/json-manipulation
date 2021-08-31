const axios = require('axios');

let data = []
axios.get("https://jsonplaceholder.typicode.com/posts")
 .then(res => {
  data = res.data
  const result = data.filter(items => items.userId === 1);
  console.log(result);
 })
 .catch((error) => console.log("Error : " + error))

