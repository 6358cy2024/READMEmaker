// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'test',
    message: 'Hello World'
    }
];
//inquirer.prompt(questions); call line

// TODO: Create a function to write README file
// fs.readFile('./README.md', 'utf8', (error, data) => {
//     if (error) {
//       return console.log(error);
//     }
//     const user = {
//       name: firstName + ' ' + lastName,
//       age: age
//     }
  
  
  
//     const parsed = JSON.parse(data);
//     parsed.users.push(user);
    
//     fs.writeFile('./README.md', JSON.stringify(parsed, null, 2), (error) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log('user added');
//     })
//   });

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answerObj) => {
            console.log(answerObj);
        })
}

// Function call to initialize app
init();
