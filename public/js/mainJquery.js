//Data Source lists
let continentList = [
  { continent: "Africa" },
  { continent: "Asia" },
  { continent: "Europe" },
  { continent: "North America" },
  { continent: "Oceania" },
  { continent: "South America" },
];

let countryList = [
  { continent: "Africa", country: "South Africa" },
  { continent: "Africa", country: "Lesotho" },
  { continent: "Africa", country: "eSwatini" },
];

let cityList = [
  { continent: "Africa", country: "South Africa", city: "Pretoria" },
  { continent: "Africa", country: "South Africa", city: "Johannesburg" },
  { continent: "Africa", country: "South Africa", city: "Cape Town" },
  { continent: "Africa", country: "Lesotho", city: "Maseru" },
  { continent: "Africa", country: "Lesotho", city: "Butha-Buthe" },
  { continent: "Africa", country: "Lesotho", city: "Thaba-Tseka" },
];

//DDL functionality
//Continent selection
for (let value of continentList) {
  $("#continent").append(
    `<option value=${value.continent}>${value.continent}</option>`
  );
}
//Country selection
$("#continent").on("change", function () {
  $("#country").empty();
  $("#city").empty();
  $("#country").append(`<option value='default'>Select a country</option>`);
  $("#city").append(`<option value='default'>Select a country</option>`);
  let selectedContinent = $("#continent option:selected").text();

  for (const value of countryList) {
    if (value.continent === selectedContinent) {
      $("#country").append(
        `<option value=${value.country}>${value.country}</option>`
      );
    }
  }
});
//City Selector
$("#country").on("change", function () {
  $("#city").empty();
  $("#city").append(`<option value='default'>Select a city</option>`);
  let selectedCountry = $("#country option:selected").text();

  for (let value of cityList) {
    if (value.country === selectedCountry) {
      $("#city").append(`<option value=${value.city}>${value.city}</option>`);
    }
  }
});

//New item functionality

$("#continentModifier").on("click", function () {
  //Appending a new item to the Continent list from the user's input
  let userInput = prompt(
    "Please enter the name of the Continent you wish to add.\n" +
      "\bPlease note: Only continents with valid alphabetic characters will be accepted\b"
  );
  addContinent(userInput);
});

//Functions for modifying DDL contents

function addContinent(input) {
  //Performing Error handling on the input data
  try {
    if (input !== null && containsNumber(input) === false) {
      let result = { continent: input };
      continentList.push(result);
      console.log(
        `New item appended to DDL: Continent:\nData:\nNew item: ${result.continent}`
      );
      $("#continent").append(
        `<option value=${result.continent}>${result.continent}</option>`
      );
    } else {
      throw "Invalid String Formatting";
    }
  } catch (er) {
    console.log(er);
    alert(er);
  }
}

function addCountry(input) {}

function addCity(input) {}

const containsNumber = (string) => {
  //Creating this method for extra user input validation
  let bFlag = false;
  let strArr = string.split("");
  for (let element of strArr) {
    if (element / 1 == element) {
      bFlag = true;
    }
  }
  return bFlag;
};
