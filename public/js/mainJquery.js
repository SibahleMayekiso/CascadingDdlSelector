//Data Source lists
let continentList = [
    {continent: 'Africa'}, 
    {continent: 'Asia'},
    {continent: 'Europe'},
    {continent: 'North America'},
    {continent: 'Oceania'},
    {continent: 'South America'},
];

let countryList = [
    {continent: 'Africa', country: 'South Africa'}, 
    {continent: 'Africa', country: 'Lesotho'}, 
    {continent: 'Africa', country: 'eSwatini'} 
];

let cityList = [
    {continent: 'Africa', country: 'South Africa', city: 'Pretoria'},  
    {continent: 'Africa', country: 'South Africa', city: 'Johannesburg'}, 
    {continent: 'Africa', country: 'South Africa', city: 'Cape Town'},
    {continent: 'Africa', country: 'Lesotho', city: 'Maseru'},
    {continent: 'Africa', country: 'Lesotho', city: 'Butha-Buthe'},  
    {continent: 'Africa', country: 'Lesotho', city: 'Thaba-Tseka'}  
];

//DDL functionality
//Continent selection
for (let value of continentList) {
    $('#continent').append(`<option value=${value.continent}>${value.continent}</option>`)
}
//Country selection
$('#continent').on('change', () => {
    $('#country').empty();
    $('#country').append(`<option value='default'>Select a country</option>`);
    let selectedContinent = $('#continent option:selected').text();

    for (const value of countryList) {
        if (value.continent === selectedContinent) {
            $('#country').append(`<option value=${value.country}>${value.country}</option>`);
        }
    }
})
//City Selector
$('#country').on("change", () =>{
    $('#city').empty();
    $('#city').append(`<option value='default'>Select a city</option>`);
    let selectedCountry = $("#country option:selected").text();
    
    for (let value of cityList){
        if (value.country === selectedCountry){
            $('#city').append(`<option value=${value.city}>${value.city}</option>`);
        }
    }
})