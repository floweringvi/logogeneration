const fs= require('fs')

class Circle {
    constructor(fill , text) {
        this.fill = fill; 
        this.text = text; 
        
   
    }
    generateSVG() {
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <circle cx="150" cy="100" r="80" fill="${this.fill}"/>
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">${this.text}</text>
       </svg>`;
    }
}

class Square {
    constructor( fill,text) {
        this.fill = fill; 
        this.text = text;
        
       
    }
    generateSVG() {
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="150" y="100" height="75" width="75" fill= "${this.fill}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="black">${this.text}</text>
        </svg>`;
    }
}
class Triangle {
    constructor(fill, text) {
        this.fill = fill;
        this.text = text;
        
       
    }
    generate(){
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 60 50, 200 200,200" fill="${this.fill}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="white"> ${this.text}</text>
        </svg>`;
    }
}


module.exports = {Circle, Square, Triangle};