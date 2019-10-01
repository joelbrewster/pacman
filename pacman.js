/*jshint esversion: 6 */
const mazeHeight = 5;
const mazeWidth = 5;

const edgesMessage = `
You are about to go off the map. Turn around.
`;

class Pacman {
    place(x, y, f) {
        if (x > mazeWidth || x < 1 || y > mazeHeight || y < 1) {
            console.log('Pacman is out of the maze, resetting to: 1,1,NORTH');
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
                if (this.x < mazeHeight) {
                    this.x++;
                } else {
                    console.log(edgesMessage);
                }
                break;

            case 'SOUTH':
                if (this.x > 1) {
                    this.x--;
                } else {
                    console.log(edgesMessage);
                }
                break;

            case 'EAST':
                if (this.y < mazeWidth) {
                    this.y++;
                } else {
                    console.log(edgesMessage);
                }
                break;

            case 'WEST':
                if (this.y > 1) {
                    this.y--;
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
        console.log(`Output: ${this.x},${this.y},${this.f}`);
    }
}

module.exports = Pacman;
