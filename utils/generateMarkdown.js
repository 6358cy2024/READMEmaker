// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '![![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
          return 'https://www.apache.org/licenses/LICENSE-2.0';
      default:
          return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  return `Click the following link to get more information on the Licensing : ${link}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
//the elements from the data object that the user input will be printed out on the READMEsample file.
//[](#) will have links where you can click on these parts of the readme and it will take you to the designated section you desire.
  return `
  # READMEmaker Output file
  
  # ${data.title} ${licenseBadge}
  ${data.name}'s README
  # Table of Contents:

  - [Description](#description) 
  - [Installation](#installation) 
  - [Test Instructions](#testing) 
  - [Contributions](#contributing) 
  - [License](#license) 
  - [Contact](#contact)

  ## Description
  
  ${data.description}

  ## Installation
  
  ${data.install}
  
  ## Testing
  
  ${data.testInstructions}

  ## Contributing:
  
  ${data.contributions}
  
  ## License
  
  ${licenseSection}


  ## Contact
  - Here is my github information: ${data.github}
  - Here is my repository : https://github.com/${data.github}
  - This is my email: ${data.email}

  `
}
//test change
module.exports = generateMarkdown;
