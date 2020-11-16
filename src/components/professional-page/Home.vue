<template>
  <div class="home-wrapper">
    <div class="profile-text-wrapper">
      <span class="quote-left-wrapper">
        <font-awesome-icon :icon="['fas', 'quote-left']" :style="{}" />
      </span>
      <span class="quote-right-wrapper">
        <font-awesome-icon :icon="['fas', 'quote-right']" :style="{}" />
      </span>
      Hello! I'm
      <span class="name">Sonish.</span>
      Welcome to my World!
    </div>
    <div class="post-title-wrapper">
      <div class="post-title">Software Engineer</div>
    </div>
    <div class="profile-image-wrapper">
      <img class="profile-image" :src="require(`@/assets/images/${homeData.profileImage}`)" alt />
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";

import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faQuoteRight, faQuoteLeft);
// required homeProps
const homePropsKeys = ["profileImage"];

export default {
  name: "Home",
  components: { FontAwesomeIcon },
  props: {
    homeData: {
      type: Object,
      required: true,
      validator: homeData => homePropsKeys.every(key => key in homeData)
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.home-wrapper {
  min-height: 88vh;
  width: 100%;
  background-repeat: no-repeat;
  background: linear-gradient(35deg, transparent 49.8%, $primary 50%) right/
      150% 100%,
    linear-gradient(to top left, $primary 49.8%, transparent 50%) right / 80%
      100%;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.4));
  position: relative;

  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .profile-image-wrapper {
    height: 300px;
    width: 250px;
    // border: 2px solid red;
    align-self: center;
    border-radius: 0.5rem;
    margin: 3rem;

    .profile-image {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 65% 50%;
      border-radius: inherit;
    }
  }

  .profile-text-wrapper {
    // border: 2px solid yellow;
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    // color: #7e7d80;
    background-color: rgba(155, 155, 155, 0.1);
    border-radius: 0.5rem;
    padding: 1rem;
    color: #fff;
    // white-space: nowrap;
    width: 20rem;
    // border: 2px solid yellow;
    align-self: center;
    position: relative;
    .name {
      // color: #7e7d80;
      white-space: nowrap !important;

      color: #938cb9;
      // display: inline-block;
    }

    .quote-left-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: -1.5rem;
      // margin-left: -1rem;
    }

    .quote-right-wrapper {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-bottom: -1rem;
    }
  }

  .post-title-wrapper {
    position: relative;
    margin-bottom: 1rem;
    width: 20rem;
    // border: 2px solid red;
    align-self: center;

    .post-title {
      color: white;
      position: absolute;
      font-family: "Poppins", sans-serif;
      top: 0.8rem;
      right: 0rem;
    }
  }
}
</style>
