<script setup>
const props = defineProps({
  title: String,
  content: String,
});
</script>
<template>
  <div
    class="flex flex-col justify-center items-center space-y-4 p-8 color-white bg-gray-500"
  >
    <h1 class="text-2xl font-bold">{{ props.title }}</h1>
    <div class="text-lg w-2/3" v-html="props.content" />
  </div>
</template>
