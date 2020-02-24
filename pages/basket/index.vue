<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="is-size-1">
          Panier
        </h1>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-table :data="cart">
          <template slot-scope="props">
            <b-table-column field="image" label="Image">
              <figure class="image is-96x96">
                <img class="is-rounded" :src="props.row.images[0].src" :alt="props.row.description">
              </figure>
            </b-table-column>
            <b-table-column field="title" label="Title">
              <p class="title">{{ props.row.title }}</p>
            </b-table-column>
            <b-table-column field="description" label="Description">
              <p class="subtitle">{{ props.row.description }}</p>
            </b-table-column>
            <b-table-column field="price" label="Price">
              {{ props.row.variants[0].price }} €
            </b-table-column>
            <b-table-column field="quantity" label="Quantity">
              {{ props.row.count }}
            </b-table-column>
            <b-table-column field="total" label="Total">
              {{ getItemTotal(props.row) }} €
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
    <b-button
      type="is-primary"
      @click="confirmCheckout"
    >
      Checkout
    </b-button>
  </div>
</template>

<script>
import cartMixins from '../../mixins/cartMixins'

export default {
  name: 'Index',
  mixins: [cartMixins],
  methods: {
    confirmCheckout () {
      window.open(this.$store.state.checkout.webUrl)
    },
    getItemTotal (item) {
      return item.variants[0].price * item.count
    }
  }
}
</script>

<style scoped>

</style>
