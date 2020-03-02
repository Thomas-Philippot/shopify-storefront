<template>
  <div class="columns">
    <div class="column">
      <h1>{{ policy.title }}</h1>
      <div v-html="policy.body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PolicyPage',
  props: {
    policy: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
