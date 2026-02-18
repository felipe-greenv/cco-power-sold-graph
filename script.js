// Dados de exemplo em kWh
const data = [
    { Data: "2026-01-01", total_kWh: 768 },
    { Data: "2026-01-02", total_kWh: 1296 },
    { Data: "2026-01-03", total_kWh: 1854 },
    { Data: "2026-01-04", total_kWh: 1540 },
    { Data: "2026-01-05", total_kWh: 1383 },
    { Data: "2026-01-06", total_kWh: 1010 },
    { Data: "2026-01-07", total_kWh: 944 },
    { Data: "2026-01-08", total_kWh: 1246 },
    { Data: "2026-01-09", total_kWh: 1109 },
    { Data: "2026-01-10", total_kWh: 1241 },
    { Data: "2026-01-11", total_kWh: 1125 },
    { Data: "2026-01-12", total_kWh: 1489 },
    { Data: "2026-01-13", total_kWh: 1377 },
    { Data: "2026-01-14", total_kWh: 925 },
    { Data: "2026-01-15", total_kWh: 1394 },
    { Data: "2026-01-16", total_kWh: 1732 },
    { Data: "2026-01-17", total_kWh: 1235 },
    { Data: "2026-01-18", total_kWh: 1696 },
    { Data: "2026-01-19", total_kWh: 1369 },
    { Data: "2026-01-20", total_kWh: 1121 },
    { Data: "2026-01-21", total_kWh: 713 },
    { Data: "2026-01-22", total_kWh: 1124 },
    { Data: "2026-01-23", total_kWh: 1087 },
    { Data: "2026-01-24", total_kWh: 865 },
    { Data: "2026-01-25", total_kWh: 699 },
    { Data: "2026-01-26", total_kWh: 1311 },
    { Data: "2026-01-27", total_kWh: 776 },
    { Data: "2026-01-28", total_kWh: 852 },
    { Data: "2026-01-29", total_kWh: 1115 },
    { Data: "2026-01-30", total_kWh: 961 },
    { Data: "2026-01-31", total_kWh: 1336 },
    { Data: "2026-02-01", total_kWh: 1071 },
    { Data: "2026-02-02", total_kWh: 1402 },
    { Data: "2026-02-03", total_kWh: 857 },
    { Data: "2026-02-04", total_kWh: 990 },
    { Data: "2026-02-05", total_kWh: 1234 },
    { Data: "2026-02-06", total_kWh: 1734 },
    { Data: "2026-02-07", total_kWh: 1212 },
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
    { Data: "2026-02-18", total_kWh: 0 }

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
                    pointRadius: 0
                },
                {
                    label: "Média diária",
                    data: mediaLinha,
                    borderColor: "rgba(255, 204, 0, 0.7)",
                    borderWidth: 1.5,
                    borderDash: [6, 6],
                    tension: 0,
                    pointRadius: 0
                },
                {
                    label: "Meta 3500 kWh",
                    data: metaLinha,
                    borderColor: "rgba(255, 0, 0, 0.8)",
                    borderWidth: 1.5,
                    borderDash: [4, 4],
                    tension: 0,
                    pointRadius: 0
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
                        display: ctx => ctx.dataset.data[ctx.dataIndex] > 0,
                        align: 'top',
                        anchor: 'end',
                        offset: 6,
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
                    clamp: true
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
                    grid: { display: false }
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
