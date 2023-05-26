<script setup>
const props = defineProps({
  title: String,
  content: String,
});
</script>
<template>
  <div class="absolute space-y-4 p-8 color-white">
    <h1 class="text-8xl font-bold">{{ props.title }}</h1>
    <p class="text-3xl font-bold">{{ props.content }}</p>
  </div>
</template>
