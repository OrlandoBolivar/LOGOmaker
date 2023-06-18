const { Rectangle, Square, Triangle, Circle } = require('./shapes')

const inquirer = require('inquirer');

const { writeFile} = require('fs/promises')

const SVG = require('./svg');


class CLI {
    run() {

 return inquirer

  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'Characters',
        message: 'Enter up to three characters?',
        default: 'type your answer'
  },
    {
      type: 'list',
      name: 'Color',
      message: 'What color you prefer?',
      choices: ['blue', 'red', 'yellow', 'black'],
  },
    {
      type: 'list',
      name: 'Shapes',
      message: 'What shape would you like?',
      choices: ['rectangle', 'circle', 'square', 'triangle'],
  },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'what shape color would you like?',
      choices: ['orange', 'purple', 'green', 'brown'],
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
        case 'triangle':
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

