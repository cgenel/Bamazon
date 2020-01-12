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

// creating a function to collect the data from mysql database
var makeTable = function (){
  connection.query("SELECT * FROM products", function(err,res){
    for(var i=0; i<res.length; i++){
      console.log(res[i].item_id + " || " + res[i].product_name + " || " + res[i].department_name + " || " +
      res[i].price + " || " + res[i].stock_quantity + "/n")
    }
    promptCustomer(res);
  })
}

// creating a prompt to ask the customer what item they would like to purchase
var promptCustomer = function(res){
  inquirer.prompt([{
    type: 'input',
    name: 'customerDecision',
    message: "What would you like to purchase?"
    // customer will input the item they want to purchase
  }]).then(function(answer){
    var correct = false;
    for(var i=0; i<res.length; i++){
      if(res[i].product_name == answer.customerDecision){
        correct = true;
        var product = answer.customerDecision;
        var id=i;
        // inquirer prompt asking how many units of the product they would like to buy
        inquirer.prompt({
          type: "input",
          name: "itemAmount",
          message: "How man units of the product would you like to buy?",
          validate: function(value){
            if(isNaN(value)==false){
              return true;
            } else {
              return false;
            }
          }
          // check stock to see if item is available and if so make purchase
        }).then(function(answer){
          if((res[id].stock_quantity-answer.itemAmount)>0){
            connection.query("UPDATE products SET stock_quantity = '"+(res[id].stock_quantity-
              answer.itemAmount)+"' WHERE product_name ='" + product +"'", function(err, res2){
                console.log("Product Purchased!");
                makeTable();
              })
              // if item is out of stock then "not a valid selection!"
          } else {
            console.log("Not a valid selection!");
            promptCustomer(res);
          }
        })
      }
    }
  })
}