const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Total Earned',
            backgroundColor: 'rgba(9, 152, 163, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            data: [0, 50, 100, 200, 150, 180, 200, 300, 350, 250, 400, 450],
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        borderWidth: 1,
        fill: true,
        plugins: {
            legend: false,
        },
        scales: {
            x: {
                display: true,
                grid: {
                    color: 'rgba(10, 150, 163, 0.1)',
                },
            },
            y: {
                display: true,
                grid: {
                    color: 'rgba(10, 150, 163, 0.1)',
                },
            },
        },
    },
};

var myChart = new Chart(document.getElementById('myChart'), config);
