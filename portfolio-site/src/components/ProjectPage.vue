<script setup>
import ProjectItem from './ProjectItem.vue'
</script>

<template>
  <div id="project" class="page">
    <p class="title">Projects</p>
    <p class="sub title">Click the project to redirect to Github (If available)</p>
    <div id="proj-item">
      <a href="https://github.com/ZhiLinR/SMU-CS203">
        <ProjectItem>
          <template #image>
            <img src="../assets/checkm8.png" alt="Project 1" />
          </template>
          <template #title>
            <h4>Project 1</h4>
          </template>
          <template #desc>
            <p>Project 1 Description</p>
          </template>
        </ProjectItem>
      </a>

      <ProjectItem>
        <template #image>
          <img src="../assets/checkm8.png" alt="Project 1" />
        </template>
        <template #title>
          <h4>Project 1</h4>
        </template>
        <template #desc>
          <p>Project 1 Description</p>
        </template>
      </ProjectItem>

      <ProjectItem>
        <template #image>
          <img src="../assets/checkm8.png" alt="Project 1" />
        </template>
        <template #title>
          <h4>Project 1</h4>
        </template>
        <template #desc>
          <p>Project 1 Description</p>
        </template>
      </ProjectItem>

    </div>
  </div>
</template>

<style lang="scss" scoped>
#project {
  text-align: center;
  vertical-align: top;
}

.sub {
  font-size: 1rem; /* Adjust font size as needed */
  color: lightgray;
}

img {
  width: 50vw;  /* Make image width 100% of its container */
}

</style>