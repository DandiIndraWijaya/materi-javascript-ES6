//Destructuring Variable / Assignment

//Destructuring Array
// const perkenalan = ['halo', 'nama', 'saya', 'Dandi'];

// // const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan;

// console.log(nama);

// //Swap items
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a);

// //return value pada function
// function coba(){
//     return [1, 2];
// }

// const [a, b] = coba();

//Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];

//Destructuring object
// const mhs = {
//     nama: 'Dandi',
//     umur: 20
// }

// const {nama, umur} = mhs;
// console.log(nama);

//Assignment tanpa deklasrasi objek
// ({nama, umur} = {nama: 'Dandi Indra Wijay', umur: 20});
// console.log(nama);

//Assign ke variabel baru
// const mhs = {
//     nama: 'Dandi',
//     umur: 20
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);

//memberikan default value
// const mhs = {
//     nama: 'Dandi',
//     umur: 20,
//     email: 'Ejo'
// }

// const {nama, umur, email: e = 'dandiindraWuaj'} = mhs;
// console.log(email);

//mengambil field pada object, seteleah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Dandi',
    umur: 20,
    email: 'Ejo'
}

function getMhs({id}){
    return id;
}

console.log(getMhs(mhs));