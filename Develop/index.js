// don't forget: npm init
// install inquirer to prompt user
const inquirer = require("inquirer");

/*
The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
*/

const questions = [
  // this will be an array of questions
  //* What is your Project title?
  //* What is your Description?
  //* What is Table of Contents? [Array:string] or an object
  //* How to install: [string]
  //* What is your Usage? [string]
  //* What is your License? [string]
  //* Who are your contributors? [Array:string] ["Names", "Names", "Names"]
  //* What are your tests? [string] (markdown formatted?)
  //* What are your Questions? see below:
  ////* What is your User GitHub profile picture? [string] (image url?)
  ////* What is your User GitHub email? [string]
];

function writeToFile(fileName, data) {
  // where do I want the file to be placed? desktop? local directory? do I need to check?
  // create a file with name fileName
  // write to file fileName the data
}

function init() {
  // initialize stuff that I need here
}

init();
