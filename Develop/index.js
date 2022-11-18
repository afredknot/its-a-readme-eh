// // TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "project",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage information:",
    },
    {
      type: "input",
      name: "contribute",
      message: "Please direct contribution instructions:",
    },
    {
      type: "input",
      name: "tests",
      message: "Please enter testing instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Which license would you like to use for your application?",
      choices: ["MIT", "Apache", "unlicense"],
    },
    {
        type: "input",
        name: "github",
        message: "input Github Profile "
    },
    {
      type: "input",
      name: "email",
      message: "Input Email for Submitting Questions or Comments:",
    },
  ])
//   Create a function to write README file
  .then((info) => {
    fs.writeFile("README.md", generateREADME(info), (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });

