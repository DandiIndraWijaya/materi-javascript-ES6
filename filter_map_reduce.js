const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
//mencari angka >= 3

//dengan menggunakan for
// const angkaBaru = [];
// for( let i=0 ; i<angka.length ; i++){
//     if(angka[i] >= 3){
//         angkaBaru.push(angka[i]);
//     }
// }
// console.log(`Hasil menggunakan for: ${angkaBaru}`);

//menggunakan fungis filter
const newAngka = angka.filter(a => a >= 3);
console.log(`Hasil menggunakan funsi filter: ${newAngka}`);

//map
//kalikan semua angka dengan 2
const angkaBaru = angka.map(a => a * 2);
console.log(`Hasil map: ${angkaBaru}`);

//reduce
//jumlahkan seluruh elemen pada array
//  5, -1, 8, 9, 1, 4, -5, -4, 3, 2, 9
const hasilAngka = angka.reduce((accumulator,currentArray) => accumulator + currentArray, 5);
console.log(`Hasil reduce: ${hasilAngka}`);


//chaining => menggambungkan fungsi-fungsi higer order function dalam satu kali eksekusi
//Cari angka lebih besar dari 5, kalikan 3, lalu jumlahkan 

const filterChain = angka.filter(a => a > 5);
const mapChain = filterChain.map(a => a * 3);
const reduceChain = mapChain.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Hasil reduce soal chaining: ${reduceChain}`);

const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(`Hasil chaining: ${hasil}`);

