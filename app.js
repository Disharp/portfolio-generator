const fs = require('fs');
const generatePage = require('./src/page-template.js');


profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

//write index file
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err); //will stop running code
  console.log('Portfolio complete! Checkout index.html to see the output!');
});

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