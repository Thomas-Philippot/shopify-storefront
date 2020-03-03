<template>
  <div class="container">
    <policy-page
      :policy="policy"
    />
  </div>
</template>

<script>
import PolicyPage from '../../../components/PolicyPage'
export default {
  name: 'Index',
  components: {
    PolicyPage
  },
  asyncData ({ app }) {
    return app.$axios({
      method: 'POST',
      data: {
        query: `query {
                  shop {
                    refundPolicy {
                      title,
                      body
                    }
                  }
                }`
      }
    }).then((response) => {
      return {
        policy: response.data.data.shop.refundPolicy
      }
    })
  },
  head () {
    return {
      title: 'Refund Policy'
    }
  }
}
</script>

<style scoped>

</style>
