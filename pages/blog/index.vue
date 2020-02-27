<template>
  <div>
    <h1>Blog</h1>
    {{ articles }}
  </div>
</template>

<script>
export default {
  name: 'Index',
  asyncData ({ app }) {
    return app.$axios.get('https://home-deco35.myshopify.com/admin/api/2020-01/articles.json', {
      headers: {
        'X-Shopify-Access-Token': '99804a726edfba831c6671c3b66f413a'
      }
    }).then((response) => {
      return {
        articles: response.data
      }
    })
  }
}
</script>

<style scoped>

</style>
