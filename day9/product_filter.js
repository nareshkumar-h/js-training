const products = [
    {id:1,name:"Samsung Galaxy F41", brandName:"Samsung", ram:3, rating:3, price:10000},
    {id:2,name:"IPhone", brandName:"Apple", ram:4.5, rating:3, price:50000},
    {id:3,name:"Realme 7i", brandName:"RealMe", ram:4.5, rating:3,price:12000}
];

products.filter(p=> !filters.hasOwnProperty('brandName') || filters.brandName.includes(p.brandName));

const brandNameFilter1 = function(p) {    
    return !filters.hasOwnProperty('brandName') || filters.brandName.length ==0 || filters.brandName.includes(p.brandName);
}

const brandNameFilter = (p)=> !filters.hasOwnProperty('brandName') || filters.brandName.length ==0 || filters.brandName.includes(p.brandName);

products.filter(brandNameFilter);

const ramFilter = (p)=> !filters.hasOwnProperty('ram') || filters.ram.length ==0 || filters.ram.includes(p.ram);

products.filter(ramFilter);

products.filter(brandNameFilter).filter(ramFilter);
