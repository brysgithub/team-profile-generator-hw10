// import dependencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// import modules
const outputHtml = require('./src/outputHtml')
let output = path.resolve(__dirname, "dist", "employees.html")

// import classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];

function generateProfiles() {
    console.log("Follow the instructions below to build your team:")
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager name: ",
            name: "name",
        },
        {
            type: "input",
            message: "Enter manager ID#: ",
            name: "id",
        },
        {
            type: "input",
            message: "Enter manager email: ",
            name: "email",
        },
        {
            type: "input",
            message: "Enter manager office#: ",
            name: "officeNumber",
        }
    ]).then((data) => {
        let { name, id, email, officeNumber } = data;
        let manager = new Manager(name, id, email, officeNumber);
        team.push(manager);

        nextPrompt();

        console.log("< Manager Created >")
    });
}

function nextPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "next",
            message: "Add addtional team member?",
            choices: ["Intern", "Engineer", "Complete and exit"],
        }
    ]).then((data) => {
        switch(data.next) {
            case "Intern":
                pushIntern();
                break;

            case "Engineer":
                pushEngineer();
                break;

            case "Complete and exit":
                createTeam();
                break;
        }
    });
}

function pushIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter intern name: ",
            name: "name",
        },
        {
            type: "input",
            message: "Enter intern ID#: ",
            name: "id",
        },
        {
            type: "input",
            message: "Enter intern email: ",
            name: "email",
        },
        {
            type: "input",
            message: "Enter intern school: ",
            name: "school",
        }
    ]).then((data) => {
        let { name, id, email, school } = data;
        let intern = new Intern(name, id, email, school);
        team.push(intern);

        nextPrompt();

        console.log("< Intern Created >")
    });
}

function pushEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter engineer name: ",
            name: "name",
        },
        {
            type: "input",
            message: "Enter engineer ID#: ",
            name: "id",
        },
        {
            type: "input",
            message: "Enter engineer email: ",
            name: "email",
        },
        {
            type: "input",
            message: "Enter engineer github acct.: ",
            name: "github",
        }
    ]).then((data) => {
        let { name, id, email, github } = data;
        let engineer = new Engineer(name, id, email, github);
        team.push(engineer);

        nextPrompt();

        console.log("< Engineer Created >")
    });
}

generateProfiles();

function createTeam() {
    fs.writeFileSync(output, outputHtml(team), 'utf-8');
    console.log("HTML Generated. Check dist.");
}