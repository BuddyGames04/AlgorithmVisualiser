// app.js
// app.js
const params = new URLSearchParams(window.location.search);
const type = params.get('type'); // e.g., "basics"
const algo = params.get('algo'); // e.g., "runningTotal"

// Ensure the parameters are valid
// Dynamically load the algorithm module
import(`./algorithms/${type}.js`).then(module => {
    console.log("Loaded module:", module);
    visualizer = module[algo];
    if (!visualizer) {
        console.error(`Algorithm '${algo}' not found in module '${type}.js'`);
    }
    console.log("Visualizer function loaded:", visualizer);
}).catch(error => {
    console.error("Failed to load algorithm module:", error);
});

// Redirect to a default algorithm if type or algo is missing
if (!type || !algo) {
    window.location.href = "index.html"; // Redirect back to index
}

// Map algorithm names to readable titles
const algorithmTitles = {
    runningTotal: "Running Total",
    countOccurrences: "Count Occurrences",
    findMax: "Find Maximum",
    bubbleSort: "Bubble Sort",
    // Add other algorithms here
};

// Set the title dynamically
const titleElement = document.getElementById('algorithm-title');
if (titleElement) {
    titleElement.textContent = algorithmTitles[algo] || "Algorithm Visualizer";
}

// Define the visualizer function in global scope
let visualizer = null;

// Dynamically load the algorithm module
import(`./algorithms/${type}.js`).then(module => {
    console.log("Loaded module:", module);
    visualizer = module[algo]; // Assign the algorithm's function to the global variable
    console.log("Visualizer function loaded:", visualizer);
}).catch(error => {
    console.error("Failed to load algorithm module:", error);
});

// Start with the default array
function startDefault() {
    console.log("Starting with default array...");
    if (visualizer) {
        visualizer(); // Call the function with the default array
    } else {
        console.error("Visualizer function not loaded yet.");
    }
}

// Start with a user-specified array
function startWithInput() {
    const arrayInput = document.getElementById('array-input');
    const inputArray = arrayInput.value.split(',').map(Number); // Convert input to array of numbers
    console.log("Starting with custom array:", inputArray);
    if (visualizer) {
        visualizer(inputArray); // Call the function with the custom array
    } else {
        console.error("Visualizer function not loaded yet.");
    }
}
console.log("Type parameter:", type);
console.log("Algorithm parameter:", algo);
console.log("Constructed module path:", `./algorithms/${type}.js`);

// Attach the functions to the window object for global access
window.startDefault = startDefault;
window.startWithInput = startWithInput;
