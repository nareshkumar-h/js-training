const products = [
    {id:1,name:"Samsung Galaxy F41", brandName:"Samusung", ram:"3", rating:3, price:10000},
    {id:2,name:"IPhone", brandName:"Apple", ram:"4.5", rating:3, price:50000},
    {id:3,name:"Realme 7i", brandName:"RealMe", ram:"4.5", rating:3,price:12000}
];

async function search(filters){
    let results = products;
    //todo:logic
    return results;
}

let filters= { brandName:["Samsung"], ram:["3"]};

// search(filters).then(function(response){

// });
search(filters).then((response)=>{
    console.table(response);
});
