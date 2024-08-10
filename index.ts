#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function personData() {
  interface Person {
    [key: string]: {
      name: string;
      age: number;
      gender: string;
    };
  }
  let data: Person = {};

  let continueProram = true;
  while (continueProram) {
    let choice = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        choices: ["ADD DATA:", "SEARCH DATA:", "EXIT:"],
        message: "WHAT DO YOU WANT TO CHOOSE?",
      },
    ]);
    if (choice.choice === "ADD DATA:") {
      let userInput = await inquirer.prompt([
        {
          name: "name",
          type: "string",
          message: "ENTER YOUR NAME",
        },
        {
          name: "age",
          type: "number",
          message: "ENTER YOUR AGE",
        },
        {
          name: "gender",
          type: "string",
          message: "ENTER YOUR GENDER",
        },
        {
          name: "cnic",
          type: "number",
          message: "ENTER YOUR CNIC NUMBER",
          validate: (val: number) => {
            if (val.toString().length === 10) {
              return true;
            } else {
              return `ENTER CNIC NUMBER IN 10 DIGITS.`;
            }
          },
        },
      ]);
      if (userInput.cnic) {
        data[userInput.cnic] = {
          name: userInput.name,
          age: userInput.age,
          gender: userInput.gender,
        };
        console.log(
          chalk.yellow.bold.italic(
            `\n\t\t============================================`
          )
        );
        console.log(
          chalk.blueBright.italic.bold(`\t\t    YOUR NAME IS: `) +
            chalk.green.italic.bold(`"${userInput.name}"\n`) +
            chalk.blueBright.italic.bold(`\t\t    YOUR AGE IS: `) +
            chalk.green.italic.bold(`"${userInput.age}"\n`) +
            chalk.blueBright.italic.bold(`\t\t    YOUR GENDER IS: `) +
            chalk.green.italic.bold(`"${userInput.gender}"\n`) +
            chalk.blueBright.italic.bold(`\t\t    YOUR CNIC NUMBER IS IS: `) +
            chalk.green.italic.bold(`"${userInput.cnic}"`)
        );
        console.log(
          chalk.yellow.bold.italic(
            `\t\t============================================\n`
          )
        );
        console.log(
          chalk.green.bold.italic(
            `\t\t============================================`
          )
        );

        console.log(
          chalk.yellow.italic.bold(
            `\t\t     YOUR DATA IS SAVED IN OUR PROGRAM.\n\t\t PLEASE CHECK IT OUT FROM SEARCH DATA OPTION.`
          )
        );

        console.log(
          chalk.green.bold.italic(
            `\t\t============================================\n`
          )
        );
      } else {
        console.log(`YOUR DATA IS NOT SAVED IN OUR PROGRAM.`);
      }
    } else if (choice.choice === "SEARCH DATA:") {
      let search = await inquirer.prompt([
        {
          name: "search",
          type: "number",
          message: "ENTER CNIC NUMBER TO SEARCH YOUR DATA.",
        },
      ]);
      if (search.search in data) {
        console.log(
          chalk.yellow.italic.bold(`\n\t  YOUR GIVEN DATA IS FOUND:\n`)
        );
        console.log(data[search.search]);
        console.log("\n");
      } else {
        console.log(
          chalk.red.italic.bold(`\n\tYOUR GIVEN DATA IS NOT FOUND.\n`)
        );
      }
    } else if (choice.choice === "EXIT:") {
      console.log(
        chalk.green.italic.bold(
          `\n\t\t=============================================================`
        )
      );
      console.log(
        chalk.yellow.italic.bold(
          `\t\t    THANKS FOR USING OUR PROGRAM. WE WISH YOU A HAPPY DAY.
         \t\t\tCREATOR BY => RAHEEM VEER:`
        )
      );

      console.log(
        chalk.green.italic.bold(
          `\t\t=============================================================\n`
        )
      );

      continueProram = false;
    }
  }
}
personData();
