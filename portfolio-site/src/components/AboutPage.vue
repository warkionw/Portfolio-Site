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

<style scoped>

#about-page {
  display: grid;
  grid-template-columns: 1.25fr 0.1fr 1fr; /* Three columns: left, divider, right */
  grid-template-rows: 1fr; /* Single row spanning full height */
}

.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  height: 60%;
}

#about-section {
  grid-column: 1; /* First column */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  /* Align title to the top */
  align-items: center;         /* Center content horizontally */
}

#skills-section {
  grid-column: 3; /* Third column */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  /* Align title to the top */
  align-items: center;         /* Center content horizontally */
}

.vl {
  grid-column: 2; /* Middle column for vertical line */
  border-left: 2px solid white;
  height: 60%; /* Match grid container height */
  justify-self: center; /* Center horizontally within the column */
  align-self: center; /* Center vertically within the column */
}

#skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr; /* Single row spanning full height */
  gap: 10px;
  justify-items: center;   /* Center the items horizontally within each grid cell */
  align-items: center;     /* Center the items vertically within the grid cells */
  width: 100%;             /* Make sure the grid takes the full width of the parent */
  height: 100%;
}

.bio {
  font-size: 1.2rem;
  color: white;
  text-align: justify;   /* Justify the bio text */
}

</style>