<template>
  <div class="project-wrapper">
    <h2 class="projects-title">Projects</h2>
    <p class="projects-description">Here are some of my projects.</p>

    <div class="project-container container">
      <ImageBox v-for="project in projectsList" :key="project.name">
        <template v-slot:heading>{{ project.title }}</template>
        <template v-slot:description>
          {{ project.description }}
          <div class="button-list">
            <a :href="project.githubUrl" target="_blank">
              <button class="btn btn-light project-icon-btn">
                <font-awesome-icon class="icon" :icon="['fab', 'github']" />
              </button>
            </a>
          </div>
        </template>
      </ImageBox>
    </div>
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
  components: { ImageBox, FontAwesomeIcon },
  props: {
    projectsData: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return { projectsList: this.projectsData.projectsList };
  }
};
</script>

<style lang="scss" scoped>
.project-wrapper {
  .project-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

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

  .projects-title {
    @include section-header($primary);
    text-align: center;
  }

  .projects-description {
  }
}
</style>
