// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
const licenseBadgeLinks = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  Apache:
    "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  Unlicense:
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
};

// TODO: Create a function to generate markdown for README
function generateREADME(answers) {
 
  answers.licenseBadge = licenseBadgeLinks[answers.license];
  return   `## Title 
  ${answers.project}
${answers.licenseBadge}
## Description
${answers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install app, run the following:
~~~
${answers.installation}
~~~
## Usage
${answers.usage}
## License
${answers.license} 
## Contributing
${answers.contribute}
## Tests
How to test:
~~~
${answers.tests}
~~~
## Repo location
${answers.github}
## Questions
Questions about this repository? Please contact me at [${answers.email}](mailto:${answers.email}).`;
}

module.exports = generateREADME;