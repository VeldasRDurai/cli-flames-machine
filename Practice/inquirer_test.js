import inquirer from "inquirer";

// visit : https://github.com/SBoudrias/Inquirer.js/
// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts

// // 1. Type === input
// const askName  = async () => {
//     const answers = await inquirer.prompt({
//         name: 'username',
//         type: 'input',
//         message: 'What is your name?',
//         default() {
//             return 'User';
//         },
//     });
//     return answers.username;
// }

// let name = await askName();
// console.log( "Your sweet name is :", name );

// // 1. Type === list
// const askAge  = async () => {
//     const answers2 = await inquirer.prompt({
//         name: 'age',
//         type: 'list',
//         message: 'Choose is your age ?',
//         choices: [ 19, 20, 21, 22, 23, 24, 25 ],
//         default() {
//             return 2; // index of option in choices array
//         },
//     });
//     return answers2.age;
// }
// let age = await askAge();
// console.log( "You are ", age , " years old" );
// // ---------------------------------------------------------------------------------------

// inquirer
//   .prompt([
//     {
//       name: 'faveReptile',
//       message: 'What is your favorite reptile?',
//       default: 'Alligators'
//     },
//     {
//       name: 'faveColor',
//       message: 'What is your favorite color?',
//       default: '#008f68'
//     },
//   ])
//   .then(answers => {
//     console.info('Answers:', answers);
//   });


// inquirer
//   .prompt([
//     {
//       type: 'rawlist',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: ['alligator', 'crocodile'],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });

// inquirer
//   .prompt([
//     {
//       type: 'expand',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: [
//         {
//           key: 'a',
//           value: 'alligator',
//         },
//         {
//           key: 'c',
//           value: 'crocodile',
//         },
//       ],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });

// inquirer
//   .prompt([
//     {
//       type: 'checkbox',
//       name: 'reptiles',
//       message: 'Which reptiles do you love?',
//       choices: [
//         'Alligators', 'Snakes', 'Turtles', 'Lizards',
//       ],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptiles);
//   });

// inquirer
//   .prompt([
//     {
//       type: 'password',
//       name: 'secret',
//       message: 'Tell me a secret',
//     },
//   ])
//   .then(answers => {
//     // Displaying the password for debug purposes only.
//     console.info('Answer:', answers.secret);
//   });

// inquirer
//   .prompt([
//     {
//       type: 'editor',
//       name: 'story',
//       message: 'Tell me a story, a really long one!',
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.story);
//   });

inquirer
  .prompt([
    {
      name: "wants_pizza",
      type: "confirm",
      message: "Do you want a free pizza?",
    },
  ])
  .then((answer) => {
    console.log(answer.wants_pizza);
  });