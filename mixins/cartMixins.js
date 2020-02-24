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
    addToCart (product, checkout) {
      // add to cart
      this.$store.dispatch('addItemToCart', product).then((item) => {
        const lineItemsToAdd = {
          variantId: item.variants[0].id,
          quantity: 1
        }
        // Add an item to the checkout
        this.$shopify.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
          this.$store.commit('setCheckout', checkout)
        })
        this.$buefy.toast.open({
          message: 'Product added',
          type: 'is-success'
        })
      })
    }
  }
}
