// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam(`Pagi`);

// console.dir(selamatPagi);


let add = function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
}

let a = add();

console.log(a());
console.log(a());