export const state = () => ({
  products: [],
  cart: []
})

export const mutations = {
  setProducts (state, data) {
    state.products = data
  },
  addToCart (state, item) {
    const element = state.cart.filter(el => el.id === item.id)
    if (element.length > 0) {
      const index = state.cart.indexOf(element[0])
      // eslint-disable-next-line no-console
      console.log(index)
      state.cart[index].count++
    } else {
      item.count = 1
      state.cart.push(item)
    }
  }
}
