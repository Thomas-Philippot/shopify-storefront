export const state = () => ({
  products: [],
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
  }
}
