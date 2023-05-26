<script setup>
const content = [
  {
    title: "So, why did I make this website?",
    content: `Seeing every CS stud in my university having one, and I'm a CS stud myself, 
      I thought, why not? Yes, my LinkedIn is enough to show my experience, but having a website could
      help expressing my interests outside of coding. <br/> <br/>
      
      I have been wanting to write one, but the only framework I knew back then was React. And React was a hassle to use to write a small website.
      Now that I've started to explore Vue <b>(and because Vue is really lightweight and suited to create a small website like this one)</b>, I decided to write a website of my own.`,
  },
  {
    title: "Who am I?",
    content: `My name is Owen Christian Wijaya, currently an active student majoring in Informatics in Institut Teknologi Bandung, ITB, Bandung Institute of Tech, you name it.
    Professionally, <b>I'm a software engineer with expertise in web development</b> (starting in front-end, currently learning back-end best practices). 
    I'm heavily interested in algorithms, machine learning, and distributed systems.

    <br/><br/>
    Other than that, I have my own lists of interests outside of programming:
    <ul>
        <li> • I enjoy collecting things: Gundam model kits, Hot Wheels cars, currently Transformers figures as well <b>(probably will showcase the Gundams!)</b></li>
        <li> • I'm an avid automotive fan, and I play Forza Horizon <i>religiously</i></li>
        <li> • Currently starting to pick up on competitive shooters like <i>Valorant</i> and <i>CS:GO</i></li>
    </ul>
    
    <br/>
    I'm also planning to probably use this website as a blog, but maybe for now I'll settle for showcasing my projects and hobbies.`,
  },
  {
    title: "Get to know me!",
    content: `Feel free to connect to some of the links below! <br/><br/> `,
  },
];
</script>
<template>
  <div class="h-full bg-gray-500">
    <jumbotron
      title="Hi"
      description="I'm Owen, a dude. (This is not exactly a professional website.)"
      image_url="img/keeb.jpg"
    ></jumbotron>
    <HomeEntry
      v-for="entry in content"
      :key="entry.title"
      :title="entry.title"
      :content="entry.content"
    ></HomeEntry>
  </div>
</template>
