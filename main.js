#! /usr/bin/env node
console.log("Guess the number between 1 to 8");
// Variable creation
let a = Math.floor(Math.random() * 10);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "enter your guess number you want:" });
    // Provide code
    let ans = input.guess;
    if (a === ans) {
        console.log("Congratulations! your guess number is right");
        break;
    }
    else {
        console.log("Sorry! you guess the wrong number, try again");
    }
}
