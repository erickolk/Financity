const data = [
    { label: 'Janeiro', value: 500 },
    { label: 'Fevereiro', value: 750 },
    { label: 'Março', value: 1000 },
    { label: 'Abril', value: 650 },
    { label: 'Maio', value: 800 },
];

window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const chart = document.createElement('div');
        chart.classList.add('chart');

        for (let i = 0; i < data.length; i++) {
            const barContainer = document.createElement('div');
            barContainer.classList.add('bar-container');

            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = `${data[i].value / 10}px`;
            bar.setAttribute('data-label', data[i].label);

            barContainer.appendChild(bar);
            chart.appendChild(barContainer);
        }

        card.appendChild(chart);
    });
});
