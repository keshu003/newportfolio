<template>
  <div class="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
    <!-- Modified Nav with conditional rendering -->
    <nav class="fixed top-0 left-0 w-full border-b border-gray-700 bg-black z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <!-- Portfolio Logo - Always visible -->
        <div class="text-2xl font-bold text-white">Portfolio</div>
        
        <!-- Desktop Navigation - Only Portfolio and Home -->
        <ul class="hidden md:flex space-x-6 font-medium text-white">
          <li><NuxtLink to="/" class="hover:text-gray-300 transition-colors">Home</NuxtLink></li>
        </ul>
        
        <!-- Mobile Hamburger Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden text-white text-xl hover:text-gray-300 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      
      <!-- Mobile Menu Overlay -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden fixed inset-0 bg-black bg-opacity-20 z-40"
        @click="closeMobileMenu"
      >
        <div 
          class="absolute top-0 right-0 h-full w-64 bg-black bg-opacity-80 shadow-lg"
          @click.stop
        >
          <div class="flex justify-end p-4">
            <button 
              @click="closeMobileMenu"
              class="text-white text-xl hover:text-gray-300 transition-colors"
            >
              <i class="fa-solid fa-times"></i>
            </button>
          </div>
          
          <div class="flex flex-col space-y-6 px-6 pt-8">
            <NuxtLink 
              to="/" 
              @click="closeMobileMenu"
              class="text-white text-lg font-medium hover:text-gray-300 transition-colors py-2"
            >
              Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <section class="bg-gray-900 text-white py-8 scroll-mt-40 mt-20" id="contact">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4">Contact Me</h2>
        <a
          href="mailto:keshavumesh001@gmail.com"
          class="text-2xl text-blue-400 underline break-words"
        >
          keshavumesh001@gmail.com
        </a>
      </div>

      <form class="w-full max-w-3xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="col-span-1">
          <label class="block text-sm text-blue-400 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            class="w-full bg-transparent border-b-2 border-blue-500 text-white placeholder-gray-400 outline-none py-2 focus:border-blue-300 transition-colors"
          />
        </div>

        <div class="col-span-1">
          <label class="block text-sm text-blue-400 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Your Email ID"
            class="w-full bg-transparent border-b-2 border-blue-500 text-white placeholder-gray-400 outline-none py-2 focus:border-blue-300 transition-colors"
          />
        </div>

        <div class="col-span-1 md:col-span-2">
          <label class="block text-sm text-blue-400 mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="Your message..."
            class="w-full bg-transparent border-b-2 border-blue-500 text-white placeholder-gray-400 outline-none py-2 resize-none focus:border-blue-300 transition-colors"
          ></textarea>
        </div>

        <div class="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            class="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when pressing Escape key
onMounted(() => {
  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      closeMobileMenu()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>