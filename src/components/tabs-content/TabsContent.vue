/* eslint-disable no-unused-vars */
<template>
  <div class="tab-content-wrapper">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-main-skills-tab"
          data-toggle="tab"
          href="#nav-main-skills"
          role="tab"
          aria-controls="nav-main-skills"
          aria-selected="true"
        >Main Skills</a>
        <a
          class="nav-item nav-link"
          id="nav-education-tab"
          data-toggle="tab"
          href="#nav-education"
          role="tab"
          aria-controls="nav-education"
          aria-selected="false"
        >Education</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-main-skills"
        role="tabpanel"
        aria-labelledby="nav-main-skills-tab"
      >
        <ul class="key-value-list">
          <li v-for="(skill,index) in skills" :key="index" class="key-value-item">
            <span class="key-item">{{ skill.title }}:</span>
            <p class="value-item">{{ skill.skillSets.join(', ') }}</p>
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="nav-education"
        role="tabpanel"
        aria-labelledby="nav-education-tab"
      >
        <ul class="key-value-list">
          <li v-for="(degree,index) in education" :key="index" class="key-value-item">
            <!-- <span class="key-item"></span> -->
            <p class="value-item">
              <b>{{ degree.title }},</b>
              {{ degree.college }}
              <i>({{ degree.startYear }}- {{ degree.endYear }})</i>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsContent",
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    education: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="scss">
.tab-content-wrapper {
  // border: 2px solid red;
  .nav {
    display: flex;
    justify-content: space-evenly;
    border: none;
    .nav-link {
      color: $custom-light-blue;
      font-weight: bold;
      padding: 0 1px;

      &:hover {
        border: none;
        color: #fff;
      }

      &.active {
        color: #fff;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #fff;
      }
    }
  }

  .tab-content {
    margin: 1.5rem 0;
    text-align: left;

    .key-value-list {
      list-style: none;
      padding: 0;
      margin: 0 rem;

      .key-value-item {
        display: flex;

        margin: 0.2rem 0;
        .key-item {
          width: 6rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .value-item {
        }
      }
    }
  }
}
</style>
