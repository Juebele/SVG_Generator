const fs = require("fs");

const inquirer = require("inquirer")

const { Circle, Triangle, Square } = require("./lib/shapes");

class svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setText(text, color) {
        this.textElement = `text x="150" y="150" font-size="75" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeElement = shape.render()
    }
}

function start() {


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
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'enter a color for the background',
            },
        ];

        inquirer.prompt(questions).then((responses) => {
            console.log("Writing SVG file");
            fs.promises.writeFile("./examples/example.SVG", createSVG({ ...responses }))
                .then(() => {
                    console.log("SVG file written successfully.");
                })
                .catch((err) => {
                    console.log(err);
                });
        });

        // function createImage(fileName, data) {
        //     console.log(`Writing ${data} to ${fileName}`)
        //     FileSystem.createImage(fileName, data, function (err) {
        //         if (err) {
        //             return console.log(err);
        //         }
        //         console.log('SVG image generated!');
        //     });
        // }

        
    };
    function createSVG(answers) {
        console.log('Running');


        let imageText = '';
        if (answers.imageText.length > 0 && answers.imageText.length <= 3) {
            imageText = answers.imageText;
        } else {
            console.log('Too many or too few characters!')
            return;
        }
        console.log(`You entered ${imageText}`);

        let textColor = answers['textColor'];
        console.log(`Your text will be ${textColor}`);

        let shape = answers.shape;
        console.log(`You chose ${shape} as your shape`);

        let shapeColor = answers['shapeColor'];
        console.log(`Your shape will be ${shapeColor}`);

        if (shape === 'Circle') {
            shape = new Circle;
            console.log('You selected a circle');
        } else if (shape === 'Triangle') {
            shape = new Triangle;
            console.log('You selected a triangle')
        } else if (shape === 'Square') {
            shape = new Square;
        } else {
            console.log('That is not not a valid shape!');
        }
        shape.setColor(shapeColor);

        // let svg = new SVG();
        // svg.setTextElement(text, textColor);
        // svg.setShapeElement(shape);

        console.log(`Shape complete`);

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render ()}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${imageText}</text>
      
      </svg>`;

    }
    
start();

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
