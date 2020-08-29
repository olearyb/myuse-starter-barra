import createPersistedState from "vuex-persistedstate"

export const state = () => ({
  cards: [
    {
      title: "Personal Growth",
      src: require("~/assets/images/values/growth.svg"),
      flex: 6,
      id: "1",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Leisure",
      src: require("~/assets/images/customize.svg"),
      flex: 6,
      id: "2",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Sprituality",
      src: require("~/assets/images/values/spirituality.svg"),
      flex: 6,
      id: "3",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Work",
      src: require("~/assets/images/values/work.svg"),
      flex: 6,
      id: "4",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Health",
      src: require("~/assets/images/values/health.svg"),
      flex: 6,
      id: "5",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Community \n& Environment",
      src: require("~/assets/images/values/community.svg"),
      flex: 6,
      id: "6",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Family Relationships",
      src: require("~/assets/images/values/family.svg"),
      flex: 6,
      id: "7",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Social Relationships",
      src: require("~/assets/images/values/social.svg"),
      flex: 6,
      id: "8",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Intimate Relationships",
      src: require("~/assets/images/values/intimate.svg"),
      flex: 6,
      id: "9",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
    {
      title: "Parenting",
      src: require("~/assets/images/values/parenting.svg"),
      flex: 6,
      id: "10",
      keywords: [],
      importance: null,
      effectiveness: "",
    },
  ],
})

export const plugins = [createPersistedState()]

export const getters = {
  getCards: (state) => {
    return state.cards
  },
}

export const mutations = {
  updateEffectiveness(state, {card, effectiveness}) {
    card.effectiveness = effectiveness
  },
  updateImportance(state, {card, importance}) {
    card.importance = importance
  },
  updateKeywords(state, {card, keywords}) {
    card.keywords = keywords
  }
}

//state.cards.find((el) => el.id === answer.id).effectiveness = answer.value
