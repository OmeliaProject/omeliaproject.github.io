window.onload = function () {
    const canvas = document.getElementById('speech-piechart');
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [
                        7,
                        38,
                        55
                    ],
                    backgroundColor: [
                        '#E5E5E5',
                        '#CF7500',
                        '#F0A500'
                    ],
                    borderColor: [
                        '#E5E5E5',
                        '#CF7500',
                        '#F0A500'
                    ],
                    borderWidth: 0,
                    hoverBorderWidth: 4
                }
            ],
            labels: [
                'Verbal pur',
                'Para-verbal',
                'Non-verbal'
            ]
        },
        options: {
            legend: {
                position: 'bottom'
            }
        }
    });
}

