<template>
  <div>
    <section class="hero is-info is-medium is-bold">
      <div
        class="hero-body"
        :style="{
          backgroundImage: (article.image === null) ? '' : `url(${article.image.originalSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }"
      />
    </section>
    <div class="container">
      <section class="articles">
        <div class="card article">
          <div class="card-content">
            <div class="media">
              <div class="media-content has-text-centered">
                <p class="title article-title">{{ article.title }}</p>
                <div class="tags has-addons level-item">
                  <span class="tag is-rounded is-info">@{{ article.authorV2.name }}</span>
                  <span class="tag is-rounded">{{ $moment(article.publishedAt).format('DD MMMM Y') }}</span>
                </div>
              </div>
            </div>
            <div class="content article-body">
              <p v-html="article.contentHtml" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'noContainer',
  asyncData ({ app, params }) {
    return app.$axios({
      method: 'POST',
      data: {
        query: `query {
                  blogByHandle (handle:"${params.handle}") {
                    articleByHandle (handle: "${params.articleHandle}") {
                      title,
                      publishedAt,
                      contentHtml
                      authorV2 {
                        name
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
  .articles {
    margin: -200px 0 5rem;
  }
  .articles .content p {
    line-height: 1.9;
    margin: 15px 0;
  }
  .media-content {
    margin-top: 3rem;
  }
  .article {
    margin-top: 6rem;
  }
  .article-body {
    line-height: 1.4;
    margin: 0 6rem;
  }
  .hero-body {
    height: 500px;
  }
</style>
