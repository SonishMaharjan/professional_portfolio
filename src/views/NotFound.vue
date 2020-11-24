<template>
  <div class="not-found-wrapper">
    Sorry, Page Not found.
    Go to
    <a class="home-link" href="/">Home</a>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped lang="scss">
.not-found-wrapper {
  color: $primary;
  margin: 3rem;
  // border: 50px solid $primary;

  .home-link {
    color: #938cb9;
    text-decoration: underline;
  }
}
</style>
