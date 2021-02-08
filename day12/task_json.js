var data = [{
    "tableName":"users",
    "fields": [
        { "fieldName":"id", "type":"number"},
        { "fieldName":"name", "type":"text", "size":100},
        { "fieldName":"email", "type":"text", "size":100},
        { "fieldName":"password", "type":"text", "size":50},
    ]
}];

const fs = require('fs');

let content = "";

for(let tableObj of data ){
    console.log(tableObj);
    let i = 1;
    content+= `create table ${tableObj.tableName} ( \n`;    
    for(let fieldObj of tableObj.fields){

        content+= `${fieldObj.fieldName} `;
        
        let dataType = null;
        switch(fieldObj.type){
            case "number": 
            dataType = 'int'; break;
            case "text": 
            dataType = 'varchar'; break;
            default:
                dataType = fieldObj.type;
        }
            content+=`${dataType}`;
        
        if (fieldObj.size){
            content+=`(${fieldObj.size})`;
        }
        if( i != tableObj.fields.length){
            content +=`,`;
        }
        
        i++;
    }
    content+= `\n);`;    
}
//implement logic
console.log(content);

fs.writeFile("user.sql", content, function(error,resp){
    if(error) throw error;
    console.log("File updated" , resp);
});

//Expected Output
//create table users(id int, name varchar(100), email varchar(100), password varchar(100));