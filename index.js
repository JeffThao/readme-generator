const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");



const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    }, {
        type: "input",
        name: "email",
        message: "What is your email address to report issues or contact you?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is the repo's url?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "ISC", "MPL-2.0", "APACHE 2.0", "None"]
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run in order to run the tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "How does the user use the app?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    },
  ])
  .then(answers => {
    console.log(answers);
    return generateMarkdown(answers);
  })
  .then(answer => {
    return writeFileAsync("README.md", answer);
  }) 
  .then(function(){
      console.log("Generating README.md file.");
  })
  .catch(error => {
      console.log(error);
  });

