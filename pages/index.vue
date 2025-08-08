<template>
  <div class="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
    <Nav />

    <div class="min-h-screen  ">
    <main class="min-h-screen flex items-center justify-center px-4 md:px-16 bg-gray-900 text-white border-b-2 border-grey-40">
  <div class="w-full max-w-5xl text-center py-20">
    <!-- Name -->
    <h1 class="text-4xl  sm:text-5xl md:text-7xl font-extrabold mb-4">
      Keshav Umesh
    </h1>

    <!-- Role -->
    <h2 class="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8">
      Software Developer
    </h2>

   
    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      
      <button
        class="border-2 border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
      >
        Download Resume
      </button>
    </div>
  </div>
</main>



      <!-- Sections -->
      <Skills />
      <Projects />
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Contact from './Contact.vue'
import Footer from './Footer.vue'
import Nav from './Nav.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
</script>
