// //object literal
// let monster = {
//     name: 'Giant Ant',
//     energy: 100,
//     hitByHand: function (min){
//         this.energy -= min;
//         console.log(`Giant Ants energy now: ${this.energy}`);
//     }
// }

// //function declaration
// // function Characters(){
// //     let myChar = {
// //         energy: 100
// //     }

// //     myChar.hitByGiantAnt = function (min){
// //         this.energy -= min;
// //         console.log(`Your energy now is ${this.energy}`);
// //     }

// //     return myChar;
// // }

// // let Dandi = Characters();


// //constructor Function
// function Characters(){

//     this.energy = 100;

//     this.hitByGiantAnt = function (min){
//         this.energy -= min;
//         console.log(`Your energy now is ${this.energy}`);
//     }

// }

// let Dandi = new Characters();
// let Riki = new Characters();


// //Object.create

// const methodMahasiswa = {
//     makan: function (makan){
//         this.energi += makan;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function(main){
//         this.energi -= main;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(tidur){
//         this.energi += tidur;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     }
// }



// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Dendi = Mahasiswa('Dendi', 100);


//Prototype
// function Mahasiswa(nama, energi){

//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let Dandi = new Mahasiswa('Dandi', 100);


//versi class
class Mahasiswa{
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
    }

    main (jam){
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }

    tidur (jam){
        this.energi += jam;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let Dandi = new Mahasiswa('Dandi', 100);