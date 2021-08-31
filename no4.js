var like = require('./data/like.json')

// 1. Find users who doesn't have any phone numbers.
const soal1 = (data) => {
 const result = data.filter(items => items.profile.phones.length == 0);
 console.log(result);
}
// soal1(like)

// 2. Find users who have articles.
const soal2 = (data) => {
 const result = data.filter(items => items.articles.length !== 0);
 console.log(result)
}
// soal2(like)

//3. Find users who have "annis" on their name.
const soal3 = (data) => {
 data.map(items => {
  let str = items.profile.full_name
  if (str.includes("Annis")) {
   console.log(items);
  }
 })
}

// soal3(like)

// 4. Find users who have articles on year 2020.
const soal4 = (data) => {
 data.map(items => {
  items.articles.forEach(element => {
   let date = new Date(element.published_at)
   arr = date.toDateString()
   arrDate = arr.split(" ")
  });
  if (arrDate[3] == "2020") {
   console.log(items);
  }
 })
}
// soal4(like)

// 5. Find users who are born on 1986.
const soal5 = (data) => {
 data.map(items => {
  let date = new Date(items.profile.birthday)
  let year = date.getFullYear()
  if (year == "1986") {
   console.log(items);
  }
 })
}

// soal5(like)

// 6.Find articles that contain "tips" on the title.

const soal6 = (data) => {
 data.map(items => {
  items.articles.forEach(element => {
   let str = element.title
   if (str.includes("Tips")) {
    console.log(element);
   }
  })
 })
}

// soal6(like)

// 7. Find articles published before August 2019.

const soal7 = (data) => {
 // let tes = data.map(item => {
 //  arr = []
 //  item.articles.forEach(element => {
 //   let newDate = new Date(2019, 08, 1)
 //   if (new Date(element.published_at) < newDate) {
 //    arr.push(element)
 //   }
 //  });
 //  return arr
 // }).flat().filter(items => items.id == 39)
 // console.log(tes);
 // return tes
 // return tes.flat()
 let tes = data.map(item =>
  item.articles
 ).flat().filter(item => new Date(item.published_at) < new Date(2019, 08, 1))
 console.log(tes);
}

soal7(like)