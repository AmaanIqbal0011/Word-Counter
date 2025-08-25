#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word: ",
    },
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence Word Count is ${words.length}`);
