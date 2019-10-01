/*jshint esversion: 6 */
const mazeHeight = 5;
const mazeWidth = 5;

const edgesMessage = `\x1b[31m
I can't do that, I am about to go off the map!
\x1b[36m\Try turning:\x1b[32m LEFT\x1b[0m or\x1b[32m RIGHT\x1b[0m.\x1b[0m
`;

class Pacman {
    place(x, y, f) {
        if (x >= mazeWidth || x < 0 || y >= mazeHeight || y < 0) {
            console.log('Pacman is out of the maze, resetting to: 0,0,NORTH');
            this.x = 1;
            this.y = 1;
            this.f = 'NORTH';
        } else {
            this.x = x;
            this.y = y;
            this.f = f;
        }
    }

    move() {
        switch (this.x, this.y, this.f) {
            case 'NORTH':
                if (this.y < mazeHeight-1) {
                    this.y++;
                } else {
                    console.log(edgesMessage);
                }
                break;

            case 'SOUTH':
                if (this.y > 0) {
                    this.y--;
                } else {
                    console.log(edgesMessage);
                }
                break;

            case 'EAST':
                if (this.x < mazeWidth-1) {
                    this.x++;
                } else {
                    console.log(edgesMessage);
                }
                break;

            case 'WEST':
                if (this.x > 0) {
                    this.x--;
                } else {
                    console.log(edgesMessage);
                }
                break;
        }
        return true;
    }

    left() {
        switch (this.f) {
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
        switch (this.f) {
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

    report() {
        console.log(`\x1b[4m\x1b[34mOutput: ${this.x},${this.y},${this.f}\x1b[0m`);
    }
}

module.exports = Pacman;
