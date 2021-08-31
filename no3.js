const axios = require('axios')

let data = []
axios.get("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
 .then(res => {
  data = res.data
  const result = data.filter(items => items.category === "fruits");
  console.log(result);
 })
 .catch((error) => console.log("Error : " + error));





