let count: number = 0;

function increment(): void {
    count++;
    render();
}

function decrement(): void {
    count--;
    render();
}

function render(): void {
    document.body.innerHTML = `
        <h1>Counter: ${count}</h1>
        <button id="inc">Increment</button>
        <button id="dec">Decrement</button>
    `;

    document.getElementById('inc')?.addEventListener('click', increment);
    document.getElementById('dec')?.addEventListener('click', decrement);
}

document.addEventListener('DOMContentLoaded', render);