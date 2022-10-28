/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const userKiloForm = document.body.querySelector("form");

userKiloForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userInputValue = document.querySelector("#search").value;

  const convertWeightFromKg = (kgValue) => {
    const convertToLb = `${(kgValue * 2.2046).toFixed(2)} lb`;
    const convertToG = `${(kgValue / 0.001).toFixed(2)} g`;
    const convertToOz = `${(kgValue * 35.274).toFixed(2)} oz`;

    const convertedWeightValues = [convertToLb, convertToG, convertToOz];

    return convertedWeightValues;
  };

  const convertedValues = convertWeightFromKg(userInputValue);

  renderWeightValues(convertedValues);
});

const renderWeightValues = (convertedValues) => {
  const weigthOutput = document.querySelector("#output");

  weigthOutput.textContent = "";

  convertedValues.forEach((value) => {
    const valueOutput = document.createElement("p");

    valueOutput.textContent = value;

    weigthOutput.append(valueOutput);
  });
};
