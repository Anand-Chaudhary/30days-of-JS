const apiKey = 'eb21b598';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';

document.getElementById('searchButton').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value;
  if (query) {
    fetchMovies(query);
  }
});

async function fetchMovies(query) {
  const url = `${apiUrl}?api_key=${apiKey}&query=${query}`;
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      displayMovies(data.results);
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    });
}

function displayMovies(movies) {
  const movieContainer = document.getElementById('movieContainer');
  movieContainer.innerHTML = '';
  if (movies && movies.length > 0) {
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p>${movie.release_date}</p>
        </div>
      `;
      movieContainer.appendChild(movieElement);
    });
  } else {
    movieContainer.innerHTML = '<p>No movies found.</p>';
  }
}
