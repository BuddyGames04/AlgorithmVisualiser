// app.js
const params = new URLSearchParams(window.location.search);
const type = params.get('type'); // e.g., "sorts"
const algo = params.get('algo'); // e.g., "bubbleSort"

// Dynamically load the algorithm module
import(`./algorithms/${type}.js`).then(module => {
    const visualizer = module[algo]; // Get the algorithm's function
    visualizer(); // Call the function to start visualization
});
