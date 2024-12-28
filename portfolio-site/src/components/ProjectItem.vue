<template>
  <div class="card">
    <div class="grid">
      <div class="proj-image-container">
        <slot name="image"></slot>
      </div>
      <div class="card-body">
        <slot name="title"></slot>
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
</template>
