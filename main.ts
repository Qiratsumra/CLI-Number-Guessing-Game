#! /usr/bin/env node 

import inquirer from "inquirer";

console.log("\n Welcome to Qirat Saeed Number Guessing Game \n");

let myRandomNumber=Math.floor(Math.random() * 15 + 1);
let answer = await inquirer.prompt([
    {
        name:"userNumber",
        type:"number",
       message:"Select the number from 1-15",
    }
])
if (answer.userNumber=== myRandomNumber) {
    console.log("Congralutions you select the right number");
    
}else{
    console.log("OOP! you select the wrong number");
    
}