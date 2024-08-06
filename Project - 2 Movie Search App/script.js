const API_KEY = '20de1844';

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;


    fetch(API_URL)
        .then(response => {
            console.log('Response Status:', response.status);  
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data);  
            if (data.Response === 'True') {
                displayMovies(data.Search);
            } else {
                console.error('Error fetching data:', data.Error);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    if (movies) {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
                <button onclick="fetchMovieDetails('${movie.imdbID}')">More Info</button>
            `;
            movieContainer.appendChild(movieElement);
        });
    } else {
        movieContainer.innerHTML = '<p>No movies found.</p>';
    }
}

function fetchMovieDetails(imdbID) {
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovieDetails(data);
            } else {
                console.error('Error fetching data:', data.Error);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovieDetails(movie) {
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = `
        <h2>${movie.Title}</h2>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <button onclick="closeMovieDetails()">Close</button>
    `;
    movieDetails.style.display = 'block';
    setTimeout(() => {
        movieDetails.classList.add('show');
    }, 10);  
}

function closeMovieDetails() {
    const movieDetails = document.getElementById('movie-details');
    movieDetails.classList.remove('show');
    setTimeout(() => {
        movieDetails.style.display = 'none';
    }, 300);  
}
