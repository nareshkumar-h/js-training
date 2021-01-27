// create accountNo  = 1
var accountObj1 = { accountNo : 1}
console.log(accountObj1);

// Assign Account1 object to Account2 object
var accountObj2 = accountObj1;
console.log(accountObj2);

// Change accountNo for Account2 object
accountObj2.accountNo = 2;

//check
console.log(accountObj1);
console.log(accountObj2);

//Summary
// Objects are mutable: 
// They are addressed by reference, not by value.