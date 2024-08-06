<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "I am currently a second year student at Singapore Poly and pursuing my Diploma in Information Technology from here. I am a self taught Full Stack Web Developer, currently diving deeper into backend learning and security coding. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
        },
        {
          id: 2,
          bio: "I like dabbling in various parts of frontend and backend development and like to learn about new technologies, read technical articles or simply play games and listen to music in my free time. Currently, I am trying to find internships to gain more experience and learn more about the industry. I am also looking for opportunities to work on projects that will help me learn more about the industry and improve my skills.",
        },
      ],
      skills: [
        { id: 1, skill: "JavaScript" },
        { id: 2, skill: "Vue.js" },
        { id: 3, skill: "Node.js" },
        { id: 4, skill: "HTML & CSS" },
      ],
      certifications: [
        { id: 1, certification: "LinkedIn Learning Certificate of Completion", link: "https://www.linkedin.com/learning/certificates/2a242d93ce6e8ee0a40310925871c36f8d19ec96581bd886128296ae4d2f390f?u=2122804" },
        { id: 2, certification: "JavaScript Data Structures And Algorithms", link: "https://www.freecodecamp.org/certification/fcc7cbffdb1-b4f5-46ff-956b-0763930c3b0d/javascript-algorithms-and-data-structures" },
      ],
      education: [
        { id: 1, degree: "Diploma in Information Technology", institution: "Singapore Poly" },
      ],
      experience: [
        { id: 1, role: "Service Crew", company: "Rise Restaurant At Marina Bay Sand", duration: "now" },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="Profile Image" />
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

      <!-- Skills -->
      <h3 class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">Skills</h3>
      <ul>
        <li v-for="skill in skills" :key="skill.id">{{ skill.skill }}</li>
      </ul>
      <br>

      <!-- Certifications -->
      <h3 class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">Certifications</h3>
      <ul>
        <li v-for="certification in certifications" :key="certification.id">
          <a :href="certification.link" target="_blank" class="text-blue-500 hover:underline">{{ certification.certification }}</a>
        </li>
      </ul>
    <br>
      <!-- Education -->
      <h3 class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">Education</h3>
      <ul>
        <li v-for="edu in education" :key="edu.id">{{ edu.degree }} - {{ edu.institution }}</li>
      </ul>
<br>
      <!-- Experience -->
      <h3 class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">Experience</h3>
      <ul>
        <li v-for="exp in experience" :key="exp.id">{{ exp.role }} at {{ exp.company }} ({{ exp.duration }})</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #1d4ed8;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>