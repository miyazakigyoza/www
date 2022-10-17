export const state = () => ({
  index: [],
  areas: [],
  area: null,
})

export const getters = {
  shops: state => {
    return state.index
  },
  areas: state => {
    return state.areas
  },
  area: state => {
    return state.area
  },
}

export const mutations = {
  setIndex(state, results) {
    state.index = results;
  },
  setAreas(state, results) {
    state.areas = results;
  },
  setArea(state, results) {
    state.area = results[0];
  },
}

export const actions = {
  async getIndex({ commit }, {order=null, area=null}) {
    const api = this.$config.API + '/members/shops'
    const token = this.$config.TOKEN
    this.$axios.setToken(token, 'Bearer')
    let params = {
      depth: 2,
      order,
      area,
    }

    const results = await this.$axios.$get(api, { params })
    commit('setIndex', results)
  },

  async getAreas({ commit }) {
    const api = this.$config.API + '/members/areas'
    const token = this.$config.TOKEN
    this.$axios.setToken(token, 'Bearer')
    let params = {
    }

    const results = await this.$axios.$get(api, { params })
    commit('setAreas', results)
  },
  async findAreas({ commit }, {slug=null}) {
    const api = this.$config.API + '/members/areas'
    const token = this.$config.TOKEN
    this.$axios.setToken(token, 'Bearer')
    let params = {
      slug
    }

    const results = await this.$axios.$get(api, { params })
    commit('setArea', results)
  },
}
