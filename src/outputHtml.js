// import dependencies
const fs = require('fs');
const path = require('path');

// push built values to html
const appendValue = (htmlTemp, field, value) => {
    return htmlTemp.replaceAll(`{{ ${field} }}`, value);
};

// const data = values;

// Pull in employee info, choose template and append to dist/employee.html
function outputHtml(team) {
    var html = "";

    for (var i of team) {
        let outputTo = path.resolve(__dirname, '../template', `${i.getRole()}.html`);

        let values = fs.readFileSync(outputTo , 'utf-8');
        values = appendValue(values, 'name', i.getName());
        values = appendValue(values, 'email', i.getEmail());
        values = appendValue(values, 'id', i.getId());
        values = appendValue(values, 'role', i.getRole());

        switch(i.getRole()) {
            case 'Manager':
                values = appendValue(values, 'officeNumber', i.getOfficeNumber());
                break;
            case 'Intern':
                values = appendValue(values, 'school', i.getSchool());
                break;
            case 'Engineer': 
                values = appendValue(values, 'github', i.getGithub());
                break;
            default:
                break;
        }
            html += values;

    }
        const htmlTemp = path.resolve(__dirname, '../template/index.html');
        let coreHtml = fs.readFileSync(htmlTemp, 'utf-8');

        return appendValue(coreHtml, 'team', html)

};

module.exports = outputHtml;