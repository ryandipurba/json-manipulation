const fs = require('fs')
var inventory = require('./data/inventory.json')

const createFileJson = (name, data) => {
 const jsonString = JSON.stringify(data)
 fs.writeFile(`./data/${name}.json`, jsonString, err => {
  if (err) {
   console.log('Error writing file', err)
  } else {
   console.log('Successfully wrote file')
  }
 })
}

// 1. Find items in Meeting Room, and save it to items.json.

const soal1 = (data) => {
 let result = data.map(item =>
  item).flat().filter(item => item.placement.name == "Meeting Room")
 console.log(result);
 createFileJson("items", result)
}
// soal1(inventory)

// 2.Find all electronic devices, and save it to electronic.json.

const soal2 = (data) => {
 let result = data.map(item =>
  item).flat().filter(item => item.type == "electronic")
 console.log(result);
 createFileJson("electronic", result)
}

// soal2(inventory)


//3. Find all furnitures, and save it to furnitures.json.
const soal3 = (data) => {
 let result = data.map(item =>
  item).flat().filter(item => item.type == "furniture")
 console.log(result);
 createFileJson("furnitures", result)
}

// soal3(inventory)

//4. Find all items was purchased at 16 Januari 2020, and save it to purchased-at-2020-01-16.json.
const soal4 = (data) => {
 let result = data.map(item =>
  item).flat().filter(item => new Date(item.purchased_at * 1000).toLocaleDateString() === "1/16/2020")
 console.log(result);
 createFileJson("purchased-at-2020-01-16", result)
}

// soal4(inventory)

// 5. Find all items with brown color, all-browns.json.
const soal5 = (data) => {
 let result = data.map(item =>
  item).flat().filter(item => item.tags[2] === "brown")
 console.log(result);
 createFileJson("all-browns", result)
}

// soal5(inventory)