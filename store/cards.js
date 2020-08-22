export const state = () => ({
  cards: [
    {
      title: "Personal Growth",
      src: require("~/assets/images/values/growth.svg"),
      flex: 6,
      id: "1",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Leisure",
      src: require("~/assets/images/customize.svg"),
      flex: 6,
      id: "2",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Sprituality",
      src: require("~/assets/images/values/spirituality.svg"),
      flex: 6,
      id: "3",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Work",
      src: require("~/assets/images/values/work.svg"),
      flex: 6,
      id: "4",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Health",
      src: require("~/assets/images/values/health.svg"),
      flex: 6,
      id: "5",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Community \n& Environment",
      src: require("~/assets/images/values/community.svg"),
      flex: 6,
      id: "6",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Family Relationships",
      src: require("~/assets/images/values/family.svg"),
      flex: 6,
      id: "7",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Social Relationships",
      src: require("~/assets/images/values/social.svg"),
      flex: 6,
      id: "8",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Intimate Relationships",
      src: require("~/assets/images/values/intimate.svg"),
      flex: 6,
      id: "9",
      importance: "",
      effectiveness: "",
    },
    {
      title: "Parenting",
      src: require("~/assets/images/values/parenting.svg"),
      flex: 6,
      id: "10",
      importance: "",
      effectiveness: "",
    },
  ],
})

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
}

//state.cards.find((el) => el.id === answer.id).effectiveness = answer.value
