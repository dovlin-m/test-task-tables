export const state = () => ({
  comments: [],
})

export const mutations = {
  updateComments (state, comments) {
    return state.comments = comments
  }
}

export const getters = {
  allProducts (state) {
    return state.comments
  }
}

export const actions = {
  async fetchComments(ctx) {
    const response = await fetch(`https://floating-sierra-20135.herokuapp.com/api/movies`)
    ctx.commit('comment/updateComments', response)
  }
}


