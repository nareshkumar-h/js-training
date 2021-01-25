var cheques =[ 1,3,4,5];
cheques.push(6);
cheques.pop();
undefined
cheques.includes(1)
true
cheques.includes(2)
false
cheques.includes(1)
true
cheques = [1,2,3,4,4,5]
(6) [1, 2, 3, 4, 4, 5]
cheques.filter(c=>c%2==0);
(3) [2, 4, 4]
cheques.find(c=>c%2==0);
2

cheques.join(",")
"1,2,3,4,4,5"

let temp = "";
for(let c of cheques){
    
temp = temp + c + ",";
}
1,2,3,4,5,

cheques
(6) [1, 2, 3, 4, 4, 5]
cheques.join(":")
"1:2:3:4:4:5"
cheques.forEach(c=>console.log(c));