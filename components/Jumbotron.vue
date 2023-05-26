<script setup>
const props = defineProps({
  title: String,
  description: String,
  image_url: String,
});
</script>

<template>
  <div class="flex flex-col h-2/3 items-center justify-center color-white">
    <div
      class="container"
      :style="{ backgroundImage: `url(${props.image_url})` }"
    ></div>
    <div class="absolute space-y-4 p-8">
      <h1 class="text-4xl lg:text-8xl font-bold">{{ props.title }}</h1>
      <p class="text-xl lg:text-3xl font-bold">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-position: center;
  filter: blur(5px);
  min-width: 100vw;
  height: 90%;
}
</style>
