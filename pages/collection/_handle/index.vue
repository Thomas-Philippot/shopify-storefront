<template>
  <div>
    <section class="hero is-medium is-info" style="margin-bottom: 2rem">
      <div
        class="hero-body"
        :style="{
          backgroundImage: (collection.image === null) ? '' : `url(${collection.image.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }"
      >
        <div class="container has-text-centered">
          <h1 class="title is-shadow">
            {{ collection.title }}
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="articles section">
        <div class="card article">
          <div class="card-content">
            <div class="content article-body">
              <p v-html="collection.descriptionHtml" />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="is-size-4">Products in this collection</h2>
            </div>
          </div>
          <product-card-list
            :products="collection.products"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProductCardList from '../../../components/ProductCardList'
export default {
  layout: 'noContainer',
  components: {
    ProductCardList
  },
  asyncData ({ $shopify, params }) {
    return $shopify.collection.fetchByHandle(params.handle).then((collection) => {
      return {
        collection
      }
    })
  }
}
</script>

<style scoped>
  .container {
    margin-bottom: 2.5rem;
  }
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
  @media screen and (min-width: 768px) {
    .article-body {
      margin: 0 6rem;
    }
  }
  .article-body {
    line-height: 1.4;
  }
  .hero-body {
    height: 500px;
  }
</style>
