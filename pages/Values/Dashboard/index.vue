<template>
  <div>
    <h1>Chart Demo</h1>
    <v-card class="question card__text pa-sm-5 py-5 px-2">
      <div>
        <ChartRadar />
      </div>
    </v-card>
  </div>
</template>

<script>
import ChartRadar from "~/components/chart-radar"
export default {
  layout: "tabs",
  components: {
    ChartRadar,
  },
}
</script>
