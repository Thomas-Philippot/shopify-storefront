<template>
  <div class="container">
    <div v-if="checkout.lineItems.length === 0">
      <div class="column">
        <h1 class="is-size-1">
          Empty Cart
        </h1>
      </div>
    </div>
    <div v-else>
      <div class="columns">
        <div class="column">
          <h1 class="is-size-1">
            Cart
          </h1>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <b-table :data="checkout.lineItems">
                <template slot-scope="props">
                  <b-table-column field="image" label="Image">
                    <figure class="image is-96x96">
                      <img class="is-rounded" :src="props.row.variant.image.src" :alt="props.row.description">
                    </figure>
                  </b-table-column>
                  <b-table-column field="title" label="Title">
                    <p class="title">
                      {{ props.row.title }}
                    </p>
                  </b-table-column>
                  <b-table-column field="price" label="Price">
                    {{ props.row.variant.price }}€
                  </b-table-column>
                  <b-table-column field="quantity" label="Quantity">
                    {{ props.row.quantity }}
                  </b-table-column>
                  <b-table-column field="total" label="Total">
                    {{ getItemTotal(props.row) }} €
                  </b-table-column>
                  <b-table-column field="delete" label="Delete">
                    <b-button
                      class="is-danger"
                      icon-left="delete"
                      @click="deleteItem(props.row.id)"
                    >
                      Delete
                    </b-button>
                  </b-table-column>
                </template>
              </b-table>
              <div class="columns">
                <div class="column">
                </div>
                <div class="column is-2 is-pulled-right">
                  <p class="subtitle">
                    Subtotal : {{ checkout.subtotalPrice }} €
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-button
        type="is-primary"
        @click="confirmCheckout"
      >
        Checkout
      </b-button>
    </div>
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
      return item.variant.price * item.quantity
    }
  }
}
</script>

<style scoped>

</style>
