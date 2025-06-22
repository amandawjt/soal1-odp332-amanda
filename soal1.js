// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = (addNumber) => {
    let total = 0
    for (let index = 1; index <= addNumber.length; index++) {
        if (index % 2 === 0) {
            total = total + index;
        }
    }
return total
}

console.log(resultOne(numbers), "==> INI RESULT 1 DI LINE 13");


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = (addNumber) => {
    let total = 0
    for (let index = 1; index <= addNumber.length; index++) {
        if (index % 2 !== 0) {
            total = total + index;
        }
    }
return total
}

console.log(resultTwo(numbersTwo), "==> INI RESULT 2 DI LINE 28");


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = []
    for (let index = 0; index < students.length; index++) {
        resultThree.push(students[index].toUpperCase());
    }

console.log(resultThree, "==> INI RESULT 3 DI LINE 38")


// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
let resultFour = []
    for (let index = 0; index < people.length; index++) {
      if (people[index].age > 18) {
            resultFour.push(people[index].name);
      }  
    }

console.log(resultFour, "==> INI RESULT 4 DI LINE 56")


// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let totalPrice = 0;
    for (let index = 0; index < items.length; index++) {
        totalPrice = totalPrice + items[index].price;
    }

console.log(totalPrice, "==> INI RESULT 5 DI LINE 70")
  

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
let resultSix = []
    for (let index = 0; index < numbersThree.length; index++) {
        if (!resultSix.includes(numbersThree[index])) {
            resultSix.push(numbersThree[index]);
        }
    }

console.log(resultSix, "==> INI RESULT 6 DI LINE 82")


// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let resultSeven = products [0]
    for (let index = 1; index < products.length; index++) {
        if (products[index].price > resultSeven.price) {
            resultSeven = products[index];
        }
    }

console.log(resultSeven, "==> INI RESULT 7 DI LINE 98")


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let resultEight = ""
    for (let index = 0; index < words.length; index++) {
        resultEight = resultEight + words[index];
    }

console.log(resultEight.trim(), "==> INI RESULT 8 DI LINE 108")


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let resultNine = []
    for (let index = 0; index < names.length; index++) {
        if (names[index].toLowerCase().includes("a")) {
            resultNine.push(names[index]);
            if (resultNine.length === 3) {
                break;
            }
        } 
    }

console.log(resultNine, "==> INI RESULT 9 DI LINE 123")


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let resultTen = 0
    for (let index = 0; index < namesTwo.length; index++) {
        resultTen = resultTen + namesTwo[index].length;
    }

console.log(resultTen, "==> INI RESULT 10 DI LINE 133")


// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
let resultEleven = []
    for (let index = 0; index < peopleTwo.length; index++) {
        if (peopleTwo[index].age > 21) {
            resultEleven.push(`${peopleTwo[index].name} (${peopleTwo[index].age})`)
        }  
    }

console.log(resultEleven, "==> INI RESULT 11 DI LINE 150")