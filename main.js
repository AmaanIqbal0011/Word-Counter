#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word: ",
    },
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence Word Count is ${words.length}`);
