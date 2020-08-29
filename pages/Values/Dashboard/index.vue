<template>
  <div>
    <h1 class="card__header">Values Dashboard</h1>
    <v-container class="text-center">
          <v-btn
            x-small
            outlined
            color="primary"
            @click.stop="openInfoPanel"
          >more info
          </v-btn>
        </v-container>
        <v-dialog v-model="infoPanel" scrollable max-width="80vw">
          <template v-slot:activator="{ on, attrs }"></template>
          <v-card>
            <v-card-title>Values Dashboard</v-card-title>
            <!-- <v-spacer></v-spacer>
            <v-btn icon @click="infoPanel = false">
            <v-icon>mdi-close</v-icon>
            </v-btn> -->
            <v-divider class="py-5"></v-divider>
            <v-card-text>
              This dashboard is an overview of the ratings that you gave each life domain in the values section<br /><br />
              The purpose of this dashboard is for you to <b>review</b> your importance and effectiveness ratings all in one place.
              <br /><br /> 
              If the chart is empty, that means you have not filled out any value ratings in the Value section.                
            </v-card-text>
          </v-card>
        </v-dialog>
    <v-card class="question card__text pa-sm-5 py-5 px-2">
      <div>
        <radar-chart :data="radarChartData" :options="radarChartOptions" :height="400" />
      </div>
    </v-card>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(card,index) in getCards"
          :key="card.id"
          cols="12"
          :sm="card.flex"
          xs="1"
        >
        <v-card>
          <v-card-title class="title" v-text="card.title">
          </v-card-title>
          <v-row>
            <v-col class="text-center imp"><b>{{ card.importance }}</b></v-col>
            <v-col class="text-center eff"><b>{{ card.effectiveness }}</b></v-col>
          </v-row>
          <v-row>
            <v-col class="text-center impCol">Importance</v-col>
            <v-col class="text-center effCol">Effectiveness</v-col>
          </v-row>
          <!--<radial-progress-bar :diameter="200"
                       :completed-steps="completedSteps"
                       :total-steps="totalSteps" /> -->
          <!-- <bar-chart :data="barChartData" :options="barChartOptions" :height="200" class="py-10"/> -->
          <!-- <BarChart
            class="chart"
            :data-set="data"
            :margin-left="0"
            :margin-top="40"
            :tick-count="5"
            :bar-padding="0.5"
          />-->
          <!-- <p class="pa-4">Importance: {{ card.importance }} <br />
          Effectiveness: {{ card.effectiveness }} </p>-->
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn
              icon
              @click="show = !show"
              > -->
              <v-btn
                icon
                @click="selectedIndex = index, show = !show"
              >
              <!-- <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>-->
              <v-icon>{{ index === selectedIndex ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <!--<div v-show="show"> -->
              <div v-show="show && index === selectedIndex">
              <v-divider></v-divider>
              <v-card-text>
                <b>Keywords:</b>
              </v-card-text>
              <v-chip v-for="keyword in card.keywords" :key="keyword" class="ml-4 my-4" >{{ keyword }} </v-chip>
            </div>
          </v-expand-transition>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
import { mapGetters } from "vuex"
import RadarChart from "~/components/RadarChart"
import BarChart from '~/components/BarChart'
//import BarChart from '~/components/BarChart.vue'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
}
export default {
  layout: "tabs",
  components: {
    RadarChart,
    BarChart,
    RadialProgressBar,
  },
  data() {
    return {
      //completedSteps: this.importance,
      /*data: [
        ["Importance", this.importance],
        ["Effectiveness", 1],
      ],*/
      //totalSteps: 10,
      selectedIndex: null,
      show: false,
      infoPanel: false,
      radarChartOptions: {
          responsive: true,
          scales: {
            yAxes: [
                {
                ticks: {
                    beginAtZero: true,
                    display: false,
                    min: 0,
                    max: 10,
                },
                gridLines: {
                    display: false,
                },
                scaleLabel: {
                    display: false,
                }
                }
            ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 10,
              }
            }
          ]
        }
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        /*title: {
          display: true,
          text: 'Ratings'
        }, */
        plugins: {
          datalabels: {
            //align: 'end',
            color: 'white',
            font: {
              weight: 'bold',
              size: 20,
            }
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
                max: 10,
              },
              gridLines: {
                display: false,
              },
              scaleLabel: {
                display: false,
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            }
          ]
        }
      }
      /* radarChartData: {
        labels: [
        "Personal Growth",
        "Work",
        "Leisure",
        "Health",
        "Community",
        "Family",
        "Parenting",
        "Intimate",
        "Social",
        "Spirituality",
        ],
        datasets: [
          {
            label: "Importance",
            backgroundColor: 'rgb(54, 162, 235, 0.75)',
            data: [9, 8, 8, 9, 4, 6, 2, 8, 9, 5],
          },
          {
            label: "Effectiveness",
            backgroundColor: 'rgb(75, 192, 192, 0.75)',
            data: [7, 7, 7, 6, 3, 5, 10, 6, 7, 4],
          },
        ]
      } */
    } 
  },
  methods: {
    openInfoPanel() {
      this.infoPanel = true
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    //...mapState(["getCards"]),
    barChartData() {
      return {
        labels: ['Importance', 'Effectiveness'],
        datasets: [
          {
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [chartColors.blue, chartColors.green],
            data: card.importance
          } 
        ]
      } 
    },
    radarChartData() {
      return {
        //labels: this.getCards.map(card => card.title),
        labels: ["Personal Growth", "Leisure", "Spirituality", "Work", "Health", "Community & Environment", "Family", "Social", "Intimate", "Parenting"],
        datasets: [
          {
            label: "Importance",
            backgroundColor: 'rgb(54, 162, 235, 0.75)',
            //data: [9, 8, 8, 9, 4, 6, 2, 8, 9, 5],
            data: this.getCards.map(card => card.importance),
          },
          {
            label: "Effectiveness",
            backgroundColor: 'rgb(75, 192, 192, 0.75)',
            //data: [7, 7, 7, 6, 3, 5, 10, 6, 7, 4],
            data: this.getCards.map(card => card.effectiveness),
          },
        ]
      }
    },
    card() {
      return this.getCards.find((el) => el.id === this.id)
    },
    effectiveness: {
      get() {
        return this.card.effectiveness
      },
      set(effectiveness) {
        this.$store.commit("cards/updateEffectiveness", { card: this.card, effectiveness})
      },
    },
    importance: {
      get() {
        return this.card.importance
      },
      set(importance) {
        this.$store.commit("cards/updateImportance", { card: this.card, importance})
      },
    },
    keywords: {
      get() {
        return this.card.keywords
      },
      set(keywords) {
        this.$store.commit("cards/updateKeywords", { card: this.card, keywords})
      }
    }
  },
  /* computed: {
    radarChartData() {
      return {
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
      datasets: [
          {
            // backgroundColor: ["red", "orange", "yellow"],
            data: [9, 8, 8, 9, 4, 6, 2, 8, 9, 5],
          }
        ]
      }
    },
  }*/
}
</script>

<style>
.imp {
  color: #36A2EB;
  font-size: 36px;
}
.eff {
  color: #4BC0C0;
  font-size: 36px;
}
.impCol {
  color: #36A2EB;
}
.effCol {
  color: #4BC0C0;
}

</style>