<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>