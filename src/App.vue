<template>
  <div v-if="!isProcessing">
    <bar-chart :data="barChartData" :options="barChartOptions" :height="'100%'" />
  </div>
</template>

<script>
import barChart from "./components/BarChart";

export default {
  components: {
    barChart,
  },
  data() {
    return {
      normalDataset: [
        {
          team: "arsenal",
          goals: 50,
        },
        {
          team: "spurs",
          goals: 5,
        },
        {
          team: "wigan",
          goals: 300,
        },
        {
          team: "oxford united",
          goals: 1200,
        },
      ],
      isProcessing: true,
      barChartData: {
      },
      barChartOptions: {
        type: 'horizontalBar',
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          fontSize: 24,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    parseData(normalDataset) {
      this.isProcessing = true
      let barChartData = {
        labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: "#F9B2C3",
            },
          ],
      };
      normalDataset.forEach((element) => {
        barChartData.labels.push(element.team)
        barChartData.datasets[0].data.push(element.goals)
      });
      this.barChartData = barChartData
      setTimeout(() => {
        this.isProcessing = false
      }, 100);
    },
  },
  mounted() {
    this.parseData(this.normalDataset);
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>