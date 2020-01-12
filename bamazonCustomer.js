// install mysql and inquirer
var mysql = require("mysql");
var inquirer = require('inquirer');

// connect to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Charza13#",
  database: "bamazon"
});

// initializing connection to mysql
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  makeTable();
});

// creating a functing to collect the data from mysql database
var makeTable = function (){
  connection.query("SELECT * From products", function(err,res){
    for(var i=0; i<res.length; i++){
      console.log(res[i].item_id+" || "+res[i].product_name+" || "+ res[i].department_name+" || "+
      res[i].price+" || "+res[i].stock_quantity+"/n")
    }
  })
}