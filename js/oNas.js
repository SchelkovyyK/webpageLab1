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
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function createMovieCard(media) {
  const { title, name, backdrop_path } = media;

  const movieCard = document.createElement("div");
  movieCard.classList.add("movie_item");

  movieCard.innerHTML = `
    <h2 class="title">${title || name}</h2>

    <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="movie_img_rounded" alt="${
    title || name
  }">
  `;

  return movieCard;
}

// Load first page on start
fetchMovies(currentPage);

// Load next page on button click
loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  fetchMovies(currentPage);
});

// let currentPage = 1;
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2M5ODQ1NzU4YWM4NjM2Y2QyZGNlZjViOGNkZTliMiIsIm5iZiI6MTc0OTM5NTUxOS43MDcsInN1YiI6IjY4NDVhODNmZjc5Zjc2OGQwZWZkNWE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3V8trgwxO77KBGls8bSCoQeflaGMsrEvthZ6pDAfZ8'
//   }
// };

// const moviesContainer = document.getElementById("movies");

// async function fetchMovies() {
//   try {
//     const response = await fetch(`${urlBase}&page=${page}`, options);
//     const data = await response.json();

//     data.results.forEach((media) => {
//       const movieCard = createMovieCard(media);
//       moviesContainer.appendChild(movieCard);

//     });
// 	console.log(data)
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// }

// function createMovieCard(media) {
//   const { title, name, backdrop_path } = media;

//   const movieCard = document.createElement("div");
//   movieCard.classList.add("movie_item");

//   movieCard.innerHTML = `
//     <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="movie_img_rounded" alt="${title || name}">
//     <div class="title">${title || name}</div>
//   `;

//   return movieCard;
// }

// fetchMovies();
// todo ^^^^^^^

// const url = 'https://moviesdatabase.p.rapidapi.com/titles/%7Bid%7D/main_actors';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2M5ODQ1NzU4YWM4NjM2Y2QyZGNlZjViOGNkZTliMiIsIm5iZiI6MTc0OTM5NTUxOS43MDcsInN1YiI6IjY4NDVhODNmZjc5Zjc2OGQwZWZkNWE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3V8trgwxO77KBGls8bSCoQeflaGMsrEvthZ6pDAfZ8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

// const url =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2M5ODQ1NzU4YWM4NjM2Y2QyZGNlZjViOGNkZTliMiIsIm5iZiI6MTc0OTM5NTUxOS43MDcsInN1YiI6IjY4NDVhODNmZjc5Zjc2OGQwZWZkNWE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3V8trgwxO77KBGls8bSCoQeflaGMsrEvthZ6pDAfZ8", // Replace with your actual token
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((data) => {
//     const container = document.getElementById("movies-container");
//     data.results.forEach((movie) => {
//       const { title, poster_path, vote_average } = movie;

//       container.innerHTML += `
//         <div style="border:1px solid #ccc; padding:10px; margin:10px; width:200px;">
//           <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="${title}" style="width:100%;">
//           <h2>${title}</h2>
//           <p>Rating: ${vote_average}</p>
//         </div>
//       `;
//     });
//   })
//   .catch((err) => console.error(err));
