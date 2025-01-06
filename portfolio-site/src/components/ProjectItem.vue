<template>
  <div class="card">
    <div class="grid">
      <div class="proj-image-container">
        <slot name="image"></slot>
      </div>
      <div class="card-body">
        <div class="project-title">
          <slot name="title"></slot>
        </div>
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
</template>
