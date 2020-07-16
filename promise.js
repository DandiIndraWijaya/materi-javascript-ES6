// fetch('http://www.omdbapi.com/?apikey=8874880e&s=avengers').then(response => response.json()).then(response => console.log(response))


//Promise 
//Object yang merepresentasikan keberhasilan/ kegagalan sebuah event yang asychronous di masa yang akan datanag
//janji (terpenuhi/ingkar)
//states (fulfilled/rejected/pending)
//callback (resolve/reject/finally)
//aksi (then /catch)

//contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji ditepat')
//     }else{
//         reject('Ingkar jandi')
//     }
// });

// janji1.then(response => console.log('Ok')).catch(response => console.log('not ok'))

//contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//            resolve('Ditepati setelah beberapa waktu'); 
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu'); 
//          }, 2000);
//     }
// });

// console.log('mulai');

// janji2
//     .finally(() => console.log('selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))

// console.log('selesai');


//Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
       resolve({
           judul: 'Avenggers',
           sutradara: 'Dandi Indra Wijaya',
           pemeran: 'Indra, Wijaya'
       }) 
    },1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve({
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        })
    }, 500);
});

Promise.all([film, cuaca])
    // .then(response => console.log(response))
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })

