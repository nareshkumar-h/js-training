
//1.3: Array
let marks = [ 85,70,80,90,90];

marks.length;

for(let i=0;i<marks;i++){
    let m = marks[i];
    console.log(m);
}

for(let m of marks){
    console.log(m);
}

marks.forEach(m=>{
    console.log(m);
});

let filteredMarks1 = marks.filter(m=> m >= 85 );
let filteredMarks2 = marks.find(m=> m >= 85 );

//Index of will return -1 if the searched item does not exists,
// else it will return index of the searched item 
let result1 = marks.indexOf(80) == -1; 

let result1 = marks.includes(80); //true/false

// Reference:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

