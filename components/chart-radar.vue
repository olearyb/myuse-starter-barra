<template>
  <div class="card-img-bottom">
    <chartjs-radar :labels="labels" :data="dataSet" :bind="true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataEntry: null,
      dataLabel: null,
      labels: [
        "Personal Growth",
        "Work",
        "Leisure",
        "Health",
        "Community",
        "Family",
        "Parenting",
        "Intimate Relationships",
        "Social",
        "Spirituality",
      ],
      dataSet: [9, 8, 8, 9, 4, 6, 2, 8, 9, 5],
    }
  },
}
</script>
