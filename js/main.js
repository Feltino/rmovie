"use strict"

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {

  count: numberOfFilms,
  movie: {},
  actors: {},
  genres: [],
  privat: false

};

let firstMovie = prompt('Один из последних просмотренных фильмов?', '');
let firstMoviePoint = +prompt('На сколько оцените его?', '');
let secondMovie = prompt('Один из последних просмотренных фильмов?', '');
let secondMoviePoint = +prompt('На сколько оцените его?', '');

personalMovieDB.movie[firstMovie] = firstMoviePoint;
personalMovieDB.movie[secondMovie] = secondMoviePoint;