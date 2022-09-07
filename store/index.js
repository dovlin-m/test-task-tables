export const state = () => ({
  comments: [],
  comment: [],
  page: 0,
  size: 10
})

export const mutations = {
  updateComments (state, comments) {
    return state.comments = comments
  },

  sortId (state) {
    state.comments.sort((a, b) => {
      if (a.id < b.id) {
        return a.id > b.id ? -1 : 1
      }
      return a.id < b.id ? -1 : 1
    })
  },

  nextPage (state) {
    return state.page += 1
  },

  prevPage (state) {
    return state.page -= 1
  }

}

export const getters = {
  paginatedComments (state) {
    const start = state.page * state.size,
      end = start + state.size;
    return state.comments.slice(start, end);
  },

  byComment (state) {
    return state.comment
  },

  bySize (state) {
    return state.size
  },

  byPage (state) {
    return state.page
  },
}

export const actions = {
  async fetchComments(ctx) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const comments = await response.json()
    ctx.commit('updateComments', comments)
  },

  async fetchComment(ctx, params) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
    const comment = await response.json()
    ctx.commit('updateComments', comment)
  }
}


