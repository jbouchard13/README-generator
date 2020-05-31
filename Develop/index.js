// don't forget: npm init

// call functions from utils folder
const functions = require("./utils/generateMarkdown");

// call node fs to manipulate files
const fs = require("fs");

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
    message: "How would you describe your project?",
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
    message: "What are the licenses for your project?",
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
    message:
      "Who can be reached out to if there are any questions about the project?",
  },
  // have the user name the new readme file
  {
    type: "input",
    name: "fileName",
    message: "How would you like to name the new file? (no .md needed)",
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
  // take the user's answers
  // generate a new markdown file
  const newReadMe = functions.generateMarkdown(answers);
  // place the users answers into the markdown file
  // write the new markdown to a file
  writeToFile(`../readme-files/${answers.fileName}.md`, newReadMe);
  // save file to desktop for easy access for user
  console.log(answers);
  // console.log(newReadMe);
});

const writeToFile = (fileName, data) => {
  // where do I want the file to be placed? desktop? local directory? do I need to check?
  // create a file with name fileName
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("New README created.");
  });
  // write to file fileName the data
  // notify the user that the file has been saved
};

const init = () => {
  // initialize stuff that I need here
};

init();
