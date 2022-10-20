//====================V3-933========commenting out per module direction=========================================

import inquirer from 'inquirer';

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
    .then(answers => console.log(answers));
// const promptUser = () => {

//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         }
//     ]);
// };

// promptUser().then(answers => console.log(answers));
//=========================================================================

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(realName, github) //to avoid deprecated warning

// //write index file
// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err); //will stop running code
//   console.log('Portfolio complete! Checkout index.html to see the output!');
// });


//=====================================v2========================
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(realName, github) //to avoid deprecated warning
// // profileDataArgs = process.argv.slice(2);
// // const [name, github] = profileDataArgs;

// //write index file
// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err); //will stop running code
//   console.log('Portfolio complete! Checkout index.html to see the output!');
// });

//==========================================================
// const printProfileData=(profileDataArr)=> {
//     for (let i=0; i< profileDataArr.length; i++) {
//         console.log(profileDataArr[i])
//     }

//     console.log("=================================")

//     profileDataArr.forEach(profileItem => console.log(profileItem));
//     });
// };

// printProfileData(profileDataArgs);

// =========================================