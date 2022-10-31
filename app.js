//====================V3-933========commenting out per module direction=========================================

import inquirer from 'inquirer';

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Enter your name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please Enter your Github username!')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some info:'

        }
    ]);
};
// promptUser().then(answers => console.log(answers));

///Add project information
const promptProject = portfolioData => {
    //if there is no projects arrray property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(
        `
        ==================
        Add a New Project
        ==================
        `
    );
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please Enter your project name!')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please Enter your project description!')
                    return false;
                }
            }

        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build the project with?Check all that applies.',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']

        },
        {
            type: 'input',
            name: 'link',
            message: 'insert the github link for your project',
            validate: projectlink => {
                if (projectlink) {
                    return true;
                } else {
                    console.log('Please Enter your github link!')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature the project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'would you like to enter another project?',
            default: false
        }
    ])
        .then(projectData => {
            portfolioData.projects.push(projectData);

            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};
// promptProject().then(ProjectAnswers => console.log(projectAnswers));
promptUser()
    // .then(answers => console.log(answers))
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    })
    // .then(projectAnswers => console.log(projectAnswers));


    //======================================================================================
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