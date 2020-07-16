// //Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunc(a, b, ...myArgs){
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     //return myArgs
//     //return Array.from(arguments)
//     // return [...arguments]
// }

// // console.log(myFunc(1,2,3,4,5));

// function jumlahKan(...angka){
//     let total = 0;
//     for(a of angka){
//         total += a;
//     }

//     return total;
// }

// console.log(jumlahKan(1,2,3,4,5));

//array destructuring
const kelompok1 = ['Dandi', 'Indra', 'Wijaya', 'Ica', 'Aztek'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota)

//Object Destructuring


//filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type)
}

console.log(filterBy('number', 1,2, 'Dandi', false, 10, true, 'Doddy'));