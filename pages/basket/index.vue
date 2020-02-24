<template>
  <div>
    <h1>Panier</h1>
    <b-button
      type="is-primary"
      @click="confirmCheckout"
    >
      Checkout
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    checkout () {
      return this.$store.state.checkout
    }
  },
  methods: {
    confirmCheckout () {
      this.$shopify.checkout.create().then((checkout) => {
        // eslint-disable-next-line no-console
        console.log(checkout)

        this.$store.state.cart.forEach((item) => {
          const lineItemsToAdd = {
            variantId: item.variants[0].id,
            quantity: item.count
          }
          // Add an item to the checkout
          this.$shopify.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
          })
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
