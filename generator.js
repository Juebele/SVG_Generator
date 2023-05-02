const fs = require("fs");
const inquirer = require("inquirer");
const createSVG = require("./Utility/createSVG.js"); //this is where the SVG will be written to

function run () {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating SVG file");
        makeLOGO("./Utility/logo.svg", createSVG({...responses}))
        .then(() => {
            console.log("Error creating logo", err);
        });
    });
}
