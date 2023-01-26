var mysql = require("mysql")
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    pw: "",
});
con.connect( function(err){
    if(err) {
        console.log(`Connection failed due to ${err}`)
    }
    else{
        console.log("Connected")
    }
} )

// con.query("CREATE DATABASE dbstart", (err, result) => {
//     if (err) {
//         console.log(`DB is not created beacuse: ${err}`)
//     }
//     else {
//         console.log(`Database created successfully`)
//     }
// })
con.query("USE dbstart")

con.query("CREATE TABLE IF NOT EXISTS shoes(shoe_id int primary key auto_increment,shoe_name varchar(255))", (err, result) => {
    if(err) {
        console.log(`Table failed to be created successfully`)
    }
    else {
        console.log(`Table created successfully`)
    }
})

con.query("INSERT into shoes values(null,'AIR J1'),(null,'J1 Dior'),(null,'Air Force 1')", (err, result) => {
    if(err) {
        console.log(`Inserting datas failed to happen`)
    }
    else {
        console.log(`Values are inserted succeffully`)
    }
})