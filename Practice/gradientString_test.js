import gradient from "gradient-string";

// visit : https://github.com/bokub/gradient-string

let duck = gradient('white', 'yellow').multiline([
    "  __",
    "<(o )___",
    " ( ._> /",
    "  `---'",
].join('\n'));
console.log(duck);

// Works with aliases
console.log( gradient.atlas.multiline('Multi line\nstring') );

// Works with advanced options
console.log( gradient('cyan', 'pink').multiline('Multi line\nstring', {interpolation: 'hsv'}) );

const redToGreen = gradient('red', 'green');
const str = '■'.repeat(48);

// Standard RGB gradient
console.log(redToGreen(str)); 

// Short HSV gradient: red -> yellow -> green
console.log(redToGreen(str, {interpolation: 'hsv'}));

// Long HSV gradient: red -> magenta -> blue -> cyan -> green
console.log(redToGreen(str, {interpolation: 'hsv', hsvSpin: 'long'}));