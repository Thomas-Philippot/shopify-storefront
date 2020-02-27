export const state = () => ({
  products: [],
  blogs: [],
  checkout: {
    lineItems: []
  }
})

export const mutations = {
  setProducts (state, data) {
    state.products = data
  },
  setCheckout (state, data) {
    state.checkout = data
  },
  setBlogs (state, data) {
    state.blogs = data
  }
}
