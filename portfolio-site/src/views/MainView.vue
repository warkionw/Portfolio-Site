<script setup>
import Navbar from '../components/NavBar.vue'

import IntroPage from '../components/IntroPage.vue'
import AboutPage from '../components/AboutPage.vue'
import ProjectPage from '../components/ProjectPage.vue'
import ContactPage from '../components/ContactPage.vue'
</script>

<template>
  <main class="full-page-container">
    <Navbar />

    <div class="scroll-container">
      <section class="snap-section">
        <IntroPage />
      </section>
      <section class="snap-section">
        <AboutPage />
      </section>
      <section class="snap-section project-section">
        <ProjectPage />
      </section>
      <section class="snap-section">
        <ContactPage />
      </section>
    </div>
  </main>
</template>