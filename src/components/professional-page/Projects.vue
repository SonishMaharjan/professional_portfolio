<template>
  <div class="project-container container">
    vuel projects
    <ImageBox>
      <template v-slot:heading>Hello</template>
      <template v-slot:description>
        autem amet voluptatem quos libero eaque nesciunt!
        lrorem
        <div class="button-list">
          <a href="https://github.com" target="_blank">
            <button class="btn btn-light project-icon-btn">
              <font-awesome-icon class="icon" :icon="['fab', 'github']" />
            </button>
          </a>
        </div>
      </template>
    </ImageBox>
  </div>
</template>

<script>
import ImageBox from "@/components/ImageBox";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub);

export default {
  name: "Projects",
  components: { ImageBox, FontAwesomeIcon }
};
</script>

<style lang="scss" scoped>
.project-container {
  .project-icon-btn {
    // border: 5px solid red;
    padding: 0.1rem;
    margin: 1rem;
    // background: yellow;

    .icon {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
