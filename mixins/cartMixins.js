export default {
  methods: {
    addToCart (product) {
      this.$store.commit('addToCart', product)
      this.$buefy.toast.open({
        message: 'Product added',
        type: 'is-success'
      })
    }
  }
}
