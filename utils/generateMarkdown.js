// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license ? "do something with license" : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license ? "do something with license" : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license ? "do something with license" : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contributing } = data;
  //   return `# ${title}
  //   ${description}
  //   ${installation}
  //   ${usage}
  //   ${contributing}
  // `;
  console.log(
    `# ${title}
  ${description}
  ${installation}
  ${usage}
  ${contributing}
`
  );
}

module.exports = generateMarkdown;
