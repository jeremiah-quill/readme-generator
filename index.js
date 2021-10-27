// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
// const {renderLicenseBadge, renderLicenseLink, renderLicenseSection} = generateMarkdown.

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Provide a short description explaining the what, why, and how of your project.",
  "What are the steps required to install your project?",
  "Provide instructions and examples for use.",
  "List your collaborators, if any, with links to their GitHub profiles.  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

let data = {
  title: "My Title",
  description: "My description",
  installation: "My installation",
  usage: "My usage",
  contributing: "my contributors",
};

generateMarkdown(data);
