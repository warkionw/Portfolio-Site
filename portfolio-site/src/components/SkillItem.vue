<template>
  <div class="item">
    <div class="image-container">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white; /* Border color */
  border-radius: 20px; /* Rounded border */
  height: 100px; /* Outer box height */
  width: 180px;
  margin-bottom: 15px; /* Space between items */
  background-color: transparent; /* Transparent gap between border and inner container */
  padding: 5px; /* Creates a consistent inner margin */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white; /* Inner background color */
  border-radius: 15px; /* Slightly smaller radius to fit within the item */
  width: 100%; /* Fill the available width */
  height: 100%; /* Fill the available height */
}

img {
  width: 100%; /* Ensure the image fills the container */
  height: 100%; /* Ensure the image fills the container */
  object-fit: contain; /* Maintain aspect ratio */
  border-radius: 15px; /* Match the inner container's border radius */
}
</style>
