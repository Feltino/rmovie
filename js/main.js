"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {

  count: numberOfFilms,
  movie: {},
  actors: {},
  genres: [],
  privat: false

};

for (let i = 0; i < 2; i++) {
  let setMovie = prompt('Один из последних просмотренных фильмов?', '');
  // while (setMovie === null || setMovie.length === 0 || setMovie.length >= 50) {
  //   setMovie = prompt('Один из последних просмотренных фильмов?', '');
  // }

  let setRewies = +prompt('На сколько оцените его?', '');

  if (setMovie != null && setRewies != null && setMovie != '' && setMovie != '' && setMovie.length < 50) {
    personalMovieDB.movie[setMovie] = setRewies;
  } else {
    i--;
  }
  // personalMovieDB.movie[setMovie] = setRewies;
}

if (personalMovieDB.count < 10) {
  alert('Просмотренно довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы классический зритель')
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
}

console.log(personalMovieDB);

// let secondMovie = prompt('Один из последних просмотренных фильмов?', '');
// let secondMoviePoint = +prompt('На сколько оцените его?', '');


// personalMovieDB.movie[secondMovie] = secondMoviePoint;