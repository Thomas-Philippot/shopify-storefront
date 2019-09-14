<template>
  <div>
    <the-navbar />
    <el-container>
      <nuxt />
    </el-container>
  </div>
</template>

<style>
</style>
<script>
import TheNavbar from '../components/TheNavbar'
export default {
  components: { TheNavbar }
}
</script>

<style>
  body {
    margin: 0;
  }

  .el-container {
    padding: 1rem 5rem;
  }
</style>
