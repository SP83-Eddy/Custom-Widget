// Import ECharts from CDN
import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.esm.min.js';

// Function to inject CSS dynamically
function injectCSS() {
  const style = document.createElement("style");
  style.textContent = `
    /* General styling for the widget container */
    #chart-container {
        width: 600px;
        height: 400px;
        background-color: #f9f9f9;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Styling for chart title */
    .echarts-title {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        text-align: center;
        margin-bottom: 10px;
    }
  `;
  document.head.appendChild(style);
}

// Call the function to inject CSS
injectCSS();

document.addEventListener('DOMContentLoaded', () => {
  const chartContainer = document.getElementById("chart-container");
  if (!chartContainer) {
    console.error("Chart container with ID 'chart-container' not found.");
    return;
  }

  const chart = echarts.init(chartContainer);

  const sampleData = [
    { date: "2024-11-01", plannedWork: 100, completedWork: 10 },
    { date: "2024-11-02", plannedWork: 90, completedWork: 25 },
    { date: "2024-11-03", plannedWork: 80, completedWork: 40 },
    { date: "2024-11-04", plannedWork: 70, completedWork: 55 },
    { date: "2024-11-05", plannedWork: 60, completedWork: 70 },
    { date: "2024-11-06", plannedWork: 50, completedWork: 85 },
    { date: "2024-11-07", plannedWork: 40, completedWork: 100 }
  ];

  const dates = sampleData.map(item => item.date);
  const plannedWork = sampleData.map(item => item.plannedWork);
  const completedWork = sampleData.map(item => item.completedWork);

  const option = {
    title: { text: "Burndown Chart", left: "center" },
    tooltip: { trigger: "axis" },
    legend: { data: ["Planned Work", "Completed Work"], top: "10%" },
    xAxis: { type: "category", data: dates, name: "Date" },
    yAxis: { type: "value", name: "Work" },
    series: [
      { name: "Planned Work", type: "line", data: plannedWork, itemStyle: { color: "#FF0000" } },
      { name: "Completed Work", type: "line", data: completedWork, itemStyle: { color: "#00FF00" } }
    ]
  };

  try {
    chart.setOption(option);
    console.log("Chart rendered successfully.");
  } catch (err) {
    console.error("Error rendering chart:", err);
  }
});
