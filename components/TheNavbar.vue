<template>
  <el-menu
    :default-active="activeIndex2"
    mode="horizontal"
  >
    <el-menu-item index="1" to="/">
      <nuxt-link to="/">
        Accueil
      </nuxt-link>
    </el-menu-item>
    <el-menu-item index="2">
      <nuxt-link to="/products">
        Produits
      </nuxt-link>
    </el-menu-item>
    <el-menu-item index="3">
      <nuxt-link to="/basket">
        Panier
      </nuxt-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'TheNavbar',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

  a {
    padding: 2rem 0;
  }
</style>
