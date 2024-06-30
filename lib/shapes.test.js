const { Square, Triangle, Circle } = require('./shapes')

describe ("Circle", ()=> {
    test("Should render green circle with text", ()=> {
        expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <circle cx="150" cy="100" r="80" fill="green"/>
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Hi</text>
       </svg>`
        const circle = new Circle("green", "Hi")
        const logo = circle.generateSVG();
        expect(logo).toEqual(expectedSVG)
    })
});

describe("Square", ()=> {
    test("Should render red square", ()=> {
        expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="150" y="100" height="75" width="75" fill= "red"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="black">VCS</text>
        </svg>`
        const square = new Square("red", "VCS")
        const logo = square.generateSVG();
        expect(logo).toEqual(expectedSVG)
    })
});

describe("Triangle", ()=> {
    test("Should render blue triangle with text", ()=> {
        expectedSVG= `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 60 50, 200 200,200" fill="blue"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="white"> Hey</text>
        </svg>`
        const triangle = new Triangle("blue", "Hey")
        const logo = triangle.generate()
        expect(logo).toEqual(expectedSVG)
    })
})