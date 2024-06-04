import fs from 'fs';
import inquirer from 'inquirer';
const questions =([
    {
        type: 'input',
        message: 'What would you like to name your README/Project Title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe what your application was designed for?',
        name: 'description'
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
        type: 'confirm',
        message: 'Would you like to insert a table of contents?',
        name: 'tableContent',
        default: true
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Did you use any sources to contribute to your application?',
        name: 'sources'
    },
    {
        type: 'input',
        message: 'Usage... what can your app do and how to use it?',
        name: 'usage'
    },
    {
        type: 'input',
        message: "Don't forget to add mock up images of app!",
        name: 'mock-up'
    },
    {
        type: 'list',
        message: 'Did you use any licenses?',
        name: 'license',
        choices: ['MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 'The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', 'Other']
    },
    {
        type: 'input',
        message: 'Where any tests done to find or fix bugs?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Any Questions?',
        name: 'questions'
    }

]);
function generateAnchorLink(text) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

function generateTableOfContents(answers) {
    return `
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Mock Up](#mock-up)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
`;
}

function generateREADME(answers) {
    let tableOfContents = '';
    if (answers.includeTableOfContents) {
        tableOfContents = generateTableOfContents(answers);
    }
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
${generateTableOfContents(answers)}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Mock Up
![Add images or video of your project]

## Contributing
${answers.sources}

## Tests
${answers.tests}

## License
${answers.license}
`;
};

inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README.md has been generated successfully.');
        }
    });
});