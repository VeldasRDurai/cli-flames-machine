import { createSpinner } from 'nanospinner';

// visit : https://github.com/usmanyunusov/nanospinner

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const spinner = createSpinner('The spinner is running');

spinner.start();
await sleep();
spinner.stop({ text: 'Done!', mark: ':O', color: 'magenta' });
// spinner.clear();
await sleep(500);
spinner.start();
await sleep(100);
spinner.update({
    text: 'Updated spinner',
    color: 'green',
    stream: process.stdout,
    frames: ['|','/','-','\\'],
    interval: 100,
});
await sleep(1000);
spinner.stop();
spinner.update({
    text: 'Downloading...',
    color: 'yellow',
    stream: process.stdout,
    frames: ['#','##','###','####','#####','######','#######','########','#########','##########',],
    interval: 100,
});
spinner.start();
await sleep(800);
spinner.success({ text: 'Successful!', mark:'☑', color: 'green'});