<template>
  <div class="professional-page-wrapper">
    <Navbar></Navbar>

    <div class="professional-page-container" v-scroll-spy="{offset: 80}">
      <div class="section home-section">
        <Home :homeData="homeData"></Home>
      </div>
      <div class="section">
        <About :aboutData="aboutData"></About>
      </div>
      <div>
        <Projects></Projects>
      </div>
      <div>
        <h1>Header 2</h1>
        <p>blog</p>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
    <font-awesome-icon :icon="['fab', 'linkedin']" />
    <font-awesome-icon :icon="['fab', 'github']" />
    <font-awesome-icon :icon="['fab', 'skype']" />
    <font-awesome-icon :icon="['fab', 'facebook']" />
    <font-awesome-icon :icon="['fab', 'twitter']" />
    <font-awesome-icon :icon="['fab', 'instagram']" />
    <font-awesome-icon :icon="['fas', 'desktop']" :style="{ color: 'red' }" />
  </div>
</template>

<script>
import Navbar from "@/components/professional-page/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
  faSkype,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
  faDesktop,
  faQuoteRight,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Home from "@/components/professional-page/Home";
import About from "@/components/professional-page/About";
import Contact from "@/components/professional-page/Contact";
import Projects from "@/components/professional-page/Projects";

import data from "@/.data/data.js";

library.add(
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
  faSkype,
  faInstagram,
  faDesktop,
  faQuoteRight,
  faQuoteLeft
);
// library.add(faLinkedin);

export default {
  name: "ProfessionalPage",
  components: { Navbar, Home, FontAwesomeIcon, About, Contact, Projects },
  data() {
    return {
      homeData: {
        profileImage: data.profileImage,
        profileText: ""
      },
      aboutData: {
        techLogos: data.techLogos,
        skills: data.skills,
        education: data.education
      }
    };
  }
};
</script>

<style scoped lang="scss">
.professional-page-wrapper {
  .professional-page-container {
    margin-top: 3.5rem;

    .section {
      margin: 3rem 0;
      // border: 2px solid red;
    }
  }
}
</style>
