/*jshint esversion: 6 */

class Pacman {

    place(x, y, f) {
        console.log(`Placed on ${x},${y}, facing ${f}.`);
    }

    move() {
        console.log('move');
    }

    left() {
        console.log('left');
    }

    right() {
        console.log('right');
    }

    report(x, y, f) {
        console.log(`Output: ${x},${y},${f}`);
    }
}

module.exports = Pacman;
