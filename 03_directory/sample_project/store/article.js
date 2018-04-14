export const state = () => ({
  body: ""
})

export const mutations = {
  update (state, text) {
    state.body = text
  },
}

export const actions = {
  update (state, text) {
    context.commit({
      type: 'update',
      text: text
    })
  }
}