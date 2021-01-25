function addItem(productName,qty){
    console.log("Add Item : ProductName", productName , ",quantity=", qty);
}
addItem("iPhone",1);
//Output: Add Item : ProductName iPhone ,quantity= 1

addItem("OnePlus");
//Output: Add Item : ProductName OnePlus ,quantity= undefined


// Default values for parameters
function addItem(productName,qty=1){
    console.log("Add Item : ProductName", productName , ",quantity=", qty);
}
addItem("OnePlus");
//Add Item : ProductName OnePlus ,quantity= 1