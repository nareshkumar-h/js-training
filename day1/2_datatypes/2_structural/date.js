let today = new Date();

today.toJSON();
today.toJSON().substring(0,10);

today.getFullYear();
today.getDate();
today.getMonth();

today.toJSON().substring(0,10);

Date.parse("2020-02-01");

isNaN(Date.parse("2020-35-01"));// true- invalid , false - valid

Date.now();
let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
