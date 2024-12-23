<script setup>
import SkillItem from './SkillItem.vue'
</script>

<template>
  <div id="about-page" class="page">
    <div id="about-section" class="grid-item">
      <p class="title">About</p>
      <img src="../assets/profile-pic.png" alt="Profile Picture" class="pfp"/>
      <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="vl"></div>
    <div id="skills-section" class="grid-item">
      <p class="title">Skills</p>
      <div id="skills-grid">
        <div class="skills-col">
          <SkillItem>
            <template #icon>
              <img src="../assets/java.svg" alt="Java" class="skill">
            </template>
          </SkillItem>
          <SkillItem>
            <template #icon>
              <img src="../assets/spring.svg" alt="Spring Boot" class="skill">
            </template>
          </SkillItem>
        </div>
        <div class="skills-col">
          <SkillItem>
            <template #icon>
              <img src="../assets/css.svg" alt="CSS" class="skill">
            </template>
          </SkillItem>
          <SkillItem>
            <template #icon>
              <img src="../assets/html.svg" alt="HTML" class="skill">
            </template>
          </SkillItem>
          <SkillItem>
            <template #icon>
              <img src="../assets/vue.svg" alt="Vue" class="skill">
            </template>
          </SkillItem>
          <SkillItem>
            <template #icon>
              <img src="../assets/git.svg" alt="Git" class="skill">
            </template>
          </SkillItem>
        </div>
        <div class="skills-col">
          <SkillItem>
            <template #icon>
              <img src="../assets/python.svg" alt="Python" class="skill">
            </template>
          </SkillItem>
          <SkillItem>
            <template #icon>
              <img src="../assets/mysql.svg" alt="MySQL" class="skill">
            </template>
          </SkillItem>
        </div>
      </div>
    </div>
  </div>
</template>
