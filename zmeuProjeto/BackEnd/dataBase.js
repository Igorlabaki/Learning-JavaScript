const mysql     = require('mysql')

const dataBase = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"preta012",
    dataBase: "zmeuProjeto",
})

dataBase.connect((err) =>{
    if(err){
        console.log(err)
    }
    console.log('DataBase Conected.') 
});

module.exports = dataBase;