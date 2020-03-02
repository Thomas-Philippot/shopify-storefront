require('dotenv').config()
const axios = require("axios")
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00d1b2' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/bulma.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/moment' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-shopify',
    'nuxt-buefy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL,
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN,
      Accept: 'application/json'
    }
  },
  shopify: {
    domain: process.env.DOMAIN, // your shopify domain
    storefrontAccessToken: process.env.STOREFRONT_ACCESS_TOKEN// your shopify storefront access token
  },
  generate: {
    routes () {
      return axios({
        url: process.env.API_URL,
        method: 'POST',
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN,
          Accept: 'application/json'
        },
        data: {
          query: `query {
                    blogs (first: 250) {
                      edges {
                        node {
                          handle,
                          articles (first: 250) {
                            edges {
                              node {
                                handle
                              }
                            }
                          }
                        }
                      }
                    },
                    products (first: 250) {
                      edges {
                        node {
                          handle
                        }
                      }
                    },
                    collections (first: 250) {
                      edges {
                        node {
                          handle
                        }
                      }
                    }
                  }`
        }
      }).then((response) => {
        const res = []
        const blogRoutes = response.data.data.blogs.edges
        const productRoutes = response.data.data.products.edges
        const CollectionRoutes = response.data.data.collections.edges
        blogRoutes.forEach((blog) => {
          blog.node.articles.edges.forEach((article) => {
            res.push('/blog/' + blog.node.handle + '/article/' + article.node.handle)
          })
        })
        productRoutes.forEach((product) => {
          res.push('/products/' + product.node.handle)
        })
        CollectionRoutes.forEach((collection) => {
          res.push('/collection/' + collection.node.handle)
        })
        return res
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
