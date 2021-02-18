<template>
  <div id="app">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './LineChart';
export default {
    data() {
  return {
    planetChartData: planetChartData,
  }
},
mounted() {
    setTimeout(() => {
  this.createChart('planet-chart', this.planetChartData);
        
    }, 1000);
},




methods: {
  createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
    console.log(myChart)
  }
}
}
</script>

<style>

</style>