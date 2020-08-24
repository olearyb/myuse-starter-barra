<template>
  <div class="text-center">
    <v-bottom-sheet inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          fab
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-music</v-icon>
        </v-btn>
      </template>
      <v-card tile>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ current.title }}</v-list-item-title>
            </v-list-item-content>
            

            <v-list-item-icon>
              <v-btn icon @click="prev">
                <v-icon>mdi-skip-previous</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
              <v-btn
                icon
                v-if="!isPlaying"
                @click="play"
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <v-btn
                icon
                v-else
                @click="pause"
              >
                <v-icon>mdi-pause</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon
              class="ml-0"
              :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
            >
              <v-btn icon @click="next">
                <v-icon>mdi-skip-next</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
    name: "MusicPlayer",
    props: {
      loop: {
		  type: Boolean,
		  default: true
	    }
    },
    data() {
      return {
          current: {},
          index: 0,
          isPlaying: false,
          volume: 100,
          switch1: false,
          songs: [
              {
                  title: "Ambient Track 1",
                  src: require('~/assets/audio/ambient_wave.mp3'),
              },
              {
                  title: "Ambient Track 2",
                  src: require('~/assets/audio/Ambient_track_2.mp3'),
              },
              {
                  title: "Underwater",
                  src: require('~/assets/audio/underwater.mp3'),
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
        play(song) {
            if (typeof song.src != "undefined") {
                this.current = song
                this.player.src = this.current.src
            }
            this.player.play()
            this.player.loop = true
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
        next() {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        },
        prev() {
          this.index--
          if (this.index < 0) {
            this.index = this.songs.length - 1;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        },
    }   
}
</script>