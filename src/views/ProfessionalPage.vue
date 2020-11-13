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
  </div>
</template>

<script>
import Navbar from "@/components/professional-page/Navbar";
export default {
  name: "ProfessionalPage",
  components: { Navbar }
};
</script>

<style></style>
