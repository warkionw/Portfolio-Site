<template>
  <div class="card">
    <div class="grid">
      <div class="image-container">
        <slot name="image"></slot>
      </div>
      <div class="body">
        <slot name="title"></slot>
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column; /* Stack image and body vertically */
  width: 50vw;
  height: 60vh;
  border: 3px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 15px; /* Rounded corners */
  overflow: hidden; /* Prevent content from overflowing the card */
  margin-bottom: 30px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 pink;
}

// .grid {
//   display: grid;
//   grid-template-columns: 1fr 1.5fr;
//   grid-template-rows: 1fr;
//   justify-items: center;
//   align-items: center;
// }

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white; /* Inner background color */
  width: 100%; /* Fill the available width */
  height: 100%; /* Fill the available height */
}

.image-container img {
  width: 50vw;  /* Make image width 100% of its container */
  height: 150px; /* Make image height 100% of its container */
}

.body {
  padding: 15px;
}

body h4 {
  margin: 0;
  font-size: 1.5rem;
  color: white;
}

body p {
  font-size: 1rem;
  color: white;
}
</style>
