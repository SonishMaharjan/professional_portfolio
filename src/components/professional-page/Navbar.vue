<template>
  <div class="navbar-wrapper">
    <!-- <ul >
      <li>
        <a>Menu 1</a>
      </li>
      <li>
        <a>Menu 2</a>
      </li>
    </ul>-->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div class="container d-flex flex-row-reverse">
        <button
          class="navbar-toggler pull-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" v-scroll-spy-active v-scroll-spy-link>
            <NavItem label="Home"></NavItem>
            <NavItem label="About"></NavItem>
            <NavItem label="Portfolio"></NavItem>
            <NavItem label="Blog"></NavItem>
            <NavItem label="Contact"></NavItem>
          </ul>

          <div
            class="my-2 d-flex flex my-lg-0 justify-content-center icons-wrapper"
          >
            <IconLink
              href="https://www.linkedin.com/in/sonish-maharjan/"
              targetBlank
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="icon linkedin-icon"
              />
            </IconLink>

            <IconLink href="https://github.com/SonishMaharjan/" targetBlank>
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="icon github-icon"
              />
            </IconLink>
          </div>

          <button
            class="btn btn-outline-light my-2 my-sm-0 resume-button"
            type="submit"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import NavItem from "@/components/NavItem";
import IconLink from "@/components/IconLink";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faGithub);
export default {
  name: "Navbar",
  components: { NavItem, IconLink, FontAwesomeIcon }
};
</script>

<style lang="scss">
span {
  color: white;
  display: block;
}

.icons-wrapper {
  padding-top: 0.3rem;
  // border: 3px solid yellow;

  .icon {
    margin: 0.5rem;

    &.github-icon {
      color: #fff;
      height: 25px;
      width: 25px;

      &:hover {
        color: #ccc;
      }
    }

    &.linkedin-icon {
      color: #007bb5;
      height: 25px;
      width: 25px;

      &:hover {
        color: #06a;
      }
    }
  }
}

.resume-button {
  color: black;
  font-family: "Montserrat", sans-serif;
  // font-size: 2rem;
  font-weight: 1000 !important;
  margin: 0 0.5rem;

  &:hover {
    opacity: 0.9;
  }
}
</style>
