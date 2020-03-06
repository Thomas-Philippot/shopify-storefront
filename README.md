# Shopify Storefront

> Nuxt js front-end integration for shopify store

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Configuration

Simply register these variable in a .env file

```dotenv
DOMAIN=<your-store.myshopify.com/>
STOREFRONT_ACCESS_TOKEN=<SHOPIFY STOREFRONT API ACCESS TOKEN>
API_URL=https://<DOMAIN>/api/2020-01/graphql
```
