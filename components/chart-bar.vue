<template>
  <div class="card">
    <div class="card-body">
    </div>
    <div class="card-img-bottom">
      <chartjs-bar
        :key="index"
        :backgroundcolor="type.bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="type.borderColor"
        :data="type.data"
        :datalabel="type.dataLabel"
        :labels="labels"
        :options="barChartOptions"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginZero: true,
      labels: ["Sun", "Mon"],
      type:
        {
          bgColor: "#de98ab",
          borderColor: "0c0306",
          data: [1, 9],
          dataLabel: "Bar",
        },
        barChartOptions: {
          responsive: true,
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Google analytics data',
            fontSize: 24,
            fontColor: '#6b7280'
          },
          tooltips: {
            backgroundColor: '#17BF62'
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }
    }
  },
}
</script>
