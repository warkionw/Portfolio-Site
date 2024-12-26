<script setup>
import SkillItem from './SkillItem.vue'
</script>

<template>
  <div id="about-page" class="page">
    <div id="about-section" class="grid-item">
      <p class="title">About</p>
      <img src="../assets/profile-pic.png" alt="Profile Picture" class="pfp"/>
      <p class="bio">I'm a penultimate Software Engineering Student in SMU. I am interested in seeing how technology works and how it can be applied in real world applications.</p>
      <br />
      <p class="bio">To expand my knowledge and interests, I am taking a 2nd major in Cybersecurity, as well as taking courses to understand AI.</p>

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
