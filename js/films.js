// | films list
let currentPage = 1;
let allMovies = [];

const urlBase =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2M5ODQ1NzU4YWM4NjM2Y2QyZGNlZjViOGNkZTliMiIsIm5iZiI6MTc0OTM5NTUxOS43MDcsInN1YiI6IjY4NDVhODNmZjc5Zjc2OGQwZWZkNWE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3V8trgwxO77KBGls8bSCoQeflaGMsrEvthZ6pDAfZ8",
  },
};

const moviesContainer = document.getElementById("movies");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const searchInput = document.querySelector("#searcher");

async function fetchMovies(page) {
  try {
    const response = await fetch(`${urlBase}&page=${page}`, options);
    const data = await response.json();

    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      moviesContainer.appendChild(movieCard);

      allMovies.push({
        ...movie,
        element: movieCard,
      });
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function createMovieCard(media) {
  const { title, name, backdrop_path, overview } = media;

  const movieCard = document.createElement("div");
  movieCard.classList.add("movie_item");

  movieCard.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="movie_img_rounded" alt="${
    title || name
  }">
  <div class="title">
    <h2>${title || name}</h2>
    <p>${overview}</p>
  </div>
  `;

  return movieCard;
}
fetchMovies(currentPage);

loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  fetchMovies(currentPage);
});
console.log(allMovies);

// | Searcher
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  allMovies.forEach((movie) => {
    const title = (movie.title || movie.name || "").toLowerCase();
    const overview = (movie.overview || "").toLowerCase();
    const isVisible = title.includes(value) || overview.includes(value);

    movie.element.classList.toggle("hide", !isVisible);
  });
});

import { Burger } from "./burger.js";

Burger();
