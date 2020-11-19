<template>
  <div class="about-wrapper">
    <div class="work-with">
      <h3 class="work-with-title">I Work With</h3>
      <ul class="work-with-list">
        <li
          class="work-with-image-wrapper"
          v-for="(techLogo, index) in aboutData.techLogos"
          :key="index"
        >
          <img class="work-with-image" :src="require(`@/assets/logos/${techLogo.imgUrl}`)" alt />
        </li>
      </ul>
    </div>
    <div class="work-description">
      <h2>About me</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    aboutData: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped lang="scss" >
.about-wrapper {
  .work-with-title {
    font-weight: bold;
  }
  .work-with-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    flex-wrap: wrap;
    .work-with-image-wrapper {
      height: 5rem;
      margin: 3rem;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
