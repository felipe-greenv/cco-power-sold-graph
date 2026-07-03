const monthlyData = [
    { month: "Janeiro", total: 39507 },
    { month: "Fevereiro", total: 37541 },
    { month: "Março", total: 48517 },
    { month: "Abril", total: 54086 },
    { month: "Maio", total: 55557 },
    { month: "Junho", total: 56828 },
    { month: "Julho", total: 0 },
    { month: "Agosto", total: 0 },
    { month: "Setembro", total: 0 },
    { month: "Outubro", total: 0 },
    { month: "Novembro", total: 0 },
    { month: "Dezembro", total: 0 }
];

function createMonthlyChart() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    document.getElementById("chartTitle").innerText =
        `Energia Fornecida em MWh - ${currentYear}`;

    const labels = monthNames;
    const consumoMensal = monthNames.map((month, index) => {
        if (index >= currentMonthIndex) {
            return 0;
        }

        const matchingMonth = monthlyData.find((item) => item.month === month);
        return matchingMonth ? matchingMonth.total / 1000 : 0;
    });

    const totalFechado = consumoMensal.reduce((total, value) => total + value, 0);
    const mesesFechados = consumoMensal.filter((value) => value > 0);
    const mediaMensalYtd = mesesFechados.length
        ? totalFechado / mesesFechados.length
        : 0;

    const formatMWh = (value) => `${Number(value).toFixed(3).replace(/\.0+$/, "")} MWh`;

    document.getElementById("chartTotals").innerHTML = `
        <span>Total fechado: <strong>${formatMWh(totalFechado)}</strong></span>
        <span>Média Mensal (YTD): <strong>${formatMWh(mediaMensalYtd)}</strong></span>
        <span>Meta: <strong>150 MWh</strong></span>
    `;

    const ctx = document.getElementById("monthlyChart");
    const container = ctx.parentElement;
    ctx.width = container.clientWidth;
    ctx.height = container.clientHeight;

    if (window.chart) {
        window.chart.destroy();
    }

    window.chart = new Chart(ctx, {
        type: "line",
        plugins: [ChartDataLabels],
        data: {
            labels,
            datasets: [
                {
                    label: "Energia fornecida (MWh)",
                    data: consumoMensal,
                    borderColor: "#00ff66",
                    backgroundColor: function (context) {
                        const chart = context.chart;
                        const { ctx, chartArea } = chart;
                        if (!chartArea) {
                            return null;
                        }

                        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                        gradient.addColorStop(0, "rgba(66, 188, 88, 0.85)");
                        gradient.addColorStop(1, "rgba(66, 188, 88, 0.12)");
                        return gradient;
                    },
                    fill: true,
                    borderWidth: 2.5,
                    tension: 0.25,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: "#00ff66",
                    pointBorderColor: "#00ff66",
                    datalabels: {
                        anchor: "end",
                        align: "top",
                        offset: 6,
                        color: "#ffffff",
                        font: {
                            weight: "bold",
                            size: 13
                        },
                        formatter: (value) => value > 0 ? formatMWh(value) : ""
                    }
                },
                {
                    label: "Meta mensal",
                    data: Array(labels.length).fill(150),
                    borderColor: "rgba(255, 90, 90, 0.9)",
                    borderWidth: 2,
                    borderDash: [6, 6],
                    fill: false,
                    pointRadius: 0,
                    tension: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: {
                    display: true
                }
            },
            scales: {
                x: {
                    ticks: {
                        autoSkip: false,
                        color: "#ffffff",
                        font: { size: 16 }
                    },
                    grid: { color: "rgba(255,255,255,0.08)" }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ffffff",
                        font: { size: 14 },
                        callback: (value) => `${value.toLocaleString("pt-BR")}`
                    },
                    grid: { color: "rgba(255,255,255,0.08)" }
                }
            }
        }
    });
}

createMonthlyChart();
