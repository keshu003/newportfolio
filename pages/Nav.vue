<template>
  <nav class="fixed top-0 left-0 w-full border-b border-gray-700 bg-black z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
      <!-- Portfolio Logo - Always visible -->
      <div class="text-2xl font-bold text-white">Portfolio</div>
      
      <!-- Desktop Navigation - Hidden on mobile -->
      <ul class="hidden md:flex space-x-6 font-medium text-white">
        <li><NuxtLink to="/" class="hover:text-gray-300 transition-colors">Home</NuxtLink></li>
        <li><NuxtLink to="#skills" class="hover:text-gray-300 transition-colors">Skills</NuxtLink></li>
        <li><NuxtLink to="#projects" class="hover:text-gray-300 transition-colors">Projects</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-gray-300 transition-colors">Contact</NuxtLink></li>
      </ul>
      
      <!-- Mobile Hamburger Menu Button - Only visible on mobile -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden text-white text-xl hover:text-gray-300 transition-colors"
        aria-label="Toggle mobile menu"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
    
    <!-- Mobile Menu Overlay - Only visible when menu is open -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden fixed inset-0 bg-black bg-opacity-20 z-40"
      @click="closeMobileMenu"
    >
      <!-- Mobile Menu Sidebar - Right side -->
      <div 
        class="absolute top-0 right-0 h-full w-64 bg-black bg-opacity-80 shadow-lg"
        @click.stop
      >
        <!-- Close button -->
        <div class="flex justify-end p-4">
          <button 
            @click="closeMobileMenu"
            class="text-white text-xl hover:text-gray-300 transition-colors"
          >
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
        
        <!-- Menu Items -->
        <div class="flex flex-col space-y-6 px-6 pt-8">
          <NuxtLink 
            to="/" 
            @click="closeMobileMenu"
            class="text-white text-lg font-medium hover:text-gray-300 transition-colors py-2"
          >
            Home
          </NuxtLink>

          <NuxtLink 
            to="#skills" 
            @click="closeMobileMenu"
            class="text-white text-lg font-medium hover:text-gray-300 transition-colors py-2"
          >
            Skills
          </NuxtLink>

          <NuxtLink 
            to="#projects" 
            @click="closeMobileMenu"
            class="text-white text-lg font-medium hover:text-gray-300 transition-colors py-2"
          >
            Projects
          </NuxtLink>

          <NuxtLink 
            to="/contact" 
            @click="closeMobileMenu"
            class="text-white text-lg font-medium hover:text-gray-300 transition-colors py-2"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

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
  
  // Cleanup on unmount
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* Additional styles if needed - using regular CSS instead of @apply */
.router-link-active {
  color: #d1d5db; /* text-gray-300 equivalent */
}
</style>