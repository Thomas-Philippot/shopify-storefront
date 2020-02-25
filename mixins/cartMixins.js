export default {
  computed: {
    checkout () {
      return this.$store.state.checkout
    },
    cart () {
      return this.$store.state.cart
    }
  },
  methods: {
    addToCart (id, quantity) {
      const lineItemsToAdd = {
        variantId: id,
        quantity
      }
      // Add an item to the checkout
      this.$shopify.checkout.addLineItems(this.checkout.id, lineItemsToAdd).then((checkout) => {
        this.$store.commit('setCheckout', checkout)
      })
      this.$buefy.toast.open({
        message: 'Product added',
        type: 'is-success'
      })
    },
    deleteItem (id) {
      this.$shopify.checkout.removeLineItems(this.checkout.id, id).then((checkout) => {
        this.$store.commit('setCheckout', checkout)
      })
    }
  }
}
