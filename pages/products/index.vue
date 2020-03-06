<template>
  <div class="container">
    <product-card-list
      :products="products"
    />
  </div>
</template>

<script>
import cartMixins from '../../mixins/cartMixins'
import ProductCardList from '../../components/ProductCardList'

export default {
  name: 'Index',
  components: {
    ProductCardList
  },
  mixins: [
    cartMixins
  ],
  async asyncData ({ $shopify, store }) {
    const products = await $shopify.product.fetchAll()
    store.commit('setProducts', products)
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  head () {
    return {
      title: this.$store.state.shop.name + ' | ' + 'Products'
    }
  }
}
</script>

<style scoped>
  .full-width {
    width: 100%;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .image {
    width: 100%;
    height: 15rem;
  }
  .description {
    margin-bottom: 1rem;
  }
</style>
