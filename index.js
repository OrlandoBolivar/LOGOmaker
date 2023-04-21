const inquirer = require('inquirer');
const fs = require('fs');




const generateSvg = ({Color, Shape, shapeColor}) =>
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <${Shape} cx="50" cy="50" r="40" stroke="${Color}" stroke-width="4" fill="${shapeColor}" />
    </svg>
    `

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      Type: 'input',
      name: 'Color',
      message: 'What color you prefer?',
      default: 'type your answer'
  },
    {
      Type: 'input',
      name: 'Shape',
      message: 'What shape would you like?',
      choices: ['rectangle', 'circle', 'ellipse', 'line', 'polyline', 'polygone', 'path'],
  },
    {
      Type: 'input',
      name: 'shapeColor',
      message: 'what shape color would you like?',
      default: 'type your answer'
  },

  ])
  .then((answers) => {
    const readmeMDcontent= generateSvg (answers);

    fs.writeFile('logo.svg', readmeMDcontent, (err) =>
    err ? console.log(err) : console.log('Successfully created logo.svg!')
  );
  });


