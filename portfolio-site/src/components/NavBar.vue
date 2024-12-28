<template>
  <nav class="navbar">
    <!-- Menu Button -->
    <button @click="toggleMenu" class="navbar-toggle" :class="{'opened': menuOpen, 'closed': !menuOpen}">
      <img :src="menuIcon" alt="menu icon" />
    </button>

    <!-- Dropdown Menu -->
    <div v-if="menuOpen" class="dropdown-content">
      <a href="#intro" class="nav-link" @click="closeMenu">Home</a>
      <a href="#about-page" class="nav-link" @click="closeMenu">About</a>
      <a href="#project" class="nav-link" @click="closeMenu">Projects</a>
      <a href="#contact" class="nav-link" @click="closeMenu">Contact</a>
    </div>

    <!-- Overlay -->
    <div v-if="menuOpen" class="overlay" @click="closeMenu"></div>
  </nav>
</template>

<script>
// Import the images statically
import menuBars from '@/assets/menu-bars.svg';
import menuCross from '@/assets/menu-cross.svg';

export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    menuIcon() {
      return this.menuOpen ? menuCross : menuBars;
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

