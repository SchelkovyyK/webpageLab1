let currentPage = 1;

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

async function fetchMovies(page) {
  try {
    const response = await fetch(`${urlBase}&page=${page}`, options);
    const data = await response.json();

    data.results.forEach((media) => {
      const movieCard = createMovieCard(media);
      moviesContainer.appendChild(movieCard);
    });
    console.log(data);
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
  <h2 class="title">${title || name}</h2>
  <p>${overview}</p>
  `;

  return movieCard;
}

fetchMovies(currentPage);

loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  fetchMovies(currentPage);
});