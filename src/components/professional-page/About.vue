<template>
  <div class="about-wrapper">
    <div class="work-with container">
      <h3 class="work-with-title">My Tech-Stack</h3>
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
    <div class="about-me-section-wrapper">
      <div class="about-me-left">
        <h2 class="about-me-title">About me</h2>
        <p
          class="about-me-description"
        >Hi, I'm full stack engineer from Kathmandu, Nepal with about 2 years of experience in software development.</p>
      </div>
      <div class="about-me-right">
        <div class="tab-content">
          <TabsContent :skills="aboutData.skills" :education="aboutData.education"></TabsContent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabsContent from "@/components/tabs-content/TabsContent";
export default {
  name: "About",
  components: { TabsContent },
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
  // padding-bottom: 0;

  .work-with-title {
    font-weight: bold;
    color: $primary;
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

  .about-me-section-wrapper {
    // height: 100%;
    background: $primary;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem 0rem;

    @include md {
      flex-direction: row;
      justify-content: space-evenly;
      // align-items: center;
    }

    .about-me-left {
      // flex-basis: 100%;
      // color: red;
      @include md {
        width: 30%;
        // height: 30%;
        // align-items: center;
        // border: 2px solid yellow;
        // padding-right: 2rem;
      }

      .about-me-title {
        @include section-header(#fff);
      }

      .about-me-description {
        margin: 2rem 0;
        text-align: left;
      }
    }
    .about-me-right {
      // width: 100%;
      @include md {
        width: 50%;
        // padding-right: 2rem;
        // border: 2px solid red;
      }
    }
  }
}
</style>
