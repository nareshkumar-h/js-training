let cheques = [1, 2, 3, 4, 5];

// find invalid cheques - logic odd number
let invalidCheques = [];
for (let c of cheques) {

    //odd number
    if (c % 2 != 0) {
        invalidCheques.push(c);
    }
}
function filter(cheques) {
    let result = [];
    for (let c of cheques) {

        //odd number
        if (c % 2 != 0) {
            result.push(c);
        }

    }
    return result;
}
let invalidChequesNew = cheques.filter(c => c % 2 != 0);
console.log(invalidCheques);
console.log(invalidChequesNew);
let validCheques = cheques.filter(c => {
    if (c % 2 == 0) {
        return c;
    }
});
console.log(validCheques);
