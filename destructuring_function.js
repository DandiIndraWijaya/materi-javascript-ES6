//Destructuring

// function kalkulasi(a, b){
//     return [a + b, a - b, a * b, a / b];
// }

// // const jumlah = penjumlahanPerkalian(2, 3)[0];
// // // console.log(jumlah);

// // const [jumlah, kali] = penjumlahanPerkalian(2, 3);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);


// function kalkulasi(a, b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);

//Destructuring function arguments

const mhs1 = {
    nama: 'Dandi Indra Wijaya',
    umur: 33,
    email: 'dandiindra29@gamil.com',
    nilai: {
        tugas: 90,
        uts: 85,
        uas: 75
    }
}

function cetakMhs({ nama, umur, nilai: {tugas, uts, uas} }){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai UTS saya adalah ${uts}.`;
}

console.log(cetakMhs(mhs1));

