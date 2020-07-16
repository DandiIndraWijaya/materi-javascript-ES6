//Callback 
//Syncrhonous Callback
// function halo(nama){
//     alert(`Nama saya adalah ${nama}.`);
// }

// function tampilkanNama(callback){
//     nama = prompt("Ketik nama anda: ");
//     callback(nama);
// }

// tampilkanNama(nama=> {
//     alert(`Halo, ${nama}`);
// });


// const mhs = [
//     {
//         "nama": "Dandi Indra Wijaya",
//         "NIM" : "4611418013",
//         "email": "dandiindra29@gmail.com",
//         "jurusan": "Ilmu Komputer",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Gunawan",
//         "NIM" : "4611418015",
//         "email": "gunawan@gmail.com",
//         "jurusan": "Ilmu Komputer",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Sinta Dewi",
//         "NIM" : "4611418023",
//         "email": "DewiSinta@gmail.com",
//         "jurusan": "Ilmu Komputer",
//         "idDosenWali": 1
//     }
// ];

// mhs.forEach(m => console.log(m.nama));


//Asynchronous Callback
// function getDataMahasiwa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status == 404){
//             error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send;
// }


// getDataMahasiwa('data/mahasiswa.json', results => {
// console.log(results);
// }, () => {

// });

console.log('mulai');

$.ajax({
    url: 'data/mahasiswa.json',
    success: mhs => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: () => {

    }

});

console.log('selesaio')