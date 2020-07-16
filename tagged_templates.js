// //Tegged Templates
// const nama = `Dandi Indra Wijaya`;
// const umur = 20;

// function coba(strings, ...values){
// //     let result = '';
// //     strings.forEach((str, i) => {
// //         result += `${str}${values[i] || ''}`;
// //     })
// //     return result;
//        return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

//Highlight
//Tegged Templates
const nama = `Dandi Indra Wijaya`;
const umur = 20;
const email = 'dandiindrawijaya@gmail.com';

function highlight(strings, ...values){
//     let result = '';
//     strings.forEach((str, i) => {
//         result += `${str}${values[i] || ''}`;
//     })
//     return result;
       return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}`;
console.log(str);

document.body.innerHTML = str;