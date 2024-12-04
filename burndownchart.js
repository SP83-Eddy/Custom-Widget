// Import ECharts from CDN
import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.esm.min.js';

// Define and export the BurndownChart class
export default class BurndownChart {
    constructor() {
        this.container = null;
        this.chart = null;
    }

    // Method to initialize the widget
    init(container) {
        this.container = container;
        this.injectCSS(); // Inject the CSS styles dynamically
        this.chart = echarts.init(container);
        console.log("BurndownChart widget initialized.");
    }

    // Method to inject CSS dynamically
    injectCSS() {
        const style = document.createElement("style");
        style.textContent = `
            /* General styling for the widget container */
            #chart-container {
                width: 100%;
                height: 100%;
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

    // Method to render the chart
    render(data, options) {
        if (!this.chart) {
            console.error("Chart container not initialized.");
            return;
        }

        // Example data for the chart
        const sampleData = [
            { date: "2024-11-01", plannedWork: 100, completedWork: 10 },
            { date: "2024-11-02", plannedWork: 90, completedWork: 25 },
            { date: "2024-11-03", plannedWork: 80, completedWork: 40 },
            { date: "2024-11-04", plannedWork: 70, completedWork: 55 },
            { date: "2024-11-05", plannedWork: 60, completedWork: 70 },
            { date: "2024-11-06", plannedWork: 50, completedWork: 85 },
            { date: "2024-11-07", plannedWork: 40, completedWork: 100 }
        ];

        // Prepare the chart data
        const dates = sampleData.map(item => item.date);
        const plannedWork = sampleData.map(item => item.plannedWork);
        const completedWork = sampleData.map(item => item.completedWork);

        // Chart options
        const chartOptions = {
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
            this.chart.setOption(chartOptions);
            console.log("BurndownChart rendered successfully.");
        } catch (err) {
            console.error("Error rendering the chart:", err);
        }
    }

    // Method to resize the chart when the container size changes
    resize() {
        if (this.chart) {
            this.chart.resize();
            console.log("BurndownChart resized.");
        }
    }

    // Cleanup method when the widget is removed
    destroy() {
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
            console.log("BurndownChart destroyed.");
        }
    }
}
