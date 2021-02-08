const fs = require('fs');
let content = "create table users(id int, name varchar(100), email varchar(100), password varchar(100));";
console.log(content);

fs.writeFile("user.sql", content, function(error,resp){
    if(error) throw error;
    console.log("File updated" , resp);
});

// function callback(error, response){

// }

// function writeFile(fileName, content,callback){

// }