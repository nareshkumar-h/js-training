// Primitive DataTypes ( Six )

// 1. String
var name="Naresh"; 

// 2. Number
var age = 36; 
var percentage = 20.6; 
//Number.MAX_SAFE_INTEGER ( 2^53 -1 )

// 3. BigInt
var accountNo1 = 12345678901234567890; //invalid
var accountNo2 = 12345678901234567890n; //valid  

// 4. Boolean
var result = true; // true/false

//5. undefined
var x;

//6. null
var y = null;

//7. Symbol



//Constructor - String,Number,Boolean
var str1 = String("this is a simple string"); // primitive string
var num1 = Number(1.45); // primitive number
var bool1 = Boolean(true); // primitive boolean

//To deliberately instantiate an object, use the new operator:
var str2 = new String("this is a simple string"); // String object instance
var num2 = new Number(1.45); // Number object instance
var bool2 = new Boolean(true); // primitive boolean


/*You can quickly tell the difference between a primitive and an object instance when you
compare an object instance to a literal value using strict equality. For example, running
the following code in a browser:*/
var str1 = String("string");
var num1 = Number(1.45);
var bool1 = Boolean(true);
if (str1 === "string") {
 console.log('equal');
}

//Because primitives are compared by value, and values are literals.


var str2 = new String("string");
var num2 = new Number(1.45);
var bool2 = new Boolean(true);
if (str2 === "string") {
 console.log('equal');
} else {
 console.log('not equal');
}


var num1 = 1.45;
var num2 = new Number(1.45);
console.log(typeof num1); // prints out number
console.log(typeof num2); // prints out object

