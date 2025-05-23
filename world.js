class World {
    constructor() {
        this.blocks = [];
        this.width = 32;
        this.height = 32;
        this.depth = 32;
        this.world = [
            [1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,2,1,],
            [2,2,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,2,1,],
            [2,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,3,2,1,],
            [3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,2,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,2,2,2,2,1,2,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,2,2,2,2,2,2,1,2,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,2,3,3,3,2,3,3,2,2,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,2,3,4,4,3,3,2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,2,3,3,4,4,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,2,2,3,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
            [1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
        ];
        for (let x = 0; x < this.width; x++) {
            this.blocks.push([]);
            for (let z = 0; z < this.depth; z++) {
                this.blocks[x].push([]);
                for (let y = 0; y < this.height; y++) {
                    this.blocks[x][z].push(0);
                };
            };
        };
        this.blocks[4][4][4] = 1; 
        this.blocks[4][4][5] = 1; 
    }

    // Helper function to update blocks based on direction and action
    _modifyBlock(x, y, z, value) {
        if (0 <= x && x < this.width && 0 <= y && y < this.height && 0 <= z && z < this.depth) {
            this.blocks[x][z][y] = value;
            console.log(`Block ${value === 1 ? 'placed' : 'removed'} at: ${x}, ${y}, ${z}`);
        }
    }

    // Common function to determine the direction for placing/removing blocks
    _processDirection(dX, dZ, x_eye, y_eye, z_eye, value) {
        const directions = [
            [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0],
            [1, 1, 0], [1, -1, 0], [-1, 1, 0], [-1, -1, 0]
        ];

        for (let dir of directions) {
            if (dX === dir[0] && dZ === dir[1]) {
                this._modifyBlock(x_eye + dir[0], y_eye, z_eye + dir[2], value);
            }
        }
    }

    placeBlock() {
        const x_eye = Math.floor((camera.eye.elements[0] + 4) * 4);
        const y_eye = Math.floor((camera.eye.elements[1] + 1) * 4);
        const z_eye = Math.floor((camera.eye.elements[2] + 4) * 4);
        const x_at = Math.floor((camera.at.elements[0] + 4) * 4);
        const y_at = Math.floor((camera.at.elements[1] + 1) * 4);
        const z_at = Math.floor((camera.at.elements[2] + 4) * 4);

        const dX = x_at - x_eye;
        const dZ = z_at - z_eye;

        this._processDirection(dX, dZ, x_eye, y_eye, z_eye, 1);
    }

    removeBlock() {
        const x_eye = Math.floor((camera.eye.elements[0] + 4) * 4);
        const y_eye = Math.floor((camera.eye.elements[1] + 1) * 4);
        const z_eye = Math.floor((camera.eye.elements[2] + 4) * 4);
        const x_at = Math.floor((camera.at.elements[0] + 4) * 4);
        const y_at = Math.floor((camera.at.elements[1] + 1) * 4);
        const z_at = Math.floor((camera.at.elements[2] + 4) * 4);

        const dX = x_at - x_eye;
        const dZ = z_at - z_eye;

        this._processDirection(dX, dZ, x_eye, y_eye, z_eye, 0);
    }

    drawMap() {
        let cube = new Cube();
        cube.textureOption = [GRASS_SIDE, GRASS_SIDE, GRASS_SIDE, GRASS_SIDE, FLOOR, GRASS_BOTTOM];
        cube.color = [1, 0, 0, 1];
        for (let x = 0; x < this.width; x++) {
            for (let z = 0; z < this.depth; z++) {
                let y = this.world[x][z];
                cube.matrix.setTranslate(x * 0.25 - 4, y * 0.25 - 1, z * 0.25 - 4);
                cube.matrix.scale(0.25, 0.25, 0.25);
                cube.render();
            }
        }
    }

    drawBlocks() {
        let cube = new Cube();
        cube.textureOption = [PLANK, PLANK, PLANK, PLANK, PLANK, PLANK];
        for (let x = 0; x < this.width; x++) {
            for (let z = 0; z < this.depth; z++) {
                for (let y = 0; y < this.height; y++) {
                    if (this.blocks[x][z][y] === 1) {
                        cube.matrix.setTranslate(x * 0.25 - 4, y * 0.25 - 1, z * 0.25 - 4);
                        cube.matrix.scale(0.25, 0.25, 0.25);
                        cube.render();
                    }
                }
            }
        }
    }
}