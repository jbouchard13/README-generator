// don't forget: npm init

// call functions from utils folder
const functions = require("./utils/generateMarkdown");

// call node fs to manipulate files
const fs = require("fs");

// install inquirer to prompt user
const inquirer = require("inquirer");

// install axios to do http requests
const axios = require("axios");

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
    default: "None",
  },
  // project's contributors
  {
    type: "input",
    name: "contributors",
    message:
      "Who contributed to your project? (please seperate names with a comma)",
  },
  // project's tests
  {
    type: "input",
    name: "tests",
    message: "What are the tests for your project?",
    default: "None",
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
];
// create a new async function
const getReadMeData = async () => {
  // inside this async function call both inquirer and axios

  // call inquirer to ask the user questions
  const inquirerAnswers = await inquirer.prompt(questions);
  // take the user's answers
  // take the contributors and place them into an array
  const contributorsArr = inquirerAnswers.contributors.split(",");

  // take contributors and add a new line and list element to each
  // when it is saved it will help format the names
  const contributorsFormatted = contributorsArr.map((contributor) => {
    return `* ${contributor}\n`;
  });

  // join the contributorsFormatted array back to a string
  // join it with empty "" to get ride of commas
  const contributorsStr = contributorsFormatted.join("");

  // call shields.io with axios to generate badges
  // const axiosShields = await axios.get(``);

  // generate a new markdown file
  const newReadMe = functions.generateMarkdown(
    inquirerAnswers,
    contributorsStr
  );

  // place the users answers into the markdown file
  // save the new markdown files to the readme-files folder
  writeToFile(`../readme-files/${inquirerAnswers.fileName}.md`, newReadMe);

  console.log(contributorsArr);
};
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

getReadMeData();
