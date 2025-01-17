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
            <img src="../assets/checkm8.png" alt="CheckM8" />
          </template>
          <template #title>
            <h4>CheckM8</h4>
          </template>
          <template #desc>
            <p>A chess tournament management application, allowing users to sign up and join tournaments as well as admins to create and manage tournaments.</p>
            <br />
            <p><u>Mircoservices</u>: Spring Boot, NodeJS; <u>Database</u>: MySQL; <u>Frontend</u>: Vue.js</p>
            <br />
            <p>Skills: Java, Springboot, MySQL</p>
          </template>
        </ProjectItem>
      </a>

      <a href="https://github.com/warkionw/APD.github.io">
        <ProjectItem>
          <template #image>
            <img src="../assets/multi-threaded.png" alt="Middleware" />
          </template>
          <template #title>
            <h4>Multi-Threaded Middleware Microservice</h4>
          </template>
          <template #desc>
            <p>A multi-threaded Java application that is used to verify the validity of JWTs passed in and returns the claims if valid.</p>
            <br />
            <p>Skills: Java</p>
          </template>
        </ProjectItem>
      </a>

      <a href="https://github.com/warkionw/WAD2">
        <ProjectItem>
          <template #image>
            <img src="../assets/schedoo.png" alt="Schedoo" />
          </template>
          <template #title>
            <h4>Schedoo</h4>
          </template>
          <template #desc>
            <p>A monolitic scheduling application, allowing users to invite friends</p>
            <br />
            <p><u>Backend</u>: Firebase; <u>Frontend</u>: Vue.js</p>
            <br />
            <p>Skills: Vue.js</p>
          </template>
        </ProjectItem>
      </a>

      <a href="https://github.com/warkionw/Portfolio-Site">
        <ProjectItem>
          <template #image>
            <img src="../assets/portfolio-site.png" alt="Portfolio" />
          </template>
          <template #title>
            <h4>Portfolio Site</h4>
          </template>
          <template #desc>
            <p>A single page web application to display past projects</p>
            <br />
            <p><u>Frontend</u>: Vue.js, SCSS</p>
            <br />
            <p>Skills: Vue.js, SCSS</p>
          </template>
        </ProjectItem>
      </a>

    </div>
  </div>
</template>