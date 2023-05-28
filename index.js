const fs = require(fs);
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes");

class svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setText (text,color){
        this.textElement = `text x="150" y="150" font-size="75" fill="${color}">${text}</text>`
    }
    setShape (shape){
        this.shapeElement = shape.render()
    }
}

function run () {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating SVG file");
        makeLOGO("./Utility/logo.svg", createSVG({...responses}))
        .then(() => {
            console.log("Error creating logo", err);
        });
    });
}
