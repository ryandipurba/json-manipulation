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
const soal3 = () => {
  let result = []
  axios.get("https://randomuser.me/api/?results=20")
    .then(res => {
      let data = res.data.results
      data.map(items => {
        let title = items.name.title + " "
        let first = items.name.first + " "
        let last = items.name.last + ""
        let email = items.email
        let phone = items.phone
        result.push({
          nama: title + first + last,
          email: email,
          phone: phone
        })
      })
      console.log(result);
    })
    .catch((error) => console.log("Error : " + error));
}

// soal3()


async function getUser() {
  const response = await axios.get('https://randomuser.me/api/?results=20');
  const result = response.data.results;

  const name = result.map(a => a.name.title + " " + a.name.first + " " + a.name.last)
  console.log(name);
}

getUser()