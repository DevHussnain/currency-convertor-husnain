#! /usr/bin/env node
import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    },
};
const ans = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GPB"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Select your convertion amount: "
    },
]);
const { to, From, amount } = ans;
if (From && to && amount) {
    let result = Convertion[From][to] * amount;
    console.log(`Your Convertion from ${From} to ${to} is ${result}`);
}
else {
    console.log("Invalid Inputs.1");
}
