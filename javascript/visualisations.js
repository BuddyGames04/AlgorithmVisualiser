// visualizations.js
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');

export function visualizeArray(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / array.length;
    array.forEach((value, index) => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(index * barWidth, canvas.height - value, barWidth - 2, value);
    });
}

// visualizations.js
export function highlightCode(lineNumber) {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach(line => line.classList.remove('highlight'));
    document.querySelector(`.line-${lineNumber}`).classList.add('highlight');
}
