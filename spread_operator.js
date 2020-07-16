// //Memcah (expand/unpack) iterables menjadi single element.

// // const mhs = ['Dandi', 'Indra', 'Wijaya'];

// // console.log(...mhs[0]);

// //menggabungkan 2 array

// const mhs = ['Andre', 'Caca', 'Ica'];
// const dosen = ['Aki', 'Made', 'Asep'];

// // const orang = [...mhs, 'Aji', ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);



// //Meng-copy array
// const mhs = ['Dandi', 'Indra', 'Wijaya'];
// const mhs1 = mhs;
// console.log(mhs1);
// const mhs1 = [...mhs];
// console.log(mhs1);

// // mhs = [];
// const liMhs = document.querySelectorAll('li');
// // for(let i = 0 ; i < liMhs.length ; i++){
// //     mhs.push(liMhs[i].innerHTML);
// // }

// const mhs = [...liMhs].map(m => m.innerHTML);
//  console.log(mhs);


// const nama = document.querySelector('.nama');
// const huruf = [...nama.innerHTML].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;
// console.log(nama);