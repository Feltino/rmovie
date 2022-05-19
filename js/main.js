"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

let personalMovieDB = {

  count: numberOfFilms,
  movie: {},
  actors: {},
  genres: [],
  privat: false

};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let setMovie = prompt('Один из последних просмотренных фильмов?', '');
    // while (setMovie === null || setMovie.length === 0 || setMovie.length >= 50) {
    //   setMovie = prompt('Один из последних просмотренных фильмов?', '');
    // }

    let setRewies = +prompt("Ha сколько оцените eгo?", '');

    if (setMovie != null && setRewies != null && setMovie != '' && setMovie != '' && setMovie.length < 50) {
      personalMovieDB.movie[setMovie] = setRewies;
    } else {
      i--;
    }
    // personalMovieDB.movie[setMovie] = setRewies;
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель')
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let setGenres = prompt(`Ваш любимый под номером ${i}`, '');

    if (setGenres != null && setGenres != '' && setGenres != '' && setGenres.length < 50) {
      personalMovieDB.genres[i - 1] = setGenres;
    } else {
      i--;
    }
  }
}

writeYourGenres();

// let secondMovie = prompt('Один из последних просмотренных фильмов?', '');
// let secondMoviePoint = +prompt('На сколько оцените его?', '');


// personalMovieDB.movie[secondMovie] = secondMoviePoint;