// Dados de exemplo em kWh
const data = [
    { Data: "2026-01-01", total_kWh: 606 },
    { Data: "2026-01-02", total_kWh: 1198 },
    { Data: "2026-01-03", total_kWh: 1655 },
    { Data: "2026-01-04", total_kWh: 1392 },
    { Data: "2026-01-05", total_kWh: 1313 },
    { Data: "2026-01-06", total_kWh: 921 },
    { Data: "2026-01-07", total_kWh: 728 },
    { Data: "2026-01-08", total_kWh: 1156 },
    { Data: "2026-01-09", total_kWh: 917 },
    { Data: "2026-01-10", total_kWh: 1065 },
    { Data: "2026-01-11", total_kWh: 905 },
    { Data: "2026-01-12", total_kWh: 1320 },
    { Data: "2026-01-13", total_kWh: 1237 },
    { Data: "2026-01-14", total_kWh: 782 },
    { Data: "2026-01-15", total_kWh: 1277 },
    { Data: "2026-01-16", total_kWh: 1472 },
    { Data: "2026-01-17", total_kWh: 1081 },
    { Data: "2026-01-18", total_kWh: 1370 },
    { Data: "2026-01-19", total_kWh: 1287 },
    { Data: "2026-01-20", total_kWh: 933 },
    { Data: "2026-01-21", total_kWh: 713 },
    { Data: "2026-01-22", total_kWh: 1084 },
    { Data: "2026-01-23", total_kWh: 1069 },
    { Data: "2026-01-24", total_kWh: 857 },
    { Data: "2026-01-25", total_kWh: 676 },
    { Data: "2026-01-26", total_kWh: 1303 },
    { Data: "2026-01-27", total_kWh: 776 },
    { Data: "2026-01-28", total_kWh: 831 },
    { Data: "2026-01-29", total_kWh: 944 },
    { Data: "2026-01-30", total_kWh: 814 },
    { Data: "2026-01-31", total_kWh: 1238 },
    { Data: "2026-02-01", total_kWh: 1071 },
    { Data: "2026-02-02", total_kWh: 1402 },
    { Data: "2026-02-03", total_kWh: 857 },
    { Data: "2026-02-04", total_kWh: 990 },
    { Data: "2026-02-05", total_kWh: 1234 },
    { Data: "2026-02-06", total_kWh: 1734 },
    { Data: "2026-02-07", total_kWh: 1211 },
    { Data: "2026-02-08", total_kWh: 1502 },
    { Data: "2026-02-09", total_kWh: 1544 },
    { Data: "2026-02-10", total_kWh: 1302 },
    { Data: "2026-02-11", total_kWh: 1350 },
    { Data: "2026-02-12", total_kWh: 1735 },
    { Data: "2026-02-13", total_kWh: 1512 },
    { Data: "2026-02-14", total_kWh: 1402 },
    { Data: "2026-02-15", total_kWh: 1449 },
    { Data: "2026-02-16", total_kWh: 1112 },
    { Data: "2026-02-17", total_kWh: 1669 },
    { Data: "2026-02-18", total_kWh: 1307 },
    { Data: "2026-02-19", total_kWh: 1314 },
    { Data: "2026-02-20", total_kWh: 1189 },
    { Data: "2026-02-21", total_kWh: 1299 },
    { Data: "2026-02-22", total_kWh: 1437 },
    { Data: "2026-02-23", total_kWh: 1509 },
    { Data: "2026-02-24", total_kWh: 1398 },
    { Data: "2026-02-25", total_kWh: 1194 },
    { Data: "2026-02-26", total_kWh: 1447 },
    { Data: "2026-02-27", total_kWh: 1507 },
    { Data: "2026-02-28", total_kWh: 1236 },
    { Data: "2026-03-01", total_kWh: 1427 },
    { Data: "2026-03-02", total_kWh: 1586 },
    { Data: "2026-03-03", total_kWh: 1575 },
    { Data: "2026-03-04", total_kWh: 1426 },
    { Data: "2026-03-05", total_kWh: 1778 },
    { Data: "2026-03-06", total_kWh: 1867 },
    { Data: "2026-03-07", total_kWh: 1843 },
    { Data: "2026-03-08", total_kWh: 1498 },
    { Data: "2026-03-09", total_kWh: 1685 },
    { Data: "2026-03-10", total_kWh: 1454 },
    { Data: "2026-03-11", total_kWh: 1653 },
    { Data: "2026-03-12", total_kWh: 1286 },
    { Data: "2026-03-13", total_kWh: 1686 },
    { Data: "2026-03-14", total_kWh: 1438 },
    { Data: "2026-03-15", total_kWh: 1502 },
    { Data: "2026-03-16", total_kWh: 1532 },
    { Data: "2026-03-17", total_kWh: 1806 },
    { Data: "2026-03-18", total_kWh: 1242 },
    { Data: "2026-03-19", total_kWh: 1657 },
    { Data: "2026-03-20", total_kWh: 1416 },
    { Data: "2026-03-21", total_kWh: 1385 },
    { Data: "2026-03-22", total_kWh: 1326 },
    { Data: "2026-03-23", total_kWh: 1758 },
    { Data: "2026-03-24", total_kWh: 1518 },
    { Data: "2026-03-25", total_kWh: 1396 },
    { Data: "2026-03-26", total_kWh: 1780 },
    { Data: "2026-03-27", total_kWh: 2154 },
    { Data: "2026-03-28", total_kWh: 1303 },
    { Data: "2026-03-29", total_kWh: 1714 },
    { Data: "2026-03-30", total_kWh: 1903 },
    { Data: "2026-04-01", total_kWh: 1627 },
    { Data: "2026-04-02", total_kWh: 1759 },
    { Data: "2026-04-03", total_kWh: 1509 },
    { Data: "2026-04-04", total_kWh: 1884 },
    { Data: "2026-04-05", total_kWh: 1670 },
    { Data: "2026-04-06", total_kWh: 1885 },
    { Data: "2026-04-07", total_kWh: 1722 },
    { Data: "2026-04-08", total_kWh: 1498 },
    { Data: "2026-04-09", total_kWh: 2152 },
    { Data: "2026-04-10", total_kWh: 1941 },
    { Data: "2026-04-11", total_kWh: 1526 },
    { Data: "2026-04-12", total_kWh: 1487 },
    { Data: "2026-04-13", total_kWh: 1718 },
    { Data: "2026-04-14", total_kWh: 1855 },
    { Data: "2026-04-15", total_kWh: 1628 },
    { Data: "2026-04-16", total_kWh: 1876 },
    { Data: "2026-04-17", total_kWh: 2487 },
    { Data: "2026-04-18", total_kWh: 1747 },
    { Data: "2026-04-19", total_kWh: 1511 }
];

