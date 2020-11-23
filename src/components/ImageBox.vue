<template>
  <div
    class="image-box-wrapper"
    @mouseenter="showImgDescription = true"
    @mouseleave="showImgDescription = false"
  >
    <img class="img-container" :src="require('@/assets/images/sonish_profile.jpg')" alt />
    <transition name="description">
      <div v-if="showImgDescription" class="image-description">
        <h4 class="heading">
          <slot name="heading"></slot>
        </h4>

        <div class="description">
          <slot name="description"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ImageBox",
  data: () => {
    return { showImgDescription: false };
  }
};
</script>

<style lang="scss" scoped>
.image-box-wrapper {
  width: 15rem;
  height: 18rem;
  border-radius: 10px;
  position: relative;
  margin: 2rem;
  transition: transform 0.5s ease-in-out;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.4);

  &:before {
    content: "";
    border-radius: inherit;
    position: absolute;

    height: 100%;
    width: 100%;
    // background: blue;
    transition: background 0.5s;
  }

  &:hover:before {
    background: rgba($color: $primary, $alpha: 0.8);
  }

  .img-container {
    border-radius: inherit;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-description {
    // border: 2px solid yellow;
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    // display: none;
    transform: translateY(-50%);
    .heading {
      margin: 1rem;
    }
  }

  .description {
    margin: 1rem;
    font-size: 0.8rem;
    // color: red;
  }

  &:hover {
    transform: scale(1.1) translateY(-10px);
  }

  // vue animation
  .description-enter-active,
  .description-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }

  .description-enter,
  .description-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
