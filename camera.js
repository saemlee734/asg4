class Camera {
    constructor() {
        this.eye = new Vector3([0, 0, 0]);
        this.at = new Vector3([0, 0, -1]);
        this.up = new Vector3([0, 1, 0]);
        this.fov = 90.0;
        this.viewMatrix = new Matrix4();
        this.viewMatrix.setLookAt(
            this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
            this.at.elements[0], this.at.elements[1], this.at.elements[2],
            this.up.elements[0], this.up.elements[1], this.up.elements[2]
        );
        this.projectionMatrix = new Matrix4();
        this.projectionMatrix.setPerspective(this.fov, canvas.width/canvas.height, 0.1, 1000);

        this.speed = 0.05;
        this.y = 0;
        this.xAngle = 0;
    }

    // Helper function for common movement logic
    _move(delta) {
        let f = new Vector3();
        f.set(this.at).sub(this.eye).normalize().mul(this.speed * delta);
        this.eye.add(f);
        this.at.add(f);
    }

    // Helper function for common panning logic
    _pan(alpha, axis) {
        let f = new Vector3();
        f.set(this.at).sub(this.eye);
        
        let rotationMatrix = new Matrix4();
        rotationMatrix.setRotate(alpha, axis.elements[0], axis.elements[1], axis.elements[2]);
        
        let f_prime = rotationMatrix.multiplyVector3(f).normalize();
        
        this.at.set(this.eye).add(f_prime);
    }

    moveForward() {
        this._move(1);
    }

    moveBackward() {
        this._move(-1);
    }

    moveLeft() {
        let f = new Vector3();
        f.set(this.at).sub(this.eye);

        let s = Vector3.cross(this.up, f).normalize().mul(this.speed);

        this.eye.add(s);
        this.at.add(s);
    }

    moveRight() {
        let f = new Vector3();
        f.set(this.at).sub(this.eye);

        let s = Vector3.cross(f, this.up).normalize().mul(this.speed);

        this.eye.add(s);
        this.at.add(s);
    }

    panLeft(alpha) {
        this._pan(alpha, this.up);
    }

    panRight(alpha) {
        this._pan(-alpha, this.up);
    }

    panUp(alpha) {
        if (this.at.elements[1] - this.eye.elements[1] > 0.99 && alpha < 0) return;
        if (this.at.elements[1] - this.eye.elements[1] < -0.99 && alpha > 0) return;
        let f = new Vector3();
        f.set(this.at).sub(this.eye);

        let s = Vector3.cross(f, this.up);
        this._pan(-alpha, s);
    }

    panDown(alpha) {
        let f = new Vector3();
        f.set(this.at).sub(this.eye);
        let s = Vector3.cross(f, this.up);
        this._pan(alpha, s);
    }

    mousePan(dX, dY) {
        this.panRight(dX);
    }
}
