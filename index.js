const fs = require("fs");
const inquirer = require("inquirer");
const (Circle, Triangle, Square) = require("./lib/shapes");

function run () {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating SVG file");
        makeLOGO("./Utility/logo.svg", createSVG({...responses}))
        .then(() => {
            console.log("Error creating logo", err);
        });
    });
}
