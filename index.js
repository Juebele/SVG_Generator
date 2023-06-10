const fs = require('fs');

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

import('inquirer').then((inquirer) => {
    
const questions = [
    {
        type: 'input',
        name: 'imageText',
        message: 'Enter three characters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'enter a color for the text',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'select a background shape',
        choives: ['Circle', 'Triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        messge: 'enter a color for the background',
    },
];

function createImage(fileName, data) {
    console.log(`Writing ${data} to ${fileName}`)
    FileSystem.createImage(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('SVG image generated!');
    });
}

async function run() {
    console.log('Running');
        let svgString = '';
        let svg_file = 'logo.svg';

    const answers = await inquirer.createPromptModule(questions);
        let userText =  '';
        if (answers.text.length > 0 && answers.text.length <= 3) {
            userText = answers.text;
        } else {
            console.log('Too many or too few characters!')
            return;
        }
        console.log(`You entered ${userText}`);

        textColor = answers['textColor'];
        console.log(`Your text will be ${textColor}`);

        shape = answers.shape;
        console.log(`You chose ${shape} as your shape`);

        shapeColor = answers['shapeColor'];
        console.log(`Your shape will be ${shapeColor}`);

        let shape;
        if (shape === 'Circle') {
            shape = new Circle;
            console.log('You selected a circle');
        } else {
            console.log('That is not not a valid shape!');
        }
        shape.setColor(shapeColor);

        let svg = new SVG();
        svg.setTextElement(text, textColor);
        svg.setShapeElement(shape);
        svgString = svg.render();

        console.log(`${svgString}`);

        console.log(`Shape complete`);

        createImage(svg_file, svgString);

}

run();

})

// function run () {
//     inquirer.prompt(questions).then((responses) => {
//         console.log("Creating SVG file");
//         makeLOGO("./Utility/logo.svg", createSVG({...responses}))
//         .then(() => {
//             console.log("Error creating logo", err);
//         });
//     });
// }

// run();
