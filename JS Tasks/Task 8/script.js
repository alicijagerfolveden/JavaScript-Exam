/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.sum = a + b;
  this.sub = a - b;
  this.multi = a * b;
  this.div = a / b;
}

const countNumbers = new Calculator(10, 2);
const countOtherNumbers = new Calculator(80, 5);

console.log(countNumbers, countOtherNumbers);
