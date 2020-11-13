<template>
  <li class="nav-item">
    <a class="nav-link custom-link " :href="href">{{ label }}</a>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    label: {
      type: String,
      required: true
    },
    href: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-item {
  margin: 0 0.5rem;
  .nav-link {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: bold;

    &.custom-link {
      color: #938cb9;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
