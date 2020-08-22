<template>
  <div>
    <h1>Audio Test</h1>
    <v-btn class="playAudio" v-if="!isPlaying" @click="playAudio"><v-icon>mdi-play</v-icon></v-btn>
    <v-btn class="playAudio" v-else @click="pause"><v-icon>mdi-pause</v-icon></v-btn>
  </div>
</template>

<script>
export default {
    data() {
      return {
          current: {},
          index: 0,
          isPlaying: false,
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
    },
    created() {
        this.current = this.songs[this.index]
        this.player.src = this.current.src
    },
    methods: {
        playAudio(song) {
            if (typeof song.src != "undefined") {
                this.current = song
                this.player.src = this.current.src
            }
            this.player.play()
            this.isPlaying = true
        },
        pause() {
            this.player.pause()
            this.isPlaying = false
        }
    }
}
</script>
