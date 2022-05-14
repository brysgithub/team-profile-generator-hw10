// import dependencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// import modules
const outputHtml = require('./src/outputHtml')
let output = path.resolve(__dirname, "dist", "employees.html")

// import classes
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const team = [];

function generateProfiles() {
    inquirer.prompt([
        {
            
        }
    ])
}

generateProfiles();

function createTeam() {
    fs.writeFileSync(output, outputHtml(team), 'utf-8');
    console.log("HTML Generated. Check dist.");
}