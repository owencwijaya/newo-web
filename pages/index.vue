<script setup>
const content = {
  title: "So, why did I make this website?",
  content: "Well honestly, I don't know",
};
</script>
<template>
  <div class="h-full">
    <jumbotron
      title="Hi"
      description="I'm Owen, a dude. (This is not exactly a professional website.)"
      image_url="img/keeb.jpg"
    ></jumbotron>
    <div v-for="data in content" :key="data.title">
      <HomeEntry :title="data.title" :content="data.content"></HomeEntry>
    </div>
  </div>
</template>
