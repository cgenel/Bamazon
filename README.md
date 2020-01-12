# Bamazon
> This is my first attempt at using Node, Inquirer & SQL to create an Amazon-like storefront.

## Table of Contents
* A simple CLI app utilizing inquirer Node.js and MySQL
- bamazonCustomer.js
- schema.sql
- package-lock.json
- screenshot of the functioning app with both a successful purchase and an item out of stock

## General Info
The app will take in orders from customers and deplete stock from the store's inventory. Once connected the customer will be asked what item they would like to purchase. After choosing the item to purchase, the customer will then be asked how many units of that item they would like to purchase. If the item is in stock it will subtract the amount chosen by the customer from the total amount in the databse and the purchase will be successful. If there is not enough units of the item chosen in stock, then it will be unsuccessful and the customer will be prompted "not a valid selection!"

![App Screenshot](/pictures/bamazon_Screenshot.png)

To-do- list:
* Try the bonus Level 2 and Level 3 Challenges!!!

##Status
Project is: _in progress_