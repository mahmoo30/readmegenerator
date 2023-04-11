const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');

const generateReadme = ({username, email, title, description, license, install, test, usage, contribute}) =>
`# ${title} ![badge](https://img.shields.io/badge/license-${license}-brightgreen)

## Description
${description}

## 🔍 Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#test)
- [Questions](#questions)

## 💾 Installation
To install necessary dependencies, run the following command:
- ${install}

## Usage
${usage}

## License
![badge](https://img.shields.io/badge/license-${license}-brightgreen): This application is covered by the ${license} license. 

## Contributing
${contribute}

## Tests
To run tests, run the following command:
- ${test}

## ✋ Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. <br />
You can find more of my work on GitHub: [${username}](https://github.com/${username})

#### This README was generated using a [README-generator](https://github.com/mahmoo30/readmegenerator) 🔥🔥🔥`;

inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the project's name?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a short description of your project."
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: 
            [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "install",
            message: "What command should be run to install dependencies?",
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?"
        },
    ])
.then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile('./producedFile/README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!'));
  });