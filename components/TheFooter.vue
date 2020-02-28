<template>
  <footer class="footer">
    <div class="content has-text-light">
      <div class="columns">
        <div class="column has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
            . The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <p class="footer-link-title">
            Newsletter
          </p>
          <p
            v-for="i in 5"
            :key="i"
            class="footer-link"
          >
            <a href="">link {{ i }}</a>
          </p>
        </div>
        <div class="column is-4">
          <p class="is-size-5">
            Policy
          </p>
        </div>
        <div class="column is-4">
          <p class="is-size-5">
            FAQ
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
  .footer-link-title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .footer-link {
    margin-top: .5rem;
    margin-bottom: 0 !important;
  }

</style>
