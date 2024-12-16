<script setup>
</script>

<template>
  <div id="intro">
    <ProfilePicture />
    <p id="before" class="text">Hello! I'm</p>
    <p id="name" class="text">Tai Ngee Tian</p>
    <img :src="require('@/assets/your-image.svg')" alt="Profile Picture" />
  </div>
</template>

<style scoped>
#intro {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  vertical-align: middle;
}
#name {
  font-size: 500%;
  color: white;
}

#before {
  font-size: x-large;
  color: gray;
}

</style>