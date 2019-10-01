/*jshint esversion: 6 */

const Pacman = require('./pacman.js');
let pacman = new Pacman();

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
let stdin = process.openStdin();

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
    // TODO: Get PLACE input values split
    let splitInput = input.split(' ');
    // TODO: Get place in own var
    let firstWord = splitInput[0];
    // TODO: Get other split params into own var
    splitInput[1] ? console.log("extra params") : console.log("no extra params");

    // console.log(firstWord);

    switch (input) {

        case 'PLACE':
            pacman.place();
            break;

        case 'MOVE':
            pacman.move();
            break;

        case 'LEFT':
            pacman.left();
            break;

        case 'RIGHT':
            pacman.right();
            break;

        case 'REPORT':
            pacman.report();
            break;

        default:
            console.log(invalidMessage);
            console.log(infoText);
            break;
    }
};