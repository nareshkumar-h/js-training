var obj  = { 
    source:"Chennai",
    destination:"Madurai"
};

for(let k of obj){
    console.log(k);
}
//TypeError: obj is not iterable 

for (let key in obj){
    let value = obj[key];
    console.log(key +"-" + value);
}