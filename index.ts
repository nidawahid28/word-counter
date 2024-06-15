#! /usr/bin/env node
// Import inquirer and chalk packages

import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull welcome messages
console.log(chalk.bold.cyanBright("\n\t\tWelcome to Word Counter"));
console.log("=".repeat(60));

// Prompt the user to enter a sentence

let answers = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: "Enter a Sentance"
        }
    ]
);

// Trimming the sentence and spliting it into words based on "spaces"

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("-Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.magentaBright(words.length)}`));
console.log("=".repeat(60));












