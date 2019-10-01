/*jshint esversion: 6 */

class Pacman {

    place(x, y, f) {
        this.x = x;
        this.y = y;
        this.f = f;
        console.log(`Placed on ${x},${y}, facing ${f}.`);
    }

    move() {
        console.log('move');
    }

    left() {
        switch(this.f) {
            case 'NORTH':
                this.f = 'WEST';
                break;

            case 'SOUTH':
                this.f = 'EAST';
                break;

            case 'EAST':
                this.f = 'NORTH';
                break;

            case 'WEST':
                this.f = 'SOUTH';
                break;
        }
    }

    right() {
        switch(this.f) {
            case 'NORTH':
                this.f = 'EAST';
                break;

            case 'SOUTH':
                this.f = 'WEST';
                break;

            case 'EAST':
                this.f = 'SOUTH';
                break;

            case 'WEST':
                this.f = 'NORTH';
                break;
        }
    }

    report(x, y, f) {
        console.log(`Output: ${this.x},${this.y},${this.f}`);
    }
}

module.exports = Pacman;
