<template>
  <footer class="footer">
    <div class="content has-text-light">
      <div class="columns">
        <div class="column has-text-centered">
          <p class="footer-link">
            Made with ❤️, 🍺 and ☕ by <a href="https://github.com/thomas-philippot"> Thomas Philippot</a>
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <p class="footer-link-title">
            Newsletter
          </p>
        </div>
        <div class="column is-4">
          <p class="is-size-5">
            Policy
          </p>
          <p class="footer-link">
            <nuxt-link to="/policy/privacy-policy">
              Privacy Policy
            </nuxt-link>
          </p>
          <p class="footer-link">
            <nuxt-link to="/policy/refund-policy">
              Refund Policy
            </nuxt-link>
          </p>
          <p class="footer-link">
            <nuxt-link to="/policy/terms-of-service">
              Terms of service
            </nuxt-link>
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
