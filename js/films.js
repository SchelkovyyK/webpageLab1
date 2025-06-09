// let currentPage = 1;
// let data = [];
// const urlBase =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2M5ODQ1NzU4YWM4NjM2Y2QyZGNlZjViOGNkZTliMiIsIm5iZiI6MTc0OTM5NTUxOS43MDcsInN1YiI6IjY4NDVhODNmZjc5Zjc2OGQwZWZkNWE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3V8trgwxO77KBGls8bSCoQeflaGMsrEvthZ6pDAfZ8",
//   },
// };

// const moviesContainer = document.getElementById("movies");
// const loadMoreBtn = document.getElementById("loadMoreBtn");

// async function fetchMovies(page) {
//   try {
//     const response = await fetch(`${urlBase}&page=${page}`, options);
//     data = await response.json();

//     data.results.forEach((media) => {
//       const movieCard = createMovieCard(media);
//       moviesContainer.appendChild(movieCard);
//     });
//     // console.log(data);
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// }

// function createMovieCard(media) {
//   const { title, name, backdrop_path, overview } = media;

//   const movieCard = document.createElement("div");
//   movieCard.classList.add("movie_item");

//   movieCard.innerHTML = `

//     <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="movie_img_rounded" alt="${
//     title || name
//   }">
//   <h2 class="title">${title || name}</h2>
//   <p>${overview}</p>
//   `;

//   return movieCard;
// }

// fetchMovies(currentPage);

// loadMoreBtn.addEventListener("click", () => {
//   currentPage++;
//   fetchMovies(currentPage);
// });

// // todo Searcher

// const searchInput = document.querySelector("#searcher");

// function OutPut() {
//   data.forEach((m) => {
//     console.log(m);
//   });
// }
// OutPut();
// searchInput.addEventListener("input", (e) => {
//   const value = e.target.value.toLowerCase();
//   data.forEach((films) => {
//     const isVisible =
//       films.name.toLowerCase().includes(value) ||
//       films.email.toLowerCase().includes(value);
//     films.element.classList.toggle("hide", !isVisible);
//   });
// });

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

      // Save each movie with its HTML element
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
    <h2 class="title">${title || name}</h2>
    <p>${overview}</p>
  `;

  return movieCard;
}

// Load first page
fetchMovies(currentPage);

// Load more
loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  fetchMovies(currentPage);
});
console.log(allMovies)
// Search functionality
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  allMovies.forEach((movie) => {
    const title = (movie.title || movie.name || "").toLowerCase();
    const overview = (movie.overview || "").toLowerCase();
    const isVisible = title.includes(value) || overview.includes(value);

    movie.element.classList.toggle("hide", !isVisible);
  });
});
