import inquirer from "inquirer";

// visit : https://github.com/SBoudrias/Inquirer.js/

// 1. Type === input
const askName  = async () => {
    const answers = await inquirer.prompt({
        name: 'username',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'User';
        },
    });
    return answers.username;
}

let name = await askName();
console.log( "Your sweet name is :", name );

// 1. Type === list
const askAge  = async () => {
    const answers2 = await inquirer.prompt({
        name: 'age',
        type: 'list',
        message: 'Choose is your age ?',
        choices: [ 19, 20, 21, 22, 23, 24, 25 ],
        default() {
            return 2; // index of option in choices array
        },
    });
    return answers2.age;
}
let age = await askAge();
console.log( "You are ", age , " years old" );