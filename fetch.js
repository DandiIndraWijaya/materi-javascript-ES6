//fetch
//sebuah api pada javascript modern yang tugasnya untuk mengambil data secara asynchronous

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function(){

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=8874880e&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m));
//             console.log(cards);
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;


//             //ketika tombol detail di-klik
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function(){
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=8874880e&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const showMovieDetail = showModal(m);
//                             const modalBody = document.querySelector('.modal-body')
//                             modalBody.innerHTML = showMovieDetail;
//                         })
//                 });
//             });
//         });

// });


const searchButton = document.querySelector('.search-button');
window.addEventListener('load', async function(){
    const inputKeyword = document.querySelector('.input-keyword');
    const input = 'airborne';
    const movies = await getMovies(input);
    updateUI(movies);
});



//event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});


function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=8874880e&i=' + imdbid)
        .then(response => response.json())
        .then(m => m)                 
}

function updateUIDetail(m){
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=8874880e&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}




function showCards(m){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img class="card-img-top" src="${m.Poster}">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">2016</h6>
                    <a href="#"  data-toggle="modal" data-target="#movieDetailModal"class="btn btn-primary modal-detail-button" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}


function showMovieDetail(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}</h4></li>
                            <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`                                      
}