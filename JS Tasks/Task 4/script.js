/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const getCars = async () => {
  const response = await fetch(ENDPOINT);

  const cars = await response.json();

  console.log(cars);

  displayCars(cars);
};

getCars();

const displayCars = (cars) => {
  const outputElement = document.querySelector("#output");

  cars.forEach((car) => {
    const carBrandContainer = document.createElement("div");
    const carBrandName = document.createElement("p");
    const carBrandModels = document.createElement("p");
    const carBrand = car.brand;
    const carModels = car.models;

    carBrandContainer.id = "car-brand-container";
    carBrandName.id = "car-brand-name";
    carBrandModels.id = "brand-models";

    carBrandName.textContent = carBrand;
    carBrandModels.textContent = carModels;

    carBrandContainer.append(carBrandName, carBrandModels);

    outputElement.append(carBrandContainer);
  });
};
