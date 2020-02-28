<template>
  <div class="container">
    <h1>{{ blog.title }}</h1>
    <blog-card-list
      :blog="blog"
    />
  </div>
</template>

<script>
import BlogCardList from '../../../components/BlogCardList'
export default {
  name: 'Index',
  components: {
    BlogCardList
  },
  asyncData ({ app, params }) {
    return app.$axios({
      method: 'POST',
      data: {
        query: `query {
          blogByHandle (handle:"${params.handle}") {
            title,
            handle,
            articles(first: 250) {
              edges {
                node {
                  id,
                  title,
                  handle,
                  publishedAt,
                  excerpt,
                  tags,
                  image (maxWidth: 768) {
                    originalSrc,
                    altText
                  }
                }
              }
            }
          }
        }`
      }
    }).then((response) => {
      return {
        blog: response.data.data.blogByHandle
      }
    })
  }
}
</script>

<style scoped>
</style>
