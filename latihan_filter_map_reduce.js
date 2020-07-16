//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jslanjut = videos.filter(video => video.innerHTML.includes('JAVASCRIPT LANJUTAN'))

//ambil durasi masing-masing video
.map(item => item.dataset.duration)

//ubah durasi menjadi int, ubah menjadi detik
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60 + parts[1]);
})

//jumlahkan semua detik
.reduce((accumulator, currentvalue) => accumulator + currentvalue);

//ubah format jadi jam menit detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - 3600 * jam; 
const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - 60 * menit;

//simpan di DOM
const jmlvideo = videos.filter(video => video.innerHTML.includes('JAVASCRIPT LANJUTAN')).length;
const totalDurasi = `${jam} jam, ${menit} menit, ${detik} detik`;

document.querySelector('.jumlah-video').innerHTML = jmlvideo;
document.querySelector('.total-durasi').innerHTML = totalDurasi;

