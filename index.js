const inquirer = require('inquirer');
const fs = require('fs');


const generateSvg = ({Color, Shape, shapeColor}) =>
    `
    <svg width="100" height="100">
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
      default: 'type your answer'
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


