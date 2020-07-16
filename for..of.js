//for..of


// //array
// const mhs = ['Dandi', 'Indra', 'Wijaya'];

// mhs.forEach(m => console.log(m));

// for(const m of mhs){
//     console.log(m);
// }


//string
// const nama = 'Dandi';
// for(const n of nama){
//     console.log(n);
// }


// const mhs = ['Dandi', 'Indra', 'Wijaya'];
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i+1}`));

// for(const [i, m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// }


//Node
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML));
// for( n of liNama){
//     console.log(n.innerHTML);
// }



//arguments
function jumlahAngka(){
    let jumlah = 0;

    for( a of arguments){
        jumlah += a;
    }

    return jumlah;
}

console.log(jumlahAngka(1,2,3,4,5));

