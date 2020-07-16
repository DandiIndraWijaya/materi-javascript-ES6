const nama = 'Wijaya';
const umur = 45;

const el = `<div class="mhs">
    <h2>${nama}</h2>
    <span class="umur">${umur}</span>
</div>`

// let mahasiswa ={
//     nama: "Dandi",
//     umur: 21,
//     nim: '4611418013',
//     email: 'dandiindra@gmail.com'
// }

// const el = `<div class="mhs">
//     <h2>${mahasiswa.nama}</h2>
//     <span class="nim">${mahasiswa.nim}</span>
// </div>`;

//2. Looping
const mhs = [
    {
        nama: "Dandi",
        email: "dandiindra29@gmail.com"
    },
    {
        nama: "Indra",
        email: "indra29@gmail.com"
    },
    {
        nama: "Wijaya",
        email: "wijaya@gmail.com"
    }
]


const el = `<div class="mhs">
    ${mhs.map(m => `<ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
    </ul>`).join('')}
</div>`
document.body.innerHTML = el