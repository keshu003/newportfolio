<template>
    <div>
        <section class="mt-10 scroll-mt-40 border-b-2 border-gray-400 pb-10" id="skills">
          
          <h2 class="text-3xl md:text-5xl font-bold my-5 text-center md:text-left">Technical Skills</h2>

            <div class="grid py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:gap-8">

              <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-700">
                <div class="text-3xl mb-4">💻</div>
                <h3 class="text-xl font-semibold mb-2 text-white">Frontend Development</h3>
                <p class="text-gray-400">Vue, HTML5, CSS3, JavaScript</p>
              </div>

              <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-700">
                <div class="text-3xl mb-4">🛠️</div>
                <h3 class="text-xl font-semibold mb-2 text-white">Backend Development</h3>
                <p class="text-gray-400">Node.js, SQL</p>
              </div>

           
            </div>
        </section>
    </div>
</template>

<script setup>
import Nav from './Nav.vue';
</script>

<style lang="scss" scoped>
</style>