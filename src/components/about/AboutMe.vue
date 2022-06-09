<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "I am currently a third year student at Yangon Technological University and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper into backend learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
        },
        {
          id: 2,
          bio: "I like dabbling in various parts of frontend and backend development and like to learn about new technologies, read technical articles or simply play games and listen to music in my free time.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
