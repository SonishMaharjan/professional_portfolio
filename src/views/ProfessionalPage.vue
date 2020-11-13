<template>
  <div class="professional-page-wrapper">
    <Navbar></Navbar>

    <div v-scroll-spy>
      <div style="height: 500px">
        <h1>Header 1</h1>
        <p>Content</p>
      </div>
      <div style="height: 500px">
        <h1>Header 2</h1>
        <p>Content</p>
      </div>
      <div style="height: 500px">
        <h1>Header 2</h1>
        <p>Porgfoki</p>
      </div>
      <div style="height: 500px">
        <h1>Header 2</h1>
        <p>blog</p>
      </div>
      <div style="height: 500px">
        <h1>Header 2</h1>
        <p>C contack</p>
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

import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
  faSkype,
  faInstagram,
  faDesktop
);
// library.add(faLinkedin);

export default {
  name: "ProfessionalPage",
  components: { Navbar, FontAwesomeIcon }
};
</script>

<style></style>
