const inquirer = require('inquirer')
const{ Circle, Square, Triangle} = require('./lib/shapes')
const fs = require('fs')

questions = [
    {
        type: "input",
        message: "What <3 characters do you want to add to your logo?",
        name: "text"
    },
    {
        type: "input",
        message: "What color do you want your logo to be?",
        name: "fill"
    },
    {
        type: "list",
        message: "What shape do you choose?",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape"
    }
]
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            if (answers.text.length > 3) {
                throw new error('Must be 3 or fewer characters')
            }
            let shape
            let SVGtext
            switch (answers.shape) {
                case "Circle": shape = new Circle(answers.fill, answers.text)
                    SVGtext = shape.generateSVG(); break;
                case "Square": shape = new Square(answers.fill, answers.text)
                    // square.generateSVG();
                    SVGtext = shape.generateSVG(); break;
                case "Triangle": shape = new Triangle(answers.fill, answers.text)
                    SVGtext = shape.generate()
            }
            // if (answers.shape === 'Circle') {
            //     console.log("circle")
            //     shape = new Circle(answers.fill, answers.text) 
            //     SVGtext = shape.generateSVG()
            //     // circle.generateSVG(); 
            // } else if (answers.shape=== 'Square') {
            //     shape = new Square(answers.fill, answers.text) 
            //     // square.generateSVG();
            //     SVGtext = shape.generateSVG()
            // } else {

            //     shape = new Triangle(answers.fill, answers.text)
            //     SVGtext = shape.generateSVG()
            //     // console.log(shape instanceof Triangle)
            //     // triangle.generateSVG();
            //     // console.log(shape.generateSVG())
            // }
            fs.writeFile('logo.svg', SVGtext, (err) => { err ? console.error(err) : console.log("created!") })
        })
}
// .then((shape) => {
//     fs.writeFile('logo.svg', SVGtext, (err) => {err ? console.error(err) : console.log("created!")})})
//What can be done i'm stumped

// }
init();