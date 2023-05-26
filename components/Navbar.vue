<script setup>
const paths = [
  { route: "/", name: "Home" },
  { route: "/projects", name: "Projects" },
  { route: "/others", name: "Others" },
];

const route = useRoute();
const navColor = (path) => {
  return path === route.fullPath ? "bg-blue-500" : "";
};

console.log(route.fullPath);
</script>

<template>
  <div class="flex justify-center color-white bg-gray-500 font-bold">
    <NuxtLink
      v-for="path in paths"
      :key="path.route"
      :to="path.route"
      class="n-link-base p-5 hover:bg-blue-400 w-1/3"
      :class="navColor(path.route)"
    >
      <div class="flex justify-left">
        <span class="text-xl px-2 sm:px-1">
          {{ path.name }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>
