const generateREADME = require('./utils/generateMarkdown')

const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

function askUser(){
return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your Github profile name?'
        },
        {
            type: 'list',
            message: 'Which license do you require?',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'GPL', 'None']
        }
    ])

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, '/examples/', fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    askUser().then(data => writeToFile('README.md', generateREADME(data)))
}
init();