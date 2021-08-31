const fs = require('fs')
var inventory = require('./data/inventory.json')

// 1. Find items in Meeting Room, and save it to items.json.

const soal1 = (data) => {
 let tes = data.map(item =>
  item).flat().filter(item => item.placement.name == "Meeting Room")
 console.log(tes);
 const jsonString = JSON.stringify(tes)
 fs.writeFile('./data/item.json', jsonString, err => {
  if (err) {
   console.log('Error writing file', err)
  } else {
   console.log('Successfully wrote file')
  }
 })
}
// soal1(inventory)

// 2.Find all electronic devices, and save it to electronic.json.

const soal2 = (data) => {
 let tes = data.map(item =>
  item).flat().filter(item => item.type == "electronic")
 console.log(tes);
 const jsonString = JSON.stringify(tes)
 fs.writeFile('./data/electronic.json', jsonString, err => {
  if (err) {
   console.log('Error writing file', err)
  } else {
   console.log('Successfully wrote file')
  }
 })
}

// soal2(inventory)


//3. Find all furnitures, and save it to furnitures.json.
const soal3 = (data) => {
 let tes = data.map(item =>
  item).flat().filter(item => item.type == "furniture")
 console.log(tes);
 const jsonString = JSON.stringify(tes)
 fs.writeFile('./data/furniture.json', jsonString, err => {
  if (err) {
   console.log('Error writing file', err)
  } else {
   console.log('Successfully wrote file')
  }
 })
}

// soal3(inventory)

//4. Find all items was purchased at 16 Januari 2020, and save it to purchased-at-2020-01-16.json.
const soal4 = (data) => {
 let tes = data.map(item =>
  item).flat().filter(item => new Date(item.purchased_at * 1000).toLocaleDateString() === "1/16/2020")
 console.log(tes);

 const jsonString = JSON.stringify(tes)
 fs.writeFile('./data/purchased-at-2020-01-16.json', jsonString, err => {
  if (err) {
   console.log('Error writing file', err)
  } else {
   console.log('Successfully wrote file')
  }
 })
}

// soal4(inventory)

// 5. Find all items with brown color, all-browns.json.
const soal5 = (data) => {
 let tes = data.map(item =>
  item).flat().filter(item => item.tags[2] === "brown")
 console.log(tes);

 const jsonString = JSON.stringify(tes)
 fs.writeFile('./data/all-browns.json', jsonString, err => {
  if (err) {
   console.log('Error writing file', err)
  } else {
   console.log('Successfully wrote file')
  }
 })
}

soal5(inventory)