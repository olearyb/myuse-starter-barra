<template>
  <!-- This is the dynamic page for each domain -->
  <div>
    <h1>{{ card.title }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters("cards", ["getCards"]),
  },
}
</script>
