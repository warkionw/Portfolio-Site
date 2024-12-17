<script setup>
import ProjectItem from './ProjectItem.vue'
</script>

<template>
  <div id="project" class="page">
    <p class="title">Projects</p>
    <p class="sub title">Click the project to redirect to Github (If available)</p>
    <div id="proj-item">

    </div>
  </div>
</template>

<style scoped>
#project {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  vertical-align: top;

}

.sub {
  font-size: 1rem; /* Adjust font size as needed */
  color: lightgray;
}


</style>