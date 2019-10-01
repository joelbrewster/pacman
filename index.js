/*jshint esversion: 6 */

const infoText = `\x1b[36m\
Valid commands are:
\x1b[32m
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
`;

const invalidMessage = `\x1b[31m
Please input a valid command.
`;

// Return value from interactive console
// https://stackoverflow.com/questions/8128578/reading-value-from-console-interactively
var stdin = process.openStdin();

console.log(infoText);

stdin.addListener('data', d => {
    'use strict';
    // note: d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()
    let input = d.toString().trim();
    handleInput(input);
});

let handleInput = (input) => {
    'use strict';

    switch (input) {

        case 'PLACE':
            console.log('place');
            break;

        case 'MOVE':
            console.log('move');
            break;

        case 'LEFT':
            console.log('left');
            break;

        case 'RIGHT':
            console.log('right');
            break;

        case 'REPORT':
            console.log('report');
            break;

        default:
            console.log(invalidMessage);
            console.log(infoText);
            break;
    }
};