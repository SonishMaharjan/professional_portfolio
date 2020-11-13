<template>
  <a :href="href" :target="targetBlank ? '_blank' : false">
    <slot> </slot>
  </a>
</template>

<script>
export default {
  name: "IconLink",
  props: {
    href: {
      type: String,
      default: "#"
    },
    targetBlank: {
      type: Boolean
    }
  }
};
</script>

<style></style>
