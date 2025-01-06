<template>
  <div id="intro" class="page gradient-background">
    <p id="before" class="text">Hello! I'm</p>
    <p id="name" class="text">
      <span class="tnt">TNT</span>
    </p>
    <p id="after" class="text">Aspiring Software Engineer</p>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: "IntroPage",
  mounted() {
    // Initialize Typed.js after the component is mounted
    setTimeout(() => {
      new Typed('#name', {
        strings: ['<span class="tnt">TNT</span>', '<span class="tnt">T</span>ai <span class="tnt">N</span>gee <span class="tnt">T</span>ian'], // Only type Tai Ngee Tian
        typeSpeed: 75, // Typing speed
        backSpeed: 50, // Backspace speed
        startDelay: 0, // No delay after backspacing
        backDelay: 400, // Pause before starting the new string
        loop: false, // No loop
        showCursor: false, // Enable cursor during typing
      });
    }, 1000); // Wait 1 second before starting
  },
};
</script>