function renderPerformancesChart(projectData) {
  const performancesChart = document.getElementById("performances-chart");

  const data = {
    labels: ["Performance", "Accessibility", "Best Practices", "SEO"],
    datasets: [
      {
        label: "Scores",
        data: projectData.lightHouseScores,
        backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6"],
        borderRadius: 10,
      },
    ],
  };

  new Chart(performancesChart, {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      aspectRatio: 2,
    },
  });
}

export default renderPerformancesChart;
