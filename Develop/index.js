// don't forget: npm init

// install inquirer to prompt user
const inquirer = require("inquirer");

/*
The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
*/

const questions = [
  // this will be an array of questions

  // project title
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  // project description
  {
    type: "input",
    name: "description",
    message: "How would you decribe your project?",
  },
  // project's table of contents
  {
    type: "input",
    name: "tableOfContents",
    message: "What are the table of contents for your project?",
  },
  // project's installation
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  // project's usage
  {
    type: "input",
    name: "usage",
    message: "How does your project get used?",
  },
  // project's licenses
  {
    type: "input",
    name: "license",
    message: "what are the licenses for your project?",
  },
  // project's contributors
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to your project?",
  },
  // project's tests
  {
    type: "input",
    name: "tests",
    message: "What are the tests for your project?",
  },
  // project's questions
  {
    type: "input",
    name: "questions",
    message: "What are the questions for your project?",
  },

  //"What is your project title?",
  //"What is your description?",
  //"What is your table of contents?", // [Array:string] or an object
  //"How do you install the application?", // [string]
  //"What is your usage?", // [string]
  //"What is your license?", // [string]
  //"Who are your contributors?", // [Array:string] ["Names", "Names", "Names"]
  //"What are your tests?", // [string] (markdown formatted?)
  //"What are your questions?", // see below:
  ////* What is your User GitHub profile picture? [string] (image url?)
  ////* What is your User GitHub email? [string]
];

// call inquirer to ask the user questions
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});

function writeToFile(fileName, data) {
  // where do I want the file to be placed? desktop? local directory? do I need to check?
  // create a file with name fileName
  // write to file fileName the data
}

function init() {
  // initialize stuff that I need here
}

init();