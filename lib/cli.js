const { Rectangle, Square, Triangle, Circle } = require('./shapes')

const inquirer = require('inquirer');

const fs = require('fs');
const { writeFile} = require('fs/promises')

const SVG = require('./svg');
const { right } = require('inquirer/lib/utils/readline');





const generateSvg = ({ Characters, Color, Shapes, shapeColor}) => // Shapes reference the file shapes.js
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 200 200"><${Shapes} cx="50" cy="50" r="40" stroke="${Color}" stroke-width="4" fill="${shapeColor}" /></svg>
    `
// image pixels need to be 300x200 pixels* 
class CLI {
    run() {

 return inquirer

  .prompt([
    /* Pass your questions in here */
    {
        Type: 'input',
        name: 'Characters',
        message: 'Enter up to three characters?',
        default: 'type your answer'
  },
    {
      Type: 'input',
      name: 'Color',
      message: 'What color you prefer?',
      default: 'type your answer',
  },
    {
      Type: 'list',
      name: 'Shapes',
      message: 'What shape would you like?',
      choices: ['rectangle', 'circle', 'square', 'triangle'],
  },
    {
      Type: 'input',
      name: 'shapeColor',
      message: 'what shape color would you like?',
      default: 'type your answer',
  },

  ])
  .then(({Characters, Color, Shapes, shapeColor})  => {
    let shape;
    switch(Shapes) {
        case 'rectangle':
            shape= new Rectangle();
            break; 
        case 'circle':
            shape= new Circle();
            break;
        case 'square':
            shape= new Square();
            break;
        case 'traingle':
            shape= new Triangle();
            break;
    };
    shape.setColor(shapeColor);
    const svg = new SVG();
    svg.setText(Characters, Color);
    svg.setShape(shape);
    return writeFile ('logo.svg', svg.render());
}) .then(() => {
    console.log("Generated logo.svg");
  })
  .catch((error) => {
    console.log(error);
    console.log("Oops! Something went wrong.");
  });


  };
}

module.exports=CLI;

