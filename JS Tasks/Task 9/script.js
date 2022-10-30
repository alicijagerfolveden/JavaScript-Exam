/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100_000_000;
  }
}

const newMovie = new Movie(
  "The Lord of the Rings",
  "Peter Jackson",
  281_000_000
);

const otherMovie = new Movie("Annabelle", "John R. Leonetti", 6_500_000);

console.log(newMovie);
console.log(newMovie.wasExpensive());
console.log(otherMovie);
console.log(otherMovie.wasExpensive());
