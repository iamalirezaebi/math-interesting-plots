# Math Interesting Plots

**Interactive mathematical visualizations that run directly in the browser — linear algebra, parametric curves, fractals, 3D surfaces and a function plotter, built with vanilla JavaScript, Canvas, SVG, WebGL (Three.js) and p5.js.**

🔗 **Live demo:** https://iamalirezaebi.github.io/math-interesting-plots/

No installation, no build step, no backend — open the link and click any module.

<!-- Add a screenshot or GIF here, e.g.:
![Overview](docs/overview.gif)
-->

---

## Why I built this

I wanted to turn mathematics I studied during my Informatik degree into something you can *see and interact with*. Each module takes a concept — eigenvectors, rolling-circle curves, iterated geometry, parametric 3D surfaces — and implements the underlying formulas directly in code, then renders the result in real time.

The project was also practice in choosing the right rendering technology for each problem: SVG for precise vector geometry, the 2D Canvas API for fast pixel drawing, p5.js for animation loops, and WebGL via Three.js for 3D scenes with tens of thousands of points.

---

## Modules

| Module | What it shows | Technology |
|---|---|---|
| **Eigenvector Visualizer** | Eigenvalues and eigenvectors of any 2×2 matrix | SVG, vanilla JS |
| **Mathematical Curves** | 9 animated curve families with live parameters | p5.js |
| **Fractal Generator** | Randomized recursive polygon fractals with reversible animation | Canvas 2D |
| **Function Plotter** | Graphing calculator for any expression in `x` | Canvas 2D, math.js |
| **3D Floral Visualization** | Parametric 3D surfaces rendered as point clouds | Three.js (WebGL) |
| **Quantum Geometry** | ~50,000 animated particles driven by a wave function, touch-enabled | Three.js, Hammer.js |

### 1. Eigenvector Visualizer — `eigenmatrix22/`
Enter the four entries of a 2×2 matrix and the app solves the characteristic equation

  det(A − λI) = 0  →  λ² − tr(A)·λ + det(A) = 0

using the quadratic formula, derives the corresponding eigenvectors, normalizes them, and draws them on an SVG coordinate grid with the unit circle for reference. Eigenvalues and eigenvectors are also shown numerically in an info panel.

### 2. Mathematical Curves — `mathematical_curves/`
A full-screen animated gallery of nine classic curve families, each implemented as its own class with `randomize()`, `display()` and `getInfo()` methods:

- **Hypocycloid** and **Epicycloid** (circles rolling inside / outside a fixed circle)
- **Spirograph** (hypotrochoid)
- **Lissajous curves**
- **Rose curves** (rhodonea, r = cos(kθ) with k = n/d)
- **Fourier series** (sum of randomized sine harmonics)
- **Phyllotaxis** (sunflower-seed pattern using the golden angle, 137.5°)
- **Moiré patterns**
- **Circle inversion**

Features: curve drawn progressively over time, adjustable animation speed, one-click randomization of parameters, live parameter readout, light/dark mode with separate colour palettes, and a floating particle background.

### 3. Fractal Generator — `fractal_generator/`
Generates a new fractal on each click by drawing hundreds of nested regular polygons, each one rotated and scaled down from the last. Parameters (number of sides, iterations, decay rate, rotation increment, colour speed) are randomized within tuned ranges, so every result is different. A bidirectional speed slider plays the rotation and colour animation forward or in reverse, or pauses it at the centre.

### 4. Function Plotter — `working_graphing/`
A small graphing calculator: type an expression such as `x^2`, `sin(x)` or `x^3 - 2*x`, and it is parsed and evaluated with **math.js**, then plotted pixel-by-pixel on a Canvas with a labelled grid and axes. Supports zoom in, zoom out, reset, and responsive resizing. Points where the expression is undefined are skipped instead of crashing the plot.

### 5. 3D Floral Visualization — `floral_visualization/`
Samples parametric surfaces x(u, v), y(u, v), z(u, v) over a grid of (u, v) values and renders the result as a coloured point cloud in a WebGL scene. Includes three equations (a sphere, a "butterfly"-style flower surface, and a tangent-distorted form), three colour schemes (rainbow, pastel, neon), auto-rotation toggle, mouse-drag rotation and scroll-to-zoom. The active equation is displayed on screen.

### 6. Quantum Geometry — `quantum_geometry/`
A particle system of roughly 50,000 points distributed in a spherical shell. Every frame, each particle's position and colour is updated from a sine-based wave function of its coordinates and time, producing a continuously shifting, breathing shape. Built mobile-first: **Hammer.js** provides touch-drag rotation and pinch-to-zoom so it works on Android and iOS as well as desktop.

---

## Technical highlights

- **Math implemented from first principles** — characteristic polynomials, parametric equations, polar curves, golden-angle spirals and inversion geometry are written directly in code rather than taken from a plotting library.
- **Several rendering approaches in one project** — SVG, Canvas 2D, p5.js and WebGL, each chosen for what the module needs.
- **Performance-aware 3D** — large point clouds stored in typed arrays (`Float32Array`) and `BufferGeometry`, updated in place each frame.
- **Object-oriented design** — the curves module uses a common interface across nine curve classes, so new curves can be added without touching the animation loop.
- **Responsive and touch-friendly** — full-screen canvases resize with the window; the 3D particle module supports touch gestures.
- **Zero-dependency deployment** — pure static files hosted on GitHub Pages; external libraries are loaded from a CDN.

---

## Tech stack

`HTML5` · `CSS3` · `JavaScript (ES6+)` · `SVG` · `Canvas 2D API` · `WebGL / Three.js` · `p5.js` · `math.js` · `Hammer.js` · `GitHub Pages`

---

## Project structure

```
math-interesting-plots/
├── index.html                  # Landing page linking to all modules
├── styles.css                  # Landing page styling
├── script.js                   # Landing page button interactions
├── eigenmatrix22/              # Eigenvector visualizer (SVG)
├── mathematical_curves/        # Animated curve gallery (p5.js)
├── fractal_generator/          # Polygon fractal generator (Canvas)
├── working_graphing/           # Function plotter (Canvas + math.js)
├── floral_visualization/       # Parametric 3D surfaces (Three.js)
└── quantum_geometry/           # Animated particle system (Three.js + Hammer.js)
```

Each module is a single self-contained `index.html`, so any one of them can be opened, studied or reused on its own.

---

## Run locally

```bash
git clone https://github.com/iamalirezaebi/math-interesting-plots.git
cd math-interesting-plots
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly in a browser also works. An internet connection is needed for the CDN-hosted libraries.

---

## Roadmap

- Handle complex eigenvalues (rotation matrices) and animate the matrix transformation of the grid in the eigenvector module
- Pan by dragging and plot multiple functions at once in the function plotter
- Export the current visualization as PNG
- Shared navigation bar so every module links back to the home page

---

## Credits

Designed and developed by **Alireza Ebrahimi** ([@iamalirezaebi](https://github.com/iamalirezaebi)).
The Mathematical Curves module was further iterated on with **@clhmusic**.
