<script setup>
const paths = [
  { route: "/", name: "Home" },
  { route: "/projects", name: "Projects" },
  { route: "/others", name: "Others" },
];

const route = useRoute();
const navColor = (path) => {
  return path === route.fullPath ? "bg-blue-500 font-bold" : "";
};
</script>

<template>
  <div class="flex justify-center color-white bg-gray-500">
    <NuxtLink
      v-for="path in paths"
      :key="path.route"
      :to="path.route"
      class="n-link-base p-4 lg:p-5 w-1/3 transition ease-in-out hover:bg-blue-400 duration-300 hover:font-bold no-underline"
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
