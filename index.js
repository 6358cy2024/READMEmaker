// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');//the writing file
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe how this project works'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this project?'
    },
    {
        type: 'input',
        name: 'test-intructions',
        message: 'How do you test this project?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidelines?'
    },
    {
        type: "list",
        name: "license",
        message: "Which license does the project have?",
        choices: ["MIT", "Apache 2.0", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }

];

// TODO: Create a function to write README file
function writeToFile(data) {//this will sens the information to READMEsample, the normal README is the one for this project.
    fs.writeFile('READMEsample.md', data, (error) => {//use the input data to insert values.
        if (error) {
            return console.log(error);
        } else {
            console.log('File successfully made.');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)//gets questions
        .then((data) => {
            writeToFile(generateMarkdown(data));//sends information to GenerateMarkdown file
        })
}
// Function call to initialize app
init();
