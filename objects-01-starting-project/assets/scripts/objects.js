/* APP */
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    /* if ((info.movie === undefined)) {
    } */
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    /* const { title: movieTitle } = info; */
    let { getFormattedTitle } = movie;
    /* getFormattedTitle = getFormattedTitle.bind(movie); */
    let text = getFormattedTitle.call(movie) + " - ";
    /*   let text = getFormattedTitle() + " - "; */
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    /*     title.trim() === "" || */
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }
  const newMovie = {
    info: {
      /*       title, */
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

/*  INTRODUCTION*/

const movieList = document.getElementById("movie-list");
/* movieList.style["backgroundColor"] = "red";
movieList.style.display = "block"; */

const userChosenKeyName = "level";

const person = {
  "first name": "Maria", //first-name is a key
  age: 22,
  hobbies: ["Sports", "Cooking"],
  [userChosenKeyName]: "4",
  greet: function () {
    /*   alert("Hi there"); */
  },
  1.5: "hello",
};

//person.age = 23
delete person.age;
//person.age = undefined; undefined is don't have this property null is not value in this property but has property
//person.age = null
person.isAdmin = true;

const keyName = "first name";

/* console.log(person["first name"]);
console.log(person[keyName]);
console.log(person[1.5]); */
/* console.log(person); */ //order keeped in when we add things if we have numbers it will be sorted if not the time it is inserted
