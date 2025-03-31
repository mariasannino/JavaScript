const addMovieModal = document.getElementById("add-modal");
/* const addMovieModal = document.querySelector("#add-modal"); */
/* const addMovieModal = document.body.children[1]; */
const startAddMovieButton = document.querySelector("header button");
/* const startAddMovieButton = document.querySelector("header").lastElementChild;
 */
const backdrop = document.getElementById("backdrop");
/* const backDrop = document.body.firstElementChild; */
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
/* const userInputs = addMovieModal.getElementsByTagName("input"); */
const entryTextSection = document.getElementById("entry-text");
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (title, imgUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imgUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stas</p>
    </div>
    `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};
const toggleBackDrop = () => {
  backdrop.classList.toggle("visible");
};
const toggleMovieModal = () => {
  //function() {}
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const confirmAddMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imgUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imgUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }
  const newMovie = {
    title: titleValue,
    image: imgUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClipHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClipHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", confirmAddMovieHandler);
