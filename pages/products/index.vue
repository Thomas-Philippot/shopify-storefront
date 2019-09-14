<template>
  <div class="full-width">
    <h1>Here are the products</h1>
    <el-row :gutter="20">
      <el-col v-for="product in products" :key="product.id" :span="6">
        <el-card :body-style="{ padding: '0px' }" :header="product.title">
          <img :src="product.images[0].src" class="image">
          <div style="padding: 14px;">
            <div class="description">{{ product.description.substr(0, 150) }}...</div>
            <div class="bottom">
              <el-row>
                <nuxt-link :to="'/products/' + product.handle">
                  <el-button class="button" round type="primary">
                    Voir
                  </el-button>
                </nuxt-link>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  async asyncData ({ $shopify }) {
    const products = await $shopify.product.fetchAll()
    return { products }
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
