export default {
  methods: {
    addToCart (product, checkout) {
      // add to cart
      this.$store.dispatch('addItemToCart', product).then((item) => {
        // eslint-disable-next-line no-console
        console.log('item : ', item)
        const lineItemsToAdd = {
          variantId: item.variants[0].id,
          quantity: item.count
        }
        // Add an item to the checkout
        this.$shopify.checkout.addLineItems(checkout.id, lineItemsToAdd)
        this.$buefy.toast.open({
          message: 'Product added',
          type: 'is-success'
        })
      })
    }
  }
}
