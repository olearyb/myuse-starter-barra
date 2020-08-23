<template>
  <div class="home">
    <h1>Ratings</h1>
    <BarChart
      class="chart"
      :data-set="data"
      :margin-left="0"
      :margin-top="40"
      :tick-count="5"
      :bar-padding="0.5"
    />
  </div>
</template>

<script>
import BarChart from "~/components/BarChart.vue"

export default {
  name: "home",
  data() {
    return {
      data: [
        ["Importance", 9],
        ["Effectiveness", 6],
      ]
    };
  },
  components: {
    BarChart
  }
};
</script>

<style scoped>
.chart {
  margin: 20px auto 0;
  display: block;
}
</style>