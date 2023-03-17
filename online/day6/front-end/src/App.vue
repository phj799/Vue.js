<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <LineChart />
    <DataSendForm />
  </div>
</template>

<script>
import { dataLab } from "./utils/axios";
import { mapState, mapMutations } from 'vuex';
import LineChart from "./components/LineChart";
import DataSendForm from "./components/DataSendForm";

export default {
  name: "App",
  components: { LineChart, DataSendForm }, 
  computed: {
    ...mapState(['chartData']),
  },
  async created() {
    try {
      const response = await dataLab.get();
      const chartData = {
        labels: response.data[0].data.map((li) => li.period),
        datasets: response.data.reduce((acc, cur) => {
          const label = cur.title;
          const data = cur.data.map((li) => li.ratio);
          acc.push({
            label: label,
            data: data,
            borderColor: this.makeColor(),
            tension: 0.3,
          });
          return acc;
        }, []),
        // datasets: response.data.map((item) => {
        //   return {
        //     label: item.title,
        //     data: item.data.map((item)=>item.ratio),
        //     backgroundColor: "red",
        //     tension: 0.3,
        //   }
        // }),
      };

      // console.log(response); // 지워
      this.CHANGE_CHART_DATA(chartData);
      console.log(this.chartData.labels); // Vuex의 chartData에 찍음
      console.log(this.chartData.datasets);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapMutations(["CHANGE_CHART_DATA"]),
    makeColor() {
      return "#" + Math.round(Math.random() * 0xffffff).toString(16);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>