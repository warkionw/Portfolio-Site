<script setup>
import ProjectItem from './ProjectItem.vue';

import checkm8 from '@/assets/checkm8.png';
import multiThreaded from '@/assets/multi-threaded.png';
import schedoo from '@/assets/schedoo.png';
import canvaTnt from '@/assets/canva-tnt.png';

import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const config = {
  autoplay: 1000,
  wrapAround: true,
  itemsToShow: 4, // Ensure consistent number of items displayed
  pauseAutoplayOnHover: true,
};

// Cards data
const cards = [
  {
    link: 'https://github.com/ZhiLinR/SMU-CS203',
    image: checkm8,
    alt: 'CheckM8',
    title: 'CheckM8',
    desc: 'A chess tournament management application, allowing users to sign up and join tournaments as well as admins to create and manage tournaments.',
    details: 'Microservices: Spring Boot, NodeJS; Database: MySQL; Frontend: Vue.js',
    skills: 'Java, Springboot, MySQL',
  },
  {
    link: 'https://github.com/warkionw/Portfolio-Site',
    image: canvaTnt,
    alt: 'Portfolio',
    title: 'Portfolio Site',
    desc: 'A single-page web application to display past projects.',
    details: 'Frontend: Vue.js, SCSS',
    skills: 'Vue.js, SCSS',
  },
  {
    link: 'https://github.com/warkionw/APD.github.io',
    image: multiThreaded,
    alt: 'Middleware',
    title: 'Multi-Threaded Middleware Microservice',
    desc: 'A multi-threaded Java application that is used to verify the validity of JWTs passed in and returns the claims if valid.',
    details: null,
    skills: 'Java, MySQL',
  },
  {
    link: 'https://github.com/warkionw/WAD2',
    image: schedoo,
    alt: 'Schedoo',
    title: 'Schedoo',
    desc: 'A monolithic scheduling application, allowing users to invite friends.',
    details: 'Backend: Firebase; Frontend: Vue.js',
    skills: 'Vue.js',
  },
];
</script>

<template>
  <div id="project" class="page">
    <p class="title">Projects</p>
    <p class="sub title">Click the project to redirect to Github (If available)</p>
    <div id="proj-item">
      <Carousel v-bind="config">
        <Slide v-for="(card, index) in cards" :key="index">
          <a :href="card.link" target="_blank" rel="noopener noreferrer">
            <ProjectItem>
              <template #image>
                <img :src="card.image" :alt="card.alt" />
              </template>
              <template #title>
                <h4>{{ card.title }}</h4>
              </template>
              <template #desc>
                <p>{{ card.desc }}</p>
                <br />
                <p v-if="card.details">{{ card.details }}</p>
                <br />
                <p>Skills: {{ card.skills }}</p>
              </template>
            </ProjectItem>
          </a>
        </Slide>

        <!-- Carousel Navigation -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the viewport hides extra width */
.carousel__viewport {
  perspective: 2000px;
  overflow: hidden;
  width: 100%; /* Ensure it matches the container width */
  margin: 0 auto;
}

/* Restrict track width */
.carousel__track {
  width: 100%;
  display: flex;
  align-items: center;
  transition: transform 0.5s ease-in-out;
}

/* Slide styles */
.carousel__slide {
  opacity: 0.7;
  transform: scale(0.9);
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.carousel__slide--active {
  opacity: 1;
  transform: scale(1);
}

.carousel__slide--prev,
.carousel__slide--next {
  opacity: 0.9;
  transform: scale(0.95);
}
</style>
