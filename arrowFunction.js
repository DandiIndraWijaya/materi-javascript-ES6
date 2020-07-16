// //function expression
// const tampilNama = (nama) =>{
//     return (`Halo ${nama}!`);
// }

// console.log(tampilNama('Dandi'));


// //implisit return => return tidak perlu ditulis
// const waktu = waktu => `Selamat ${waktu}!`;
// console.log(waktu('Pagi'));


// //contoh lain => function map
// let mahasiswa = ['Dandi', 'Indra', 'Wijaya'];
// //fungsi biasa
// // let jumlahHuruf = mahasiswa.map(function(nama){
// //     return nama.length;
// // });
// // console.log(jumlahHuruf);

// //fungsi arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// //returnnya objek
// let jumlahHurufObjek = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length}));
// console.table(jumlahHurufObjek);

// //constructor function
// const Mahasiswa = function(){
//     this.nama = 'Dandi';
//     this.umur = 33;
//     this.sayHello = function (){
//         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`)
//     }
// }

// const Dandi = new Mahasiswa();
// Dandi.sayHello();

//arrow function
// const Mahasiswa = function(){
//     this.nama = 'Dandi';
//     this.umur = 33;
//     this.sayHello = function (){
//         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`)
//     }
//     setInterval(() => {
//         // console.log(this.umur++);
//     }, 500);
// }

// const Dandi = new Mahasiswa();
// Dandi.sayHello();

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
})
