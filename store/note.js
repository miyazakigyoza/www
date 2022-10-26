export const state = () => ({
  contents: []
});

export const getters = {
  contents: state => {
    return state.contents
  },
}

export const mutations = {
  setContents: (state, contents) => {
    state.contents = contents
  },
}

export const actions = {
  async fetchContents({ commit }) {
    const note = await this.$axios.$get(this.$config.NOTE_API, {params:{page:1}})
    commit('setContents', note.data.section.contents)
  },
}