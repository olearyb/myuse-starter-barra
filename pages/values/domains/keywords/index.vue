<template>
  <div>
    Keywords
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["getCards"]),
  },
}
</script>
