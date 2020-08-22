<template>
  <div>
    <h1>Audio Test</h1>
  </div>
</template>

<script>
export default {
    data() {
      return {
          songs: [
              {
                  title: "Wave",
                  src: require('~/assets/audio/ambient_wave.mp3'),
              },
              {
                  title: "Wave",
                  src: require('~/assets/audio/ambient_wave.mp3'),
              }
          ],
          player: new Audio()
        }
    }
}
</script>
