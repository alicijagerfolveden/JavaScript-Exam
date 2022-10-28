/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const buttonElement = document.querySelector("#btnElement");

let counter = 0;

const addPlusOne = (event) => {
  counter++;

  document.querySelector("#btnState").innerHTML = counter;
};

buttonElement.addEventListener("click", addPlusOne);
