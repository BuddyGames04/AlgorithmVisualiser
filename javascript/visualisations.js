export function visualizeArray(array, label = '') {
    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');
    const barWidth = canvas.width / array.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawing

    array.forEach((value, index) => {
        const barHeight = value * 20; // Scale for visibility
        ctx.fillStyle = 'blue';
        ctx.fillRect(index * barWidth, canvas.height - barHeight, barWidth - 2, barHeight);
    });

    if (label) {
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(label, 10, 20); // Label at the top left
    }
}


export function highlightCode(lineNumber) {
    const codeContainer = document.getElementById('code-container');
    const codeLines = codeContainer.querySelectorAll('pre > span');
    codeLines.forEach(line => line.classList.remove('highlight'));
    const targetLine = codeContainer.querySelector(`.line-${lineNumber}`);
    if (targetLine) targetLine.classList.add('highlight');
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
