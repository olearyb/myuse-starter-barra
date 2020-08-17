export const state = () => ({
  cards: [
    {
      title: "Personal Growth",
      src: require("~/assets/images/community.svg"),
      flex: 6,
      id: "1",
    },
    {
      title: "Leisure",
      src: require("~/assets/images/customize.svg"),
      flex: 6,
      id: "2",
    },
    {
      title: "Sprituality",
      src: require("~/assets/images/feedback.svg"),
      flex: 6,
      id: "3",
    },
    {
      title: "Work",
      src: require("~/assets/images/sitting.svg"),
      flex: 6,
      id: "4",
    },
    {
      title: "Health",
      src: require("~/assets/images/follow.svg"),
      flex: 6,
      id: "5",
    },
    {
      title: "Community & Environment",
      src: require("~/assets/images/girl_compass.svg"),
      flex: 6,
      id: "6",
    },
    {
      title: "Family Relationships",
      src: require("~/assets/images/skills.svg"),
      flex: 6,
      id: "7",
    },
    {
      title: "Social Relationships",
      src: require("~/assets/images/thought_bubbles.svg"),
      flex: 6,
      id: "8",
    },
    {
      title: "Intimate Relationships",
      src: require("~/assets/images/study.svg"),
      flex: 6,
      id: "9",
    },
    {
      title: "Parenting",
      src: require("~/assets/images/learn_blue.svg"),
      flex: 6,
      id: "10",
    },
  ],
})

export const getters = {
  getCards: (state) => {
    return state.cards
  },
}
