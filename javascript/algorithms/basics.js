import { visualizeArray, highlightCode, sleep } from '../visualisations.js';

export function runningTotal(array = [1, 2, 3, 4, 5]) {
    const runningTotals = [];
    visualizeArray(array, 'Input Array'); // Visualize the initial array

    async function calculate() {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            highlightCode(3); // Highlight the loop line in the code
            sum += array[i];
            runningTotals.push(sum);
            visualizeArray(runningTotals, 'Running Total'); // Update visualization
            await sleep(500); // Delay for visualization effect
        }
    }

    calculate();
}
