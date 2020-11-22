<template>
  <div class="contact-wrapper">
    <div class="contact-container container">
      <div class="contact-section">
        <div class="contact-description-wrapper">
          <h2 class="contact-title">Contact</h2>
        </div>
        <!-- place it here when moving find me  -->
        <!-- between here -->
      </div>
      <div class="write-to-me-section">
        <!-- later move this to above div when write me is added -->
        <div class="find-me-wrapper">
          <div class="contact-description-wrapper">
            <p class="contact-description">
              Connect me via
              <span class="connect-media">Skype</span> or email:
              <span class="connect-media">sonishmzn95@gmail.com</span>
            </p>
          </div>
          <h5 class="find-me-title">Find Me</h5>
          <div class="icon-list">
            <IconLink href="https://github.com/SonishMaharjan/" targetBlank>
              <font-awesome-icon class="icon" :icon="['fab', 'github']" />
            </IconLink>
            <IconLink href="https://linkedin.com/in/sonish-maharjan/" targetBlank>
              <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
            </IconLink>
            <IconLink href="https://join.skype.com/invite/XjLkq1hPXi8T" targetBlank>
              <font-awesome-icon class="icon" :icon="['fab', 'skype']" />
            </IconLink>

            <IconLink href="https://instagram.com/sonish_maharjan/" targetBlank>
              <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
            </IconLink>
            <IconLink href="https://facebook.com/sonish.97" targetBlank>
              <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
            </IconLink>
          </div>
        </div>
        <!--move upto here -->
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from "@/components/IconLink";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
  faSkype,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faGithub, faTwitter, faFacebook, faSkype, faInstagram);

export default {
  name: "Contact",
  components: { FontAwesomeIcon, IconLink }
};
</script>

<style scoped lang="scss">
.contact-wrapper {
  background: $primary;
  padding: 1rem;

  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .contact-section {
      .contact-description-wrapper {
        .contact-title {
          font-weight: bold;
          font-family: "Poppins", sans-serif;
          position: relative;
          text-align: left;
          color: #fff;
          // border: 2px solid yellow;
          display: inline-block;
          margin: 2rem;

          &::before {
            content: "";
            position: absolute;
            top: 2.5rem;
            bottom: 0;
            border-bottom: 5px solid #eee;
            width: 2rem;
          }
        }
        //uncomment this if you put this in first flex item
        // .contact-description {
        //   color: $custom-light-blue;

        //   .connect-media {
        //     font-weight: bold;
        //   }
        // }
      }
    }

    .write-to-me-section {
      .contact-description-wrapper {
        .contact-description {
          color: $custom-light-blue;

          .connect-media {
            font-weight: bold;
          }
        }
      }

      .find-me-wrapper {
        .find-me-title {
          color: #fff;
          display: inline-block;

          position: relative;

          &::before {
            content: "";
            position: absolute;
            top: 0.7rem;
            // bottom: 0;
            left: -3.5rem;
            border-bottom: 2px solid #fff;
            width: 3rem;
          }

          &::after {
            content: "";
            position: absolute;
            top: 0.7rem;
            // bottom: 0;
            right: -3.5rem;
            border-bottom: 2px solid #fff;
            width: 3rem;
          }
        }
      }
    }
  }

  .write-to-me-section {
    .find-me-wrapper {
      margin-bottom: 1rem;
      .icon-list {
        // border: 2px solid red;

        .icon {
          margin: 0 0.5rem;
          color: #fff;
          height: 1.5rem;
          width: 1.5rem;

          &:hover {
            cursor: pointer;
            color: $custom-light-blue;
          }
        }
      }
    }
  }
}
</style>
