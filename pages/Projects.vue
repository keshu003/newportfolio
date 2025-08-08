<template>
  <section class="mt-10 scroll-mt-40" id="projects">
    <h2 class="text-3xl md:text-5xl font-bold my-5 text-center md:text-left">Projects</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 md:mt-20 gap-6 md:gap-8">
      
      <!-- NFC Attendance Management System -->
      <div class="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105">
        <a href="" class="block">
          <div class="w-full h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-t-lg flex items-center justify-center">
            <i class="fa-solid fa-mobile-screen-button text-6xl text-white"></i>
          </div>
        </a>
        <div class="p-4">
          <h4 class="text-lg md:text-xl font-semibold text-white hover:text-blue-300 transition-colors">
            NFC Attendance Management System
          </h4>
          <p class="text-gray-400 text-sm mt-2">Smart attendance tracking using NFC technology</p>
        </div>
      </div>

      <!-- Resume Analyzer -->
      <div class="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105">
        <a href="" class="block">
          <div class="w-full h-64 bg-gradient-to-br from-green-600 to-green-800 rounded-t-lg flex items-center justify-center">
            <i class="fa-solid fa-file-lines text-6xl text-white"></i>
          </div>
        </a>
        <div class="p-4">
          <h4 class="text-lg md:text-xl font-semibold text-white hover:text-green-300 transition-colors">
            Resume Analyzer
          </h4>
          <p class="text-gray-400 text-sm mt-2">AI-powered resume analysis and optimization tool</p>
        </div>
      </div>

      

    </div>
  </section>
</template>

<script setup>
import Nav from './Nav.vue';
</script>

<style lang="scss" scoped>
</style>