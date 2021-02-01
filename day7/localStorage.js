
// How to add Items to LocalStorage 
// setItem(key,value)
localStorage.setItem("LOGGED_IN_USER", "naresh");

// How to get Items from localStorage
// let value = getItem(key);
let loggedInUser = localStorage.getItem("LOGGED_IN_USER"); // naresh

// How to remove a specific item(key)
// removeItem(key);
localStorage.removeItem("LOGGED_IN_USER")

// How to clear all data from LocalStorage
localStorage.clear();

// Storing primitive data in LocalStorage
localStorage.setItem("CART_ITEMS",[1,2,3]);

localStorage.getItem("CART_ITEMS"); //"1,2,3"

// Storing array of objects in LocalStorage
localStorage.setItem("CART_ITEMS",[{name:"Naresh"}] ); // stores like [object Object]

// Convert Object to String before storing in localStorage
localStorage.setItem("CART_ITEMS",JSON.stringify([{name:"Naresh"}]) );

var itemsStr = localStorage.getItem("CART_ITEMS");

// Convert JSON String to Object using JSON.parse
var items =  JSON.parse(itemsStr);