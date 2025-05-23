# Disco Dancing Bunny Club 🎉🐰

This WebGL project renders a fully interactive 3D disco environment featuring a dancing bunny, dynamic lighting, and camera navigation controls. Built for CSE160 or equivalent computer graphics coursework.

## 📦 Files

- `asg4.html` – Main HTML file with styled UI and canvas setup
- `asg4.js` – Main application logic, animation loop, lighting, bunny rendering
- `camera.js` – Camera class for first-person navigation
- `world.js` – Block world map system with place/remove capabilities

## 🕹️ Controls

### 🎮 Movement
- `W`/`S` – Move forward/backward
- `A`/`D` – Move left/right
- `Q`/`E` – Pan left/right
- Mouse drag – Look around

### 💡 Lighting
- **All Lights On/Off** – Toggle general lighting
- **Spotlight On/Off** – Toggle focused light on bunny
- Adjust light position and color using sliders and pickers

### 🎨 Effects
- Toggle surface normals visualization
- Set ambient, specular, and diffuse colors dynamically

## 🪩 Features

- Animated bunny with rhythmic leg and head motion
- Real-time lighting and spotlight with phong shading
- Interactive camera system with WASD and mouse look
- Skybox and environment block rendering (voxel-style)
- Textured disco ball with dynamic rotation
- Interactive sliders and color pickers for lighting control

## 🧑‍💻 Author

Sabrina Lee  
saemlee@ucsc.edu

## 📝 Notes

- Requires WebGL-capable browser
- Texture images are assumed to be in `images/` directory relative to the project
- Pointer lock is used for immersive camera control

## 🔧 Setup

1. Ensure `lib/` folder contains:
   - `webgl-utils.js`, `cuon-utils.js`, `cuon-matrix-cse160.js`, and all shape classes (e.g., `cube.js`, `sphere.js`)
2. Ensure `images/` folder contains:
   - `mirror.jpg`, `club.jpg`, `floor.jpg`, `stone.jpg`, etc.
3. Open `asg4.html` in a browser that supports WebGL

Enjoy the dance party!
