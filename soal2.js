/**
 * Menentukan bilangan ganjil dan genap
 * 
 * Buatlah program untuk menentukan input bilangan apakah ganjil atau genap. Gunakan if-else dan function yang mengembalikan hasil "ganjil"/"genap"
 */

function checkOddEven(number) {
    if (typeof number !== "number") {
        return "invalid input";
    }

    if (number % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

console.log(checkOddEven(5), "==> INI RESULT 1 DI LINE 19"); // ganjil
console.log(checkOddEven(2), "==> INI RESULT 1 DI LINE 20"); // genap
console.log(checkOddEven("enam"), "==> INI RESULT 1 DI LINE 21"); // invalid input



/**
 * Menentukan usia dewasa
 * 
 * Buat sebuah program yang meminta usia seseorang, lalu gunakan if-else untuk menampilkan apakah seseorang tersebut sudah dewasa (>=18 tahun) atau belum. Gunakan if-else dan function yang mengembalikan string
 */

function checkMature(age) {
    if (typeof age !== "number" || age < 0) {
        return "invalid input";
    }

    if (age >=18) {
        return "Dewasa";
    } else {
        return "Belum dewasa";
    }
}

console.log(checkMature(18), "==> INI RESULT 2 DI LINE 43"); // Dewasa
console.log(checkMature(17), "==> INI RESULT 2 DI LINE 44"); // Belum dewasa
console.log(checkMature("enam"), "==> INI RESULT 2 DI LINE 45"); // invalid input
console.log(checkMature(-1), "==> INI RESULT 2 DI LINE 46"); // invalid input



/**
 * Menentukan score student
 * 
 * Buat program yang mengubah nilai angka ke dalam nilai huruf (A, B, C, D, E) berdasarkan rentang berikut:
 * 90 - 100: A
 * 80 - 89: B
 * 70 - 79: C
 * 60 - 69: D
 * < 60: E
 * Gunakan if-else dan function yang mengembalikan string
 */

function scoreReport(score) {
    if (score !== "number" || score < 0 || score > 100) {
        return "invalid input";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B"
    } else if (score >=70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "E"
    }
}

console.log(scoreReport(90), "==> INI RESULT 3 DI LINE 80"); // A
console.log(scoreReport(89), "==> INI RESULT 3 DI LINE 81"); // B
console.log(scoreReport(75), "==> INI RESULT 3 DI LINE 82"); // C
console.log(scoreReport(59), "==> INI RESULT 3 DI LINE 83"); // E
console.log(scoreReport(101), "==> INI RESULT 3 DI LINE 84"); // invalid input
console.log(scoreReport(-1), "==> INI RESULT 3 DI LINE 85"); // invalid input
console.log(scoreReport("sembilan puluh"), "==> INI RESULT 3 DI LINE 86"); // invalid input



/**
 * Menampilkan Bilangan Ganjil dari 1 sampai 20
 * 
 * Buat program yang menampilkan semua bilangan ganjil dari 1 sampai 20 menggunakan for loop
 */

function loopCheckOddEven(number) {
    if (typeof number !== "number") {
        console.log("invalid input");
        return;
    }

    for (let index = 1; index < number; index++) {
        if (index % 2 === 0) {
            console.log(`${index} => Bilangan Genap`)
        } else {
            console.log(`${index} => Bilangan Ganjil`)
        }
    }
    console.log("==> INI RESULT 4 DI LINE 109")
}

loopCheckOddEven(5) 
// 1 => Bilangan Ganjil
// 2 => Bilangan Genap
// 3 => Bilangan Ganjil
// 4 => Bilangan Genap
// 5 => Bilangan Ganjil
loopCheckOddEven("lima") // invalid input



/**
 * Menghitung Total Jumlah Angka
 * 
 * Buat program yang menjumlahkan semua angka dari 1 sampai dengan 100 menggunakan loop. Gunakan function yang mengirimkan value hasil penjumlahan tersebut
 */

function totalValue(inputNumber) {
    if (typeof inputNumber !== "number" || inputNumber <= 0) {
        console.log("invalid input");
        return;
    }

    let total = 0;
    for (let index = 1; index <= inputNumber; index++) {
        total = total + index;
    }
    return total;

}

console.log(totalValue(100), "==> INI RESULT 5 DI LINE 142 & 143"); // 5050
console.log(totalValue("empat")); // invalid input



/**
 * Menghitung huruf vokal
 * 
 * Buat program yang menerima sebuah string, lalu hitung berapa banyak huruf vokal (a, e, i, o, u) di dalam string tersebut. Gunakan function untuk mengembalikan value total jumlah huruf vocal
 */

function checkVowels(vowelsCheck) {
    const vocal = ["a", "e", "i", "o", "u"]
    const inputChar = vowelsCheck.toLowerCase().split('')
    let totalWords = 0
    for (let i = 0; i < vowelsCheck.length; i++) {
        for (let j = 0; j < vocal.length; j++) {
            if(inputChar[i] === vocal[j]){
                totalWords++
            }
        }
    }
    return totalWords;

}

console.log(checkVowels("I Love JavaScript"), "==> INI RESULT 6 DI LINE 168"); // 6
console.log(checkVowels("mie ayam"), "==> INI RESULT 6 DI LINE 169"); //4



/**
 * Cek karakter vokal atau konsonan
 * 
 * Buatlah sebuah fungsi untuk memeriksa apakah sebuah karakter adalah vokal atau konsonan
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama checkVowelConsonant.
 * 2. Fungsi tersebut harus menerima satu parameter, contoh nama parameternya "char".
 * 3. Gunakan pernyataan if, else if, dan else untuk memeriksa apakah char adalah vokal atau konsonan.
 * 4. Anggap bahwa input selalu berupa SATU KARAKTER HURUF.
 * 5. RETURN string "Vokal" atau "Konsonan" sesuai dengan nilai char.
 */

function checkVowelConsonant(char) {
    let inputChar = char.toLowerCase()
    if (inputChar === 'a') {
        return "Vokal"
    } else if (inputChar === 'e') {
        return "Vokal"
    } else if (inputChar === 'i') {
        return "Vokal"
    } else if (inputChar === 'o') {
        return "Vokal"
    } else if (inputChar === 'u') {
        return "Vokal"
    } else {
        return "Konsonan"
    }

}

console.log(checkVowelConsonant('A'), "==> INI RESULT 7 DI LINE 204"); // Output: "Vokal"
console.log(checkVowelConsonant('b'), "==> INI RESULT 7 DI LINE 205"); // Output: "Konsonan"
console.log(checkVowelConsonant('a'), "==> INI RESULT 7 DI LINE 206"); // Output: "Vokal"



/**
 * Menentukan kelayakan Voting
 * 
 * Buatlah sebuah fungsi JavaScript yang memeriksa apakah seseorang memenuhi syarat untuk memberikan suara dalam pemilihan berdasarkan usia.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama canVote.
 * 2. Fungsi tersebut harus menerima satu parameter age.
 * 3. Gunakan pernyataan if dan else untuk memeriksa apakah age lebih besar atau sama dengan 18.
 * 4. RETURN tipe data BOOLEAN, true jika age >= 18, dan false jika tidak.
 */

function canVote(age) {
    if (typeof age !== "number" || age < 0) {
        return true
    } 
        return age >= 18

}

console.log(canVote(20), "==> INI RESULT 8 DI LINE 230"); // true
console.log(canVote(17), "==> INI RESULT 8 DI LINE 231"); // false




/**
 * Menentukan Hari dalam Seminggu
 * 
 * Buatlah sebuah fungsi JavaScript yang menerima angka dan mengembalikan nama hari dalam seminggu.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama getDayName.
 * 2. Fungsi tersebut harus menerima satu parameter dayNumber (1 sampai 7).
 * 3. Gunakan pernyataan if, else if, dan else untuk mengembalikan nama hari dalam seminggu:
 *      a. 1: "Senin"
 *      b. 2: "Selasa"
 *      c. 3: "Rabu"
 *      d. 4: "Kamis"
 *      e. 5: "Jumat"
 *      f. 6: "Sabtu"
 *      g. 7: "Minggu"
 * 4. RETURN "Nomor hari tidak valid" jika dayNumber tidak berada dalam rentang 1 sampai 7.
 */

function getDayName(dayNumber) {
    if (typeof dayNumber !== "number" || dayNumber < 1 || dayNumber > 7) {
        return "Nomor hari tidak valid"
    }

    if (dayNumber === 1) {
        return "Senin";
    } else if (dayNumber === 2) {
        return "Selasa"
    } else if (dayNumber === 3) {
        return "Rabu"
    } else if (dayNumber === 4) {
        return "Kamis"
    } else if (dayNumber === 5) {
        return "Jumat"
    } else if (dayNumber === 6) {
        return "Sabtu"
    } else if (dayNumber === 7) {
        return "Minggu"
    }

}

console.log(getDayName(1), "==> INI RESULT 9 DI LINE 278"); // Output: "Senin"
console.log(getDayName(5), "==> INI RESULT 9 DI LINE 279"); // Output: "Jumat"
console.log(getDayName(8), "==> INI RESULT 9 DI LINE 280"); // Output: "Nomor hari tidak valid"




/**
 * Membalikkan Array
 * 
 * Buatlah sebuah fungsi JavaScript yang membalikkan urutan elemen dalam sebuah array menggunakan loop.
 * 
 * Langkah: 
 * 1. Buat sebuah fungsi bernama reverseArray.
 * 2. Fungsi tersebut harus menerima satu parameter berupa array arr.
 * 3. Boleh menggunakan built in function, setelah itu dicoba mengunakan loop untuk membalikkan urutan elemen dalam array tersebut.
 * 4. RETURN array yang telah dibalik.
 */

function reverseArray(arr) {
    let revArray = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        revArray.push(arr[index]);
    }
    return revArray;

}

console.log(reverseArray([1, 2, 3, 4, 5]), "==> INI RESULT 10 DI LINE 306"); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c']), "==> INI RESULT 10 DI LINE 307"); // Output: ['c', 'b', 'a']



/**
 * Buat function untuk mengecek apakah input tersebut palindrome, return true jika palindrome, dan jika tidak palindrome maka return false
 * 
 */

const isPalindrome = (inputUser) => {
    if (typeof inputUser !== "string") {
        return false;
    }

    const cleanedInput = inputUser.replace(/\s+/g, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");

    return cleanedInput === reversedInput;

}

console.log(isPalindrome("kasur rusak"), "==> INI RESULT 11 DI LINE 328"); // true
console.log(isPalindrome("kodok"), "==> INI RESULT 11 DI LINE 329"); // true
console.log(isPalindrome("makan malam"), "==> INI RESULT 11 DI LINE 330"); // false