const inquirer = require('inquirer')
const Circle = require('./lib/shapes')
const Square = require('./lib/shapes')
const Triangle = require('./lib/shapes')
const fs = require('fs')

questions = [
    {
        type: "input", 
        message:"What <3 characters do you want to add to your logo?",
        name:"text"
    },
    {
        type:"input",
        message:"What color do you want your logo to be?",
        name:"fill"
    },
    {
        type:"list",
        message:"What shape do you choose?",
        choices:["Circle","Triangle", "Square"],
        name:"shape"
    }
]
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        if (answers['shape'] === 'Circle') {
            shape = new Circle(answers.fill, answers.text) 
            // circle.generateSVG(); 
        } else if (answers['shape'] === 'Square') {
            shape = new Square(answers.fill, answers.text) 
            // square.generateSVG();
        } else {
            shape = new Triangle(answers.fill, answers.text)
            // triangle.generateSVG();
        }
        return shape
    })
    .then((shape) => {
        fs.writeFile('logo.svg', `${shape}`.generateSVG(), (err) => {err ? console.error(err) : console.log("created!")})})
//What can be done i'm stumped
    
}
init();