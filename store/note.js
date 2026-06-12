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
    // Cloudflare Pages Functions の /note（functions/note.js）を呼ぶ
    // クライアント側（mounted）からのみ実行されるため fetch をそのまま使う
    const res = await fetch('/note?page=1')
    if (!res.ok) return
    const note = await res.json()
    commit('setContents', note.data.section.contents)
  },
}