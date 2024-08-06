const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + config.TMDB_API_Read_Access_Token,
    },
  };
  
  const getPopularMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        options
      );
      const data = await res.json();
      setPopularMovies(data.results);
    } catch (err) {
      console.log("Something went wrong: " + err);
    }
  };
  
  const setPopularMovies = (movies) => {
    const movieCarousel = document.querySelector(".movies-carousel");
    const pagination = document.querySelector(".pagination");
    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie");
  
      const bgImg = document.createElement("img");
      bgImg.classList.add("bg-img");
      bgImg.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      );
  
      const heroImage = document.createElement("div");
      heroImage.classList.add("movie-image");
      heroImage.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
  
      const movieInfo = document.createElement("div");
      movieInfo.classList.add("movie-info");
  
      movieItem.appendChild(bgImg);
      movieItem.appendChild(heroImage);
      movieItem.appendChild(movieInfo);
  
      const movieTitle = document.createElement("h3");
      movieTitle.classList.add("movie-title");
      movieTitle.textContent = movie.original_title;
  
      const rating = document.createElement("span");
      rating.classList.add("rating");
      rating.textContent = `Rating: ${movie.vote_average.toFixed(1)}`;
  
      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = movie.overview;
  
      movieInfo.appendChild(movieTitle);
      movieInfo.appendChild(rating);
      movieInfo.appendChild(description);
  
      movieCarousel.appendChild(movieItem);
  
      const dot = document.createElement("span");
      dot.classList.add("dot");
  
      dot.addEventListener("click", () => {
        document.querySelector(".dot.active").classList.remove("active");
        document.querySelector(".movie.active").classList.remove("active");
        dot.classList.add("active");
        movieItem.classList.add("active");
  
        //Animation fade-in and fade-out
  
        document
          .querySelector(".movie-image.fade-in-left")
          .classList.add("fade-in-left");
        document
          .querySelector(".movie-info.fade-in-right")
          .classList.remove("fade-in-right");
  
        movieItem.childNodes[1].classList.add("fade-in-left");
        movieItem.lastChild.classList.add("fade-in-right");
      });
      pagination.appendChild(dot);
    });
  
    const firstMovie = movieCarousel.firstChild;
    firstMovie.classList.add("active");
  
    firstMovie.lastChild.classList.add("fade-in-right");
  
    firstMovie.childNodes[1].classList.add("fade-in-left");
  
    pagination.firstChild.classList.add("active");
  };
  
  getPopularMovies();
  
  const page = 2;
  
  const getTrendingMovies = async () => {
    const tiles = document.querySelector(".tiles");
  
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        options
      );
      const data = await res.json();
      setMovies(data.results, tiles);
    } catch (error) {
      console.log("Something went wrong: " + error);
    }
  };
  
  getTrendingMovies();
  
  const searchInput = document.querySelector(".search-input");
  
  const searchForm = document.querySelector("#form");
  
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getSearchResults();
    window.scrollTo(0, document.body.scrollHeight);
    searchInput.value = "";
  });
  
  const getSearchResults = async () => {
    const searchTiles = document.querySelector(".search-tiles");
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchInput.value}&include_adult=true&language=en-US&page=1`,
        options
      );
      const data = await res.json();
      searchTiles.textContent = "";
      setMovies(data.results, searchTiles);
    } catch (error) {
      console.log("Something went wrong: " + error);
    }
  };
  
  const setMovies = (movies, targetEl) => {
    movies.forEach((movie) => {
      const movieTile = document.createElement("div");
      movieTile.classList.add("movie-tile");
  
      movieTile.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
  
      const tileContent = document.createElement("div");
      tileContent.classList.add("content");
  
      movieTile.appendChild(tileContent);
  
      const contentTitle = document.createElement("span");
      contentTitle.classList.add("tile-title");
      contentTitle.textContent = movie.original_title;
  
      const releaseYear = document.createElement("span");
      releaseYear.classList.add("release-year");
      releaseYear.textContent = movie.release_date.slice(0, 4);
  
      tileContent.appendChild(contentTitle);
      tileContent.appendChild(releaseYear);
  
      //More info box appear on click
      movieTile.addEventListener("click", () => {
        showMoreInfo(movie);
        console.log(movie);
      });
  
      targetEl.appendChild(movieTile);
    });
  };
  
  const viewMore = document.querySelector(".view-more");
  const viewTitle = document.querySelector(".view-more-title");
  const viewDesc = document.querySelector(".view-more-desc");
  const viewPop = document.querySelector(".view-more-pop");
  const viewRating = document.querySelector(".view-more-rating");
  const viewDate = document.querySelector(".view-more-release");
  
  const cross = document.querySelector(".cross");
  
  cross.addEventListener("click", () => [viewMore.classList.remove("active")]);
  
  const showMoreInfo = (movie) => {
    viewMore.classList.add("active");
  
    viewTitle.textContent = movie.title;
    viewDesc.textContent = movie.overview;
    viewPop.textContent = "Popularity: " + movie.popularity.toFixed(1);
    viewRating.textContent = "Rating: " + movie.vote_average.toFixed(1);
    viewDate.textContent = "Release Date: " + movie.release_date;
  };