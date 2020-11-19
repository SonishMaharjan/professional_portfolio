<template>
  <div class="home-wrapper">
    <div class="profile-text-wrapper">
      <span class="quote-left-wrapper">
        <font-awesome-icon :icon="['fas', 'quote-left']" :style="{}" />
      </span>
      <span class="quote-right-wrapper">
        <font-awesome-icon :icon="['fas', 'quote-right']" :style="{}" />
      </span>
      <div class="post-title">Software Engineer</div>Hello! I'm
      <span class="name">Sonish.</span>
      Welcome to my World!
    </div>
    <div class="profile-image-wrapper">
      <img
        class="profile-image"
        :src="require(`@/assets/images/${homeData.profileImage}`)"
        alt="Profile Image"
      />
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

  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include md {
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }

  .profile-image-wrapper {
    // h/w ratio
    height: 300px;
    width: 250px;

    @include md {
      height: 400px;
      width: 350px;
    }
    // border: 2px solid red;
    align-self: center;
    border-radius: 0.5rem;
    margin: 3rem;

    @include md {
      margin: 0rem;
      // margin-right: 2rem;
    }

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
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    // color: #7e7d80;
    background-color: rgba(155, 155, 155, 0.1);
    border-radius: 0.5rem;
    padding: 1.5rem;
    color: #fff;
    // white-space: nowrap;
    width: 20rem;

    @include md {
      padding: 2rem;
    }
    @include lg {
      width: 30rem;
      font-size: 2.5rem;
    }

    // border: 2px solid yellow;
    align-self: center;
    margin-bottom: 2rem;
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

      @include md {
        margin-top: -1.8rem;
      }
    }

    .quote-right-wrapper {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-bottom: -1rem;

      @include md {
        margin-bottom: -1.8rem;
      }
    }

    .post-title {
      color: white;
      position: absolute;
      font-family: "Poppins", sans-serif;
      bottom: -2.5rem;
      right: 0rem;
      font-size: 1rem;

      @include md {
        font-size: 1.2rem;
        bottom: -3.5rem;
        // margin-top: -1.8rem;
      }
    }
  }

  // .post-title-wrapper {
  //   position: relative;
  //   margin-bottom: 1rem;
  //   width: 20rem;
  //   // border: 2px solid red;
  //   align-self: center;

  // }
}
</style>
