const inquirer = require('inquirer')
const shape = require('./lib/shapes')

questions = [
    {
        type: "input", 
        message:"What <3 characters do you want to add to your logo?",
        name:"text"
    },
    {
        type:"input",
        message:"What color do you want your logo to be?",
        name:"color"
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
    .then(answers => shape.createSVG(answers))
}