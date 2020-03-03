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
                    privacyPolicy {
                      title,
                      body
                    }
                  }
                }`
      }
    }).then((response) => {
      return {
        policy: response.data.data.shop.privacyPolicy
      }
    })
  },
  head () {
    return {
      title: 'Privacy Policy'
    }
  }
}
</script>

<style scoped>

</style>
