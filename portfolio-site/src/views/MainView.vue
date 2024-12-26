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

    <IntroPage />
    <AboutPage />
    <ProjectPage />
    <ContactPage />
  </main>
</template>