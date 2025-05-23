class Cube {
  constructor() {
    this.type = 'cube';
    this.color = [0.5, 0.5, 0.5, 0.5];
    this.matrix = new Matrix4();
    this.vbuffer = null;
    this.uvbuffer = null;
    this.nbuffer = null;
    this.textureOption = [0, 0, 0, 0, 0, 0];
  }

  render() {
    if (this.vbuffer === null) {
      this.vbuffer = gl.createBuffer();
      if (!this.vbuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
    }

    if (this.uvbuffer === null) {
      this.uvbuffer = gl.createBuffer();
      if (!this.uvbuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
    }

    if (this.nbuffer === null) {
      this.nbuffer = gl.createBuffer();
      if (!this.nbuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
    }

    var rgba = this.color;
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    gl.uniform1i(u_textureOption, this.textureOption[0]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0],
      [0, 0, 1, 1, 1, 0],
      [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0],
      [0, 0, 0, 1, 1, 1],
      [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0]
    );

    gl.uniform1i(u_textureOption, this.textureOption[1]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
      [0, 0, 1, 1, 1, 0],
      [0,0,-1,0,0,-1,0,0,-1]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0],
      [0, 0, 0, 1, 1, 1],
      [0,0,-1,0,0,-1,0,0,-1]
    );

    gl.uniform1i(u_textureOption, this.textureOption[2]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0],
      [0, 0, 1, 1, 1, 0],
      [-1, 0, 0, -1, 0, 0, -1, 0, 0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0],
      [0, 0, 0, 1, 1, 1],
      [-1, 0, 0, -1, 0, 0, -1, 0, 0]
    );

    gl.uniform1i(u_textureOption, this.textureOption[3]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0],
      [0, 0, 1, 1, 1, 0],
      [1, 0, 0, 1, 0, 0, 1, 0, 0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0],
      [0, 0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1, 0, 0]
    );

    gl.uniform1i(u_textureOption, this.textureOption[4]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0],
      [0, 0, 1, 1, 1, 0],
      [0, -1, 0, 0, -1, 0, 0, -1, 0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      [0, 0, 0, 1, 1, 1],
      [0, -1, 0, 0, -1, 0, 0, -1, 0]
    );

    gl.uniform1i(u_textureOption, this.textureOption[5]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0],
      [0, 0, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],
      [0, 0, 0, 1, 1, 1],
      [0, 1, 0, 0, 1, 0, 0, 1, 0]
    );
  }

  renderSkybox() {
    if (this.vbuffer === null) {
      this.vbuffer = gl.createBuffer();
      if (!this.vbuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
    }

    if (this.uvbuffer === null) {
      this.uvbuffer = gl.createBuffer();
      if (!this.uvbuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
    }

    if (this.nbuffer === null) {
      this.nbuffer = gl.createBuffer();
      if (!this.nbuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
    }

    var rgba = this.color;
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    gl.uniform1i(u_textureOption, this.textureOption);
    gl.uniform1i(u_textureOption, this.textureOption[0]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0],
      [0, 0, 1, 1, 1, 0],
      [0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0],
      [0, 0, 0, 1, 1, 1],
      [0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0]
    );

    gl.uniform1i(u_textureOption, this.textureOption[1]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0],
      [0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0, 1]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 0, 1, 0, 0, 1]
    );

    gl.uniform1i(u_textureOption, this.textureOption[2]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0],
      [0, 0, 1, 1, 1, 0],
      [1, 0, 0, 1, 0, 0, 1, 0, 0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0],
      [0, 0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1, 0, 0]
    );

    gl.uniform1i(u_textureOption, this.textureOption[3]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
      [0, 0, 1, 1, 1, 0],
      [-1, 0, 0, -1, 0, 0, -1, 0, 0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0],
      [0, 0, 0, 1, 1, 1],
      [-1, 0, 0, -1, 0, 0, -1, 0, 0]
    );

    gl.uniform1i(u_textureOption, this.textureOption[4]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0],
      [0, 0, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0],
      [0, 0, 0, 1, 1, 1],
      [0, 1, 0, 0, 1, 0, 0, 1, 0]
    );

    gl.uniform1i(u_textureOption, this.textureOption[5]);
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0],
      [0, 0, 1, 1, 1, 0],
      [0,-1,0, 0,-1,0, 0,-1,0]
    );
    drawTriangle3DUVNormal(
      this.vbuffer,
      this.uvbuffer,
      this.nbuffer,
      [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0],
      [0, 0, 0, 1, 1, 1],
      [0,-1,0, 0,-1,0, 0,-1,0]
    );
  }

  renderFast() {
    let rgba = this.color;
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    let allVerts = []

    gl.uniform1i(u_textureOption, 0);
    allVerts = allVerts.concat([0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0]);
    allVerts = allVerts.concat([0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0]);

    allVerts = allVerts.concat([1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0]);
    allVerts = allVerts.concat([1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0]);

    allVerts = allVerts.concat([1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0]);
    allVerts = allVerts.concat([1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0]);

    allVerts = allVerts.concat([0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0]);
    allVerts = allVerts.concat([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0]);

    allVerts = allVerts.concat([0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0]);
    allVerts = allVerts.concat([0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0]);

    allVerts = allVerts.concat([0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0]);
    allVerts = allVerts.concat([0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0]);

    drawTriangle3D(allVerts);
  }

}