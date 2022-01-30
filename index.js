#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import chalkAnimation from 'chalk-animation';

const sleep = (ms = 5000) => new Promise((r) => setTimeout(r, ms));
const print = console.log;

const start = async () => {
    const welcomeTitle = chalkAnimation.rainbow(`
        Welcome to FLAMES-MACHINE...
    `);
    await sleep(1000);
    welcomeTitle.stop();
}
// await start();

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
        // frames: ['|','/','-','\\'],
        interval: 100,
    });
    spinner.start();
    await sleep(1000);
    spinner.stop({ text: `\tName "${name}" processed successfully\t`, mark: '☑', color: 'green' });
}

let name1 = await input('What is your name😎?');
await processor('Processing your name...', name1);

let name2 = await input('What is crush\'s name💋?');
await processor('Processing your crush\'s name...', name2);

print( '\n' );
// let commonLetters = 0;
// name1.toUpperCase().split('').forEach( item1 => 
//     name2.toUpperCase().split('').some( item2 => 
//         item1 === item2    
//     ) && commonLetters ++
// );
// print(commonLetters);

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

// let name1Characters = {};
// name1.toUpperCase().split('').forEach( item => {
//     if(item in name1Characters){
//         name1Characters[item] ++;
//     } else name1Characters[item] = 1 ;
// });

// let name2Characters = {};
// name2.toUpperCase().split('').forEach( item => {
//     if(item in name2Characters){
//         name2Characters[item] ++;
//     } else name2Characters[item] = 1 ;
// });

let name1Chara = strToCharaObj(name1);
let name2Chara = strToCharaObj(name2);

print( name1Chara, '\n', name2Chara );

for(let i in name1Chara){
    if( i in name2Chara) {
        let small = name1Chara[i] > name2Chara[i] ? name2Chara[i]:name1Chara[i];
        name1Chara[i]-= small;
        name2Chara[i]-=small;
    }
}
print( name1Chara, '\n', name2Chara );
let sum = (a,b) => a + b
const threshold = Object.values(name1Chara).reduce(sum, 0) + Object.values(name2Chara).reduce(sum, 0);
print( threshold ) 

let num = 6;
let remaining = 0;
let order = [];
while( num > 1 ){
    if( threshold > num ){
        let stripe = (threshold - remaining ) % num;
        remaining = stripe !==0 ? num - stripe : 0 ;
        stripe = stripe !== 0 ? stripe-1 : num-1 ; 
        order.push( stripe );
    // } else {
            
    }
    num --;
}
print( order );
const removeChar = (str, index) => 
    str.slice(0,index) + str.slice(index+1);

let FLAMES = "FLAMES";
order.forEach( item => {
    FLAMES = removeChar( FLAMES, item );
    print( FLAMES );
});