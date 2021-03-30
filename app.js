const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./libraries/Engineer");
const Intern = require("./libraries/Intern");
const Manager = require("./libraries/Manager");

const employees = [];

function initApp() {
    startHtml();
    addEmployee();
}

function addEmployee() {
    inquirer.prompt([{
        message: "Enter employee's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select employee's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter employee's id",
        name: "id"
    },
    {
        message: "Enter employeee's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub Username";
        } else if (role === "Intern") {
            roleInfo = "School Name";
        } else {
            roleInfo = "Office Phone Number";
        }
        inquirer.prompt([{
            message: `Enter employee's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more Employees?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreEmployees"
        }])
        .then(function({roleInfo, moreEmployees}) {
            let newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newEmployee = new Intern(name, id, email, roleInfo);
            } else {
                newEmployee = new Manager(name, id, email, roleInfo);
            }
            employees.push(newEmployee);
            addHtml(newEmployee)
            .then(function() {
                if (moreEmployees === "yes") {
                    addEmployee();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Employee Profiles</title>
    </head>
    <body style="background-color: #E7F2F8;">
        <nav class="navbar navbar-dark mb-5" style="background-color: #74BDCB;">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Employee Profiles</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/employees.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = employee.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header" style="background-color: #FFAEBC;">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = employee.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header" style="background-color: #B4F8C8;">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = employee.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header" style="background-color: #FBE7C6;">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding employee");
        fs.appendFile("./output/employees.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/employees.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

initApp();