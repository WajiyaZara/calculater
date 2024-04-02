#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstnumber" },
  { message: "Enter your second number", type: "number", name: "secondnumber" },
  {
    message: "select one  of the operaters to perform operation ",
    type: "list",
    name: "operater",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement
if (answer.operator==="Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operater==="Subtraction" ) {
  console.log(answer.firstnumber - answer.secondnumber);
}else if (answer.operater==="Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operater==="Division") {
  console.log(answer.firstnumber / answer.secondnumber);
}else {
console.log("select one  of the operaters to perform operation")

}
