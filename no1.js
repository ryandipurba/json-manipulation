var purchase = require('./data/purchases.json')

// soal 1

const soal1 = (data) => {
 data.map(items => {
  var date = new Date(items.created_at)
  arr = date.toDateString()
  arrDate = arr.split(" ")
  if (arrDate[1] === "Feb") {
   console.log(items);
  }
 })
}

soal1(purchase)

// 2
const soal2 = (data) => {
 grandTotal = 0;
 data.filter(user => {
  if (user.customer.name == "Ari") {
   user.items.map(data => {
    grandTotal += data.qty * data.price
   })
  }
 })
 // console.log(grandTotal);
}

soal2(purchase)

// 3
const soal3 = (data) => {
 grandTotal = 0;
 nama = []
 data.map(user => {
  user.items.map(data => {
   grandTotal += data.qty * data.price
  })
  if (grandTotal < 300000) {
   nama.push(user.customer.name)
  }
  grandTotal = 0
 })
 console.log(nama);
}

// soal3(purchase)
