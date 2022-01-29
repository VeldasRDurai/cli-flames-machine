import chalk from 'chalk';

// Visit : https://github.com/chalk/chalk

console.log( "\t" + chalk.blue.bgWhite(" Hello Gooys...! I'm Veldas R Durai :) ") );
console.log( "\t" + chalk.blue.bgWhite( "-*-".repeat(13) ) );

console.log(chalk.blue('Hello world!'));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(223, 45, 67).bgWhite.underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'))