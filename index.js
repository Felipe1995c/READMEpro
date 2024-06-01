const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
{
    type: 'input',
    message: 'What would you like to name your README/Project Title?',
    name: 'title'
},
{
    type: 'input',
    message: 'What is your TASK?',
    name: 'your-task'
},
{
    type: 'input',
    message: 'What is the User Story?',
    name: 'user-story'
},
{
    type: 'input',
    message: 'What is the acceptance criteria?',
    name: 'acceptance-criteria'
},
{
    type: 'input',
    message: 'Did you use any sources?',
    name: 'sources'
},
{
    type: 'input',
    message: 'Usage... what can your app do and how to use it.',
    name: 'usage'
},
{
    type: 'input',
    message: 'Mock up and images of app',
    name: 'mock-up'
}

])