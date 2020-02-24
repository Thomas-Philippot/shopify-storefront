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
  incrementCart (state, index) {
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
  addItemToCart ({ commit, getters, state }, payload) {
    return new Promise((resolve) => {
      const element = getters.getCartItem(payload.id)
      if (element.length > 0) {
        commit('incrementCart', state.cart.indexOf(element[0]))
      } else {
        commit('addCart', payload)
      }
      resolve(getters.getCartItem(payload.id)[0])
    })
  }
}
