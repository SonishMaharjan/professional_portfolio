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
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-light">
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

          <div class="my-2 d-flex flex my-lg-0">
            <span>link</span>
            <span>git</span>
          </div>

          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Resume</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import NavItem from "@/components/NavItem";
export default {
  name: "Navbar",
  components: { NavItem }
};
</script>

<style lang="scss">
span {
  color: white;
  display: block;
}
</style>
