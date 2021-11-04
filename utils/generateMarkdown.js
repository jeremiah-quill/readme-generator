const licenses = require("../licenses.js");

// Generates markdown based on answers passed in from inquirer prompts
const generateMarkdown = (data) => {
  const {
    title,
    description,
    usage,
    contributions,
    installation,
    test,
    email,
    github,
    license,
  } = data;

  const chosenLicense = licenses.find((item) => item.name == license);

  return `
# ${title}
![License: ${chosenLicense.name}](${chosenLicense.badge})



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
- [Contributions](#contributions)
  ​
- [Tests](#tests)
  ​
- [Questions](#questions)
  ​


## Installation

​
To install necessary dependencies, run the following command:
​

\`\`\`
${installation}
\`\`\`



## Usage

​
${usage}



## License


This project is covered under [${chosenLicense.name}](${chosenLicense.link}).
​


## Contributions

​
${contributions}
​


## Tests

​
To run tests, run the following command:
​

\`\`\`
${test}
\`\`\`


​
## Questions

​
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}/).

`;
};

module.exports = generateMarkdown;
