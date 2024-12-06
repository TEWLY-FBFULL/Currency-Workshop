// Dropdown select
const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
// Input num
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");
// Rate
const rateText = document.getElementById("rate");
// Swap button
const swap = document.getElementById("btn");
// Flag of Country
const flag_one = document.getElementById("flag-one");
const flag_two = document.getElementById("flag-two");
// Country name
const countryname_one = document.getElementById("country-name-one");
const countryname_two = document.getElementById("country-name-two");
// Even
currency_one.addEventListener('change',calcu);
currency_two.addEventListener('change',calcu);
amount_one.addEventListener('input',calcu);
amount_two.addEventListener('input',calcu);
swap.addEventListener('click',swapcurrency);
// Object of Country
const currencyToCountry = {
    AED: ["ae", "United Arab Emirates"],
    ARS: ["ar", "Argentina"], 
    AUD: ["au", "Australia"], 
    BGN: ["bg", "Bulgaria"], 
    BRL: ["br", "Brazil"], 
    BSD: ["bs", "Bahamas"], 
    CAD: ["ca", "Canada"], 
    CHF: ["ch", "Switzerland"], 
    CLP: ["cl", "Chile"], 
    CNY: ["cn", "China"], 
    COP: ["co", "Colombia"],
    CZK: ["cz", "Czech Republic"],
    DKK: ["dk", "Denmark"],
    DOP: ["do", "Dominican Republic"],
    EGP: ["eg", "Egypt"],
    EUR: ["eu", "European Union"],
    FJD: ["fj", "Fiji"], 
    GBP: ["gb", "United Kingdom"],
    GTQ: ["gt", "Guatemala"], 
    HKD: ["hk", "Hong Kong"],
    HRK: ["hr", "Croatia"], 
    HUF: ["hu", "Hungary"], 
    IDR: ["id", "Indonesia"],
    ILS: ["il", "Israel"],
    INR: ["in", "India"],
    ISK: ["is", "Iceland"],
    JPY: ["jp", "Japan"],
    KRW: ["kr", "South Korea"],
    KZT: ["kz", "Kazakhstan"],
    MXN: ["mx", "Mexico"],
    MYR: ["my", "Malaysia"],
    NOK: ["no", "Norway"],
    NZD: ["nz", "New Zealand"],
    PAB: ["pa", "Panama"],
    PEN: ["pe", "Peru"],
    PHP: ["ph", "Philippines"],
    PKR: ["pk", "Pakistan"], 
    PLN: ["pl", "Poland"], 
    PYG: ["py", "Paraguay"], 
    RON: ["ro", "Romania"], 
    RUB: ["ru", "Russia"], 
    SAR: ["sa", "Saudi Arabia"],
    SEK: ["se", "Sweden"], 
    SGD: ["sg", "Singapore"],
    THB: ["th", "Thailand"],
    TRY: ["tr", "Turkey"], 
    TWD: ["tw", "Taiwan"],
    UAH: ["ua", "Ukraine"],
    USD: ["us", "United States"],
    UYU: ["uy", "Uruguay"], 
    VND: ["vn", "Vietnam"], 
    ZAR: ["za", "South Africa"] 
};

function calcu(){
    const one = currency_one.value;
    const two = currency_two.value;
    // Flag of Country
    flag_one.className = '';
    flag_two.className = '';
    flag_one.classList.add('fi', `fi-${currencyToCountry[one][0]}`);
    flag_two.classList.add('fi', `fi-${currencyToCountry[two][0]}`);
    // Country name
    countryname_one.innerText = `${currencyToCountry[one][1]}`;
    countryname_two.innerText = `${currencyToCountry[two][1]}`;
    // Get API
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res => (res.json()))
    .then(data => {
        const rate = data.rates[two];
        rateText.innerText = `1 ${one} = ${rate} ${two}`;
        amount_two.value = (amount_one.value*rate).toFixed(2);
    })
}

function swapcurrency(){
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calcu();
}

calcu();


