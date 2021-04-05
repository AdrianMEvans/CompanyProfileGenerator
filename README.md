# CompanyProfileGenerator
Company Employee Profile Generator

## Description
This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. There is also a unit test for every part type of employee that ensures that it passes each test.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [User Story](#story)
* [Instructions](#Instructions)
* [Screenshot](#screenshot)
* [Contact](#contact)


## Installation
You need to use Express and in order to do this you need to install Nodejs and the Node Package Maanager (NPM).
NPM is used to fetch any packages (JavaScript libraries) that an application needs for development, testing and/or production. In this application we will use Inquirer and Jest.
You then run NPM init and then install the dependencies Express, Inquirer and Jest.
To run the application from the root folder enter node app.js in the terminal or bash.

## Usage
On running the console will run through certain questions to register each employee and then generate a HTML page showing the teams basic info and link to their e-mails and GitHub profiles.

## User Story
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the employee manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the employee engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the employee intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


## Screenshot
Screenshot of Generated Page![## Screenshot](https://github.com/AdrianMEvans/CompanyProfileGenerator/blob/main/screenshots/GeneratedHtml.png?raw=true)
Screenshot of Test Result in Terminal![## Screenshot](https://github.com/AdrianMEvans/CompanyProfileGenerator/blob/main/screenshots/testsTerminal.png?raw=true)
Screenshot of Test Result HTML![## Screenshot](https://github.com/AdrianMEvans/CompanyProfileGenerator/blob/main/screenshots/testsHtml.png?raw=true)

## Contact :bellhop_bell:

Contact | Mobile | E-mail
------------ | ------------- | ------------
Adrian Evans | 0424 064 104 | adrian@polywhiz.com
