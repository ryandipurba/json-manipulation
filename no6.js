const axios = require('axios');

// cetaklah semua nama (gabungan dari title, first, last) dari profile. contoh : Mrs Silke Nielsen
const soal1 = () => {
  let result = []
  axios.get("https://randomuser.me/api/?results=20")
    .then(res => {
      let data = res.data.results
      data.map(items => {
        let title = items.name.title + " "
        let first = items.name.first + " "
        let last = items.name.last + ""
        result.push({ nama: title + first + last })
      })
      console.log(result);
    })
    .catch((error) => console.log("Error : " + error));
}

// soal1()

// 2.temukan semua data yang memiliki gender 'male'.
const soal2 = () => {
  axios.get("https://randomuser.me/api/?results=20")
    .then(res => {
      let data = res.data.results
      const result = data.filter(items => items.gender === "male");
      console.log(result);
    })
    .catch((error) => console.log("Error : " + error));
}

// soal2()

// 3. 
function arrayToCSV(objArray) {
  const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  let str = `${Object.keys(array[0]).map(value => `"${value}"`).join(",")}` + '\r\n';

  return array.reduce((str, next) => {
    str += `${Object.values(next).map(value => `"${value}"`).join(",")}` + '\r\n';
    return str;
  }, str);
}

async function getUser() {
  const response = await axios.get('https://randomuser.me/api/?results=20');
  const result = response.data.results;

  const no1 = result.map(a => a.name.title + " " + a.name.first + " " + a.name.last)
  const no2 = result.filter(items => items.gender === "male");
  const no3 = result.map(a => {
    let name = a.name.title + " " + a.name.first + " " + a.name.last
    let email = a.email
    let phone = a.phone
    return ({ name: name, email: email, phone, phone })
  })
  console.log(arrayToCSV(no3));
}

getUser()



