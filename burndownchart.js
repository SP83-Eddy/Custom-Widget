// import * as echarts from './echarts.js';
import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.esm.min.js';

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