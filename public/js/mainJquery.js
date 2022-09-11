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
  $("#city").append(`<option value='default'>Select a city</option>`);
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
$("#countryModifier").on("click", function () {
  //Appending a new item to the Continent list from the user's input
  let userInput = prompt(
    "Please enter the name of the Country you wish to add.\n" +
      "\bPlease note: Only continents with valid alphabetic characters will be accepted\b"
  );
  addCountry(userInput);
});
$("#cityModifier").on("click", function () {
  //Appending a new item to the Continent list from the user's input
  let userInput = prompt(
    "Please enter the name of the City you wish to add.\n" +
      "\bPlease note: Only continents with valid alphabetic characters will be accepted\b"
  );
  addCity(userInput);
});

//Functions for modifying DDL contents

function addContinent(input) {
  //Performing Error handling on the input data
  try {
    if (elementExists("continent", input, continentList) === true) {
      throw "This Continent already exists";
    } else {
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
    }
  } catch (er) {
    console.log(er);
    alert(er);
  }
}

function addCountry(input) {
  try {
    if ($("#continent option:selected").text() == "Select a continent") {
      $("#continent").focus();
      throw "Please select a continent before adding a new Country";
    } else if (elementExists("country", input, countryList) === true) {
      throw "This Country already exists";
    } else {
      if (input !== null && containsNumber(input) === false) {
        let result = {
          continent: $("#continent option:selected").text(),
          country: input,
        };
        countryList.push(result);
        console.log(
          `New item appended to DDL: Continent:\nData:\nNew item: ${result.country}`
        );
        $("#country").append(
          `<option value=${result.country}>${result.country}</option>`
        );
      } else {
        throw "Invalid String Formatting";
      }
    }
  } catch (er) {
    console.log(er);
    alert(er);
  }
}

function addCity(input) {
  try {
    if ($("#country option:selected").text() == "Select a country") {
      $("#country").focus();
      throw "Please select a country before adding a new Country";
    } else if (elementExists("city", input, cityList) === true) {
      throw "This City already exists";
    } else {
      if (input !== null && containsNumber(input) === false) {
        let result = {
          continent: $("#continent option:selected").text(),
          country: $("#country option:selected").text(),
          city: input,
        };
        cityList.push(result);
        console.log(
          `New item appended to DDL: Continent:\nData:\nNew item: ${result.city}`
        );
        $("#city").append(
          `<option value=${result.city}>${result.city}</option>`
        );
      } else {
        throw "Invalid String Formatting";
      }
    }
  } catch (er) {
    console.log(er);
    alert(er);
  }
}

const containsNumber = (string) => {
  //Creating this method to validate the user input.
  let bFlag = false;
  let strArr = string.split("");
  for (let element of strArr) {
    if (element / 1 == element) {
      bFlag = true;
    }
  }
  return bFlag;
};

const elementExists = (regionType, string, array) => {
  //Creating this method to avoid duplicate data.
  let bFlag = false;
  for (let element of array) {
    if (element[regionType] == string) {
      bFlag = true;
    }
  }
  return bFlag;
};

//Styling
$("nav").css({
  "max-height": "50px",
  padding: "5px",
});
$("nav h1").css({
  "margin-top": "0px",
  "margin-bottom": "0px",
});
$("body").css({
  margin: "0px",
  display: "flex",
  "justify-content": "flex-start",
  "align-items": "center",
  "text-align": "center",
  "min-height": "100vh",
  "flex-direction": "column",
});
$(".selector-container").css({
  display: "flex",
  "flex-direction": "column",
  margin: "0 0 0 0",
  width: "auto",
  "max-width": "400px",
  border: "2px solid rgba(0, 0, 0, 0.644)",
  "border-radius": "10px",
  padding: "5px",
});

$(".selector-container select").css({
  "margin-left": "100px",
  width: "200px",
  "min-width": "50px",
  "background-color": "transparent",
  "border-radius": "5px",
});
$(".selector-item-container").css({
  display: "flex",
  "flex-direction": "column",
  "align-items": "stretch",
  width: "100%",
});
$(".selector-item").css({
  display: "flex",
  "justify-content": "space-between",
});

$(".item-modifier").css({
  display: "block",
});
