import { getShops, getAreas, findArea } from '~/lib/cms'

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
  setArea(state, result) {
    state.area = result;
  },
}

export const actions = {
  getIndex({ commit }, {order=null, area=null}) {
    commit('setIndex', getShops({ order, area }))
  },

  getAreas({ commit }) {
    commit('setAreas', getAreas())
  },
  findAreas({ commit }, {slug=null}) {
    commit('setArea', findArea(slug))
  },
}
