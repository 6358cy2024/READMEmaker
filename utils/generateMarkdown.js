// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '!Static Badge';//get license of Apache
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
  return `
  ## READMEmaker Output file
  # ${data.title} ${licenseBadge}
  ${data.name}'s README
  # Table of Contents:

  - [Development](#development)
  - [Description](#description) 
  - [Installation](#installation) 
  - [Test Instructions](#test-instruction) 
  - [Contributions](#contributions) 
  - [License](#license) 
  - [Contact](#contact)

  ## 




  ## License
  
  ${licenseSection}


  ## Contact
  Here is my github information : ${data.github}
  Here is my repository : https://github.com/${data.github}
  This is my email: ${data.email}

  `
}
//test change
module.exports = generateMarkdown;
