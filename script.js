const API_URL = "https://cco-installations-api.felipe-leandro.workers.dev/installations-metrics";

async function createMonthlyChart() {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const anoAtual = hoje.getFullYear();

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    document.getElementById("chartTitle").innerText =
        `Instalações Realizadas em ${meses[mesAtual]}`;

    const res = await fetch(API_URL);
    const data = await res.json();

    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
    const dias = Array.from({ length: diasNoMes }, (_, i) => i + 1);

    const cf = Array(diasNoMes).fill(0);
    const porsche = Array(diasNoMes).fill(0);

    data.forEach(d => {
        const [y, m, day] = d.Data.split("-").map(Number);
        if (y === anoAtual && m - 1 === mesAtual) {
            cf[day - 1] = d.CF || 0;
            porsche[day - 1] = d.PORSCHE || 0;
        }
    });

    const totalCF = cf.reduce((a, b) => a + b, 0);
    const totalP = porsche.reduce((a, b) => a + b, 0);
    const totalGeral = totalCF + totalP;

    const diasComDados = cf
        .map((v, i) => v + porsche[i])
        .filter(v => v > 0);

    const media = diasComDados.length
        ? totalGeral / diasComDados.length
        : 0;

    document.getElementById("chartTotals").innerHTML = `
    <span>CF: <strong>${totalCF}</strong></span>
    <span>Porsche: <strong>${totalP}</strong></span>
    <span>Média: <strong>${media.toFixed(1)}</strong></span>
  `;

    const mediaLinha = Array(diasNoMes).fill(media);

    const ctx = document.getElementById("monthlyChart");
    const container = ctx.parentElement;

    // Ajusta a altura do canvas para ocupar todo o container
    ctx.width = container.clientWidth;
    ctx.height = container.clientHeight;

    // Se já existir um gráfico, destrói
    if (window.chart) window.chart.destroy();

    window.chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: dias,
            datasets: [
                {
                    label: "CF",
                    data: cf,
                    borderColor: "#00ff66",
                    backgroundColor: function (context) {
                        const chart = context.chart;
                        const { ctx, chartArea } = chart;
                        if (!chartArea) return null; // ainda não calculou
                        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                        gradient.addColorStop(0, "rgba(66, 188, 88, 0.8)");  // verde sólido (#42BC58)
                        gradient.addColorStop(1, "rgba(66, 188, 88, 0.1)");  // transparente verde
                        return gradient;
                    },
                    fill: true,
                    borderWidth: 1.8,
                    tension: 0.3,
                    pointRadius: 0
                },
                {
                    label: "Porsche",
                    data: porsche,
                    borderColor: "#00c8ff",
                    backgroundColor: function (context) {
                        const chart = context.chart;
                        const { ctx, chartArea } = chart;
                        if (!chartArea) return null; // ainda não calculou
                        // Gradiente vertical para a linha Porsche
                        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                        gradient.addColorStop(0, "rgba(66, 188, 88, 0.8)"); // verde sólido
                        gradient.addColorStop(1, "rgba(85, 0, 215, 0.2)");  // transparente purple (#5500D7)
                        return gradient;
                    },
                    fill: true,
                    borderWidth: 1.8,
                    tension: 0.3,
                    pointRadius: 0
                },
                {
                    label: "Média",
                    data: mediaLinha,
                    borderColor: "rgba(255, 204, 0, 0.7)",
                    borderWidth: 1.2,
                    borderDash: [6, 6],
                    tension: 0,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 12,   // espaço real à esquerda
                    right: 12   // espaço real à direita
                }
            },
            plugins: {
                legend: { display: false } // média já está nos totais
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
                            return (diaSemana === 0 || diaSemana === 6) ? '#ff4d4d' : '#888';
                        },
                        font: { size: 8 }
                    },
                    grid: { display: false },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#888",
                        font: { size: 10 }
                    },
                    grid: {
                        color: "rgba(255,255,255,0.05)"
                    }
                }
            }
        }
    });
}

createMonthlyChart();
