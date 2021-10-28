// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license ? "return license badge" : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license ? "return license link" : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license ? "return license section" : "";
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const { title, description, usage, contributing, email, github } = data;
  return `
# ${title}


## Description

​
${description}
​

## Table of Contents

​

- [Installation](#installation)
  ​
- [Usage](#usage)
  ​
- [License](#license)
  ​
- [Contributing](#contributing)
  ​
- [Tests](#tests)
  ​
- [Questions](#questions)
  ​

## Installation

​
To install necessary dependencies, run the following command:
​


npm i


​

## Usage

​
${usage}
​

## Contributing

​
${contributing}
​

## Tests

​
To run tests, run the following command:
​


npm test


​

## Questions

​
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}/).

`;
};

module.exports = generateMarkdown;
