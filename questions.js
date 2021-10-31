const licenses = require("./licenses.js");

const questions = [
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide a command for installation:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide a command for testing:",
    name: "test",
  },
  {
    type: "input",
    message:
      "Please provide instructions on how to contribute to this project:",
    name: "contributing",
  },
  {
    type: "list",
    message: "Please choose a license for your project to be covered under:",
    choices: licenses.map((license) => license.name),
    name: "license",
  },
];

module.exports = questions;
