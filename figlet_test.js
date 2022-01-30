import figlet from 'figlet';

// visit : https://www.npmjs.com/package/figlet

figlet("Hello World...!", {
        font: 'epic',
            // For different font types : http://www.figlet.org/examples.html
        horizontalLayout: 'fitted', // "default", "full", "fitted", "controlled smushing", "universal smushing".
        verticalLayout: 'fitted',
        width: 80,
        whitespaceBreak: true
    }, ( err, data ) => {
        console.log( data );
})