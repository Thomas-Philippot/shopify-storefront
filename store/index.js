export const state = () => ({
  products: [],
  cart: [],
  checkout: {}
})

export const mutations = {
  setProducts (state, data) {
    state.products = data
  },
  setCheckout (state, data) {
    state.checkout = data
  },
  incrementCart (sate, index) {
    state.cart[index].count++
  },
  addCart (state, item) {
    item.count = 1
    state.cart.push(item)
  }
}

export const getters = {
  getCartItem: state => (id) => {
    return state.cart.filter(item => (item.id === id))
  }
}

export const actions = {
  addItemToCart ({ commit, getters }, payload) {
    return new Promise((resolve) => {
      const element = getters.getCartItem(payload.id)
      // eslint-disable-next-line no-console
      console.log(element)
      if (element.length > 0) {
        commit('incrementCart', payload.id)
      } else {
        commit('addCart', payload)
      }
      resolve(getters.getCartItem(payload.id)[0])
    })
  }
}
