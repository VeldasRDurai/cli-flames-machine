#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import gradient from "gradient-string";
import { createSpinner } from 'nanospinner';
import chalkAnimation from 'chalk-animation';

import { PASS, FAIL } from './results.js';

const sleep = (ms = 5000) => new Promise((r) => setTimeout(r, ms));
const print = console.log;

const start = async () => {
    const welcomeTitle = chalkAnimation.rainbow(`
        Welcome to FLAMES-MACHINE...`);
    await sleep(2000);
    welcomeTitle.stop();
}
await start();
print( "🔥".repeat(22) + '\n' );
const input  = async ( message ) => {
    const answers = await inquirer.prompt({
        type:'input', name:'name' , message
    });
    return answers.name;
}


const processor = async ( text, name ) => {
    const spinner = createSpinner('');
    spinner.update({
        text ,
        color:'green',
        stream: process.stdout,
        frames: ['|','/','-','\\'],
        interval: 100,
    });
    spinner.start();
    await sleep(1000);
    spinner.stop({ text: `Name "${name}" processed successfully\n`, mark: '☑', color: 'green' });
}

let name1 = await input('What is your name😎?');
await processor('Processing your name...', name1);

let name2 = await input('What is crush\'s name💋?');
await processor('Processing your crush\'s name...', name2);

const strToCharaObj = str => {
    let characters = {};
    str.toUpperCase().split('')
    .filter( item => item!== ' ' )
    .forEach( item => {
        if(item in characters){
            characters[item] ++;
        } else characters[item] = 1 ;
    });
    return characters;  
}

let name1Chara = strToCharaObj(name1);
let name2Chara = strToCharaObj(name2);

// print( name1Chara, '\n', name2Chara );

for(let i in name1Chara){
    if( i in name2Chara) {
        let small = name1Chara[i] > name2Chara[i] ? name2Chara[i]:name1Chara[i];
        name1Chara[i]-= small;
        name2Chara[i]-=small;
    }
}
// print( name1Chara, '\n', name2Chara );
let sum = (a,b) => a + b
const threshold = Object.values(name1Chara).reduce(sum, 0) + Object.values(name2Chara).reduce(sum, 0);
// print( threshold ) 

let num = 6;
let remaining = 0;
let order = [];
while( num > 1 ){
    let stripe = ( (threshold+num) - remaining ) % num;
    /* 
        `( threshold + num )` is done in the above statement,
        inorder to tackle a situation where the `threshold < num` and
        since `remaining` is always less than num,
        above statment will create a negative remainder.
    */
    remaining = stripe !==0 ? num - stripe : 0 ;
    stripe = stripe !== 0 ? stripe-1 : num-1 ;
    order.push( stripe ); 
    num --;
}
// print( order );
const removeChar = (str, index) => 
    str.slice(0,index) + str.slice(index+1);

let FLAMES = "FLAMES";

const confirm  = async (message) => {
    const answers = await inquirer.prompt({
        name: 'confirm',
        type: 'confirm',
        message,
        default() {
            return true;
        },
    });
    return answers.confirm;
}

// order.forEach( item => {
//     print( FLAMES );
//     print( FAIL(name1, name2, FLAMES[item] ) );
//     FLAMES = removeChar( FLAMES, item );
// });
for(let i=0; i<order.length; i++){
    print( '\n', FLAMES );
    const spinner = createSpinner('');
    spinner.update({
        text: "Cheaking...",
        color:'red',
        stream: process.stdout,
        frames: ['F','L','A','M','E','S'],
        interval: 200,
    });
    spinner.start();
    await sleep(1200);
    spinner.stop({ text: FAIL(name1, name2, FLAMES[ order[i] ] ), mark: '✖', color: 'red'});
    FLAMES = removeChar( FLAMES, order[i] );
    let res = await confirm("Continue...?");
    !res && process.exit(1);
}

print('\n\b',`${name1} and ${name2} got :`);
figlet( PASS(name1, name2, FLAMES ), {
    font: 'roman',
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
    width: 150,
    whitespaceBreak: true
}, ( err, data ) => {
    print(gradient.rainbow( data));
})