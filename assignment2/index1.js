"use strict";
const chalk = require("chalk");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your name?", (answer) => {
      resolve(answer);
    });
  });
};

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your year of birth?", (answer) => {
      const today = new Date();
      const age = today.getFullYear() - answer;
      resolve(age);
    });
  });
};

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your home town?", (answer) => {
      resolve(answer);
    });
  });
};

const main = async () => {
  const getName = await question1();
  const getAge = await question2();
  const getHome = await question3();
  console.log(`Thank you. Hello ${chalk.red.bold(
    getName
  )}, so you are ${chalk.yellow.italic(
    getAge
  )} year old and from ${chalk.magenta(getHome)}.
  `);
  rl.close();
};

main();
