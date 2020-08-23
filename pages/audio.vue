<template>
  <div>
    <h1>Audio Test</h1>
    <!--<v-btn class="playAudio" v-if="!isPlaying" @click="playAudio"><v-icon>mdi-play</v-icon></v-btn>
    <v-btn class="playAudio" v-else @click="pause"><v-icon>mdi-pause</v-icon></v-btn>-->
    <v-switch
      v-model="switch1"
      align="center"
      justify="center"
      class="px-10"
      @change="playAudio"
    ></v-switch>
    <v-subheader>Audio Volume</v-subheader>
            <v-slider
              v-model="volume"
              color="primary"
              track-color="grey"
              always-dirty
              min="0"
              max="10"
            >
              <template v-slot:prepend>
                <v-icon @click="decrement">
                  mdi-volume-low
                </v-icon>
              </template>
              <template v-slot:append>
                <v-icon @click="increment">
                  mdi-volume-high
                </v-icon>
              </template>
            </v-slider>
  </div>
</template>

<script>
export default {
    data() {
      return {
          current: {},
          index: 0,
          isPlaying: false,
          volume: 100,
          switch1: false,
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
    watch: {
        volume(value) {
            this.player.volume = this.volume / 100
        }
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
        },
        decrement() {
          this.volume--
        },
        increment() {
          this.volume++
        },
    }   
}
</script>
