<template>
  <div class="container">
    Article {{ params }}
    {{ article }}
  </div>
</template>

<script>
export default {
  name: 'Index',
  asyncData ({ app, params }) {
    return app.$axios({
      method: 'POST',
      data: {
        query: `query {
                  blogByHandle (handle:"${params.handle}") {
                    title,
                    handle
                    articleByHandle (handle: "${params.articleHandle}") {
                      title,
                      contentHtml
                      authorV2 {
                        bio,
                        firstName,
                        lastName
                      },
                      image (maxWidth: 2000) {
                        altText,
                        originalSrc
                      }
                    }
                  }
                }`
      }
    }).then((response) => {
      return {
        article: response.data.data.blogByHandle.articleByHandle
      }
    })
  }
}
</script>

<style scoped>
</style>
