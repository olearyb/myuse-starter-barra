<template>
  <v-app :id="$route.name">
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-print-only"
      disable-resize-watcher
      temporary
      dark
      app
    >
      <v-btn icon large class="mx-2 mt-3" @click.stop="drawer = !drawer">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-list nav>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ content[item.title] }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div id="pwa-button">
        <v-divider />
        <v-list-item @click.stop="doPrompt()">
          <v-list-item-icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ content.install }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      elevate-on-scroll
      class="hidden-print-only"
      color="primary"
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link :to="{ name: 'index' }" class="toolbar-title-link">
          {{ content.title }}
        </router-link>
      </v-toolbar-title>
      <template v-slot:extension>
        <v-tabs v-model="model" centered grow slider-color="yellow">
          <v-tab v-for="(i, index) in tabs" :key="index" :href="i.path">
            {{ i.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
let pwaPrompt
export default {
  data() {
    return {
      tabs: [
        {
          name: "Values",
          path: "/Values/domains",
        },
        {
          name: "Dashboard",
          path: "/Values/Dashboard",
        },
      ],
      model: "tab-2",
      drawer: null,
      items: [
        {
          icon: "mdi-home",
          title: "home",
          to: "/",
        },
        {
          icon: "mdi-view-grid",
          title: "activities",
          to: "/activities",
        },
        {
          icon: "mdi-chat",
          title: "support",
          to: "/support",
        },
        {
          icon: "mdi-information",
          title: "about",
          to: "/about",
        },
      ],
    }
  },
  computed: {
    content() {
      return this.$store.state.nav.labels
    },
  },
  mounted() {
    this.$nextTick(() => {
      const pwaBtn = document.querySelector("#pwa-button")
      window.addEventListener("beforeinstallprompt", function (e) {
        e.preventDefault()
        pwaPrompt = e
        showBtn()
      })

      function showBtn() {
        pwaBtn.style.display = "block"
      }
    })
  },
  methods: {
    doPrompt() {
      pwaPrompt.prompt()
      pwaPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          // console.log('User accepted the PWA prompt')
        } else {
          // console.log('User dismissed the PWA prompt')
        }
        pwaPrompt = null
      })
    },
  },
}
</script>