function createMonthlyChart() {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const anoAtual = hoje.getFullYear();

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    document.getElementById("chartTitle").innerText =
        `Consumo de Energia em kWh - ${meses[mesAtual]}`;

    // Preparar arrays
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
    const dias = Array.from({ length: diasNoMes }, (_, i) => i + 1);
    const consumo = Array(diasNoMes).fill(0);

    data.forEach(d => {
        const [y, m, day] = d.Data.split("-").map(Number);
        if (y === anoAtual && m - 1 === mesAtual) {
            consumo[day - 1] = d.total_kWh;
        }
    });

    // Totais e média
    const totalGeral = consumo.reduce((a, b) => a + b, 0);
    const diasComDados = consumo.filter(v => v > 0);
    const media = diasComDados.length ? totalGeral / diasComDados.length : 0;

    document.getElementById("chartTotals").innerHTML = `
    <span>Total do mês: <strong>${totalGeral}</strong> kWh</span>
    <span>Média diária: <strong>${media.toFixed(1)}</strong> kWh</span>
    <span>Meta: <strong>3500</strong> kWh</span>
  `;

    const mediaLinha = Array(diasNoMes).fill(media);
    const metaLinha = Array(diasNoMes).fill(3500);

    const totalKwDia = Array(diasNoMes).fill(0);

    // Configuração do gráfico
    const ctx = document.getElementById("monthlyChart");
    const container = ctx.parentElement;
    ctx.width = container.clientWidth;
    ctx.height = container.clientHeight;

    if (window.chart) window.chart.destroy();

    const totalDia = totalKwDia.map(v => v);

    window.chart = new Chart(ctx, {
        type: "line",
        plugins: [ChartDataLabels], 
        data: {
            labels: dias,
            datasets: [
                {
                    label: "Consumo diário (kWh)",
                    data: consumo,
                    borderColor: "#00ff66",
                    backgroundColor: function (context) {
                        const chart = context.chart;
                        const { ctx, chartArea } = chart;
                        if (!chartArea) return null;
                        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                        gradient.addColorStop(0, "rgba(66, 188, 88, 0.8)");
                        gradient.addColorStop(1, "rgba(66, 188, 88, 0.1)");
                        return gradient;
                    },
                    fill: true,
                    borderWidth: 1.8,
                    tension: 0.3,
                    pointRadius: 0,
                    datalabels: {
                        display: true,
                        align: 'top',
                        anchor: 'end',
                        offset: 14,
                        color: '#00ff66',
                        textStrokeColor: '#000',
                        textStrokeWidth: 3,
                        font: {
                            weight: 'bold',
                            size: 14
                        },
                        formatter: value => value
                    }
                },
                {
                    label: "Média diária",
                    data: mediaLinha,
                    borderColor: "rgba(255, 204, 0, 0.7)",
                    borderWidth: 1.5,
                    borderDash: [6, 6],
                    tension: 0,
                    pointRadius: 0,
                    datalabels: {
                       display: false // 👈 ESSA LINHA resolve o problema
                    }
                },
                {
                    label: "Meta 3500 kWh",
                    data: metaLinha,
                    borderColor: "rgba(255, 0, 0, 0.8)",
                    borderWidth: 1.5,
                    borderDash: [4, 4],
                    tension: 0,
                    pointRadius: 0,
                     datalabels: {
                       display: false // 👈 ESSA LINHA resolve o problema
                    }
                },
                {
                    label: "TotalDia",
                    data: totalDia,

                    // NÃO desenha linha nem ponto
                    borderWidth: 0,
                    pointRadius: 0,
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',

                    datalabels: {
                        display: false,
                        align: 'top',
                        anchor: 'end',
                        offset: 4,
                        color: '#00ff66',
                        font: {
                            weight: 'bold',
                            size: 14
                        },
                        formatter: value => value
                    }
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: {
                    display: true,
                    offset: 4,
                }
            },
            scales: {
                x: {
                    ticks: {
                        autoSkip: false,
                        maxTicksLimit: 10,
                        color: function (context) {
                            const day = dias[context.index]; // pega o dia correspondente
                            const data = new Date(anoAtual, mesAtual, day);
                            const diaSemana = data.getDay(); // 0 = domingo, 6 = sábado

                            // vermelho para sábado e domingo, branco para os outros
                            return (diaSemana === 0 || diaSemana === 6) ? '#ff4d4d' : '#ffffff';
                        },
                        font: { size: 18 }
                    },
                    grid: { display: true }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: "#fff", font: { size: 14 } },
                    grid: { color: "rgba(255,255,255,0.05)" }
                }
            }
        }
    });
}

// Inicializa o gráfico
createMonthlyChart();
