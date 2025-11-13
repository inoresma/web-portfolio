<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-sm"
  >
    <nav class="section-container py-4">
      <div class="flex items-center justify-between">
        <a href="#home" class="text-2xl font-bold text-dark dark:text-secondary">
          Martín Fuentes
        </a>
        <div class="flex items-center gap-6">
          <ul class="hidden md:flex items-center gap-6">
            <li>
              <a
                href="#about"
                class="text-dark dark:text-secondary hover:text-primary transition-colors"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="text-dark dark:text-secondary hover:text-primary transition-colors"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="text-dark dark:text-secondary hover:text-primary transition-colors"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="text-dark dark:text-secondary hover:text-primary transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
          <ThemeToggle />
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-dark dark:text-secondary"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4"
      >
        <ul class="flex flex-col gap-4">
          <li>
            <a
              href="#about"
              @click="toggleMobileMenu"
              class="text-dark dark:text-secondary hover:text-primary transition-colors"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#projects"
              @click="toggleMobileMenu"
              class="text-dark dark:text-secondary hover:text-primary transition-colors"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#services"
              @click="toggleMobileMenu"
              class="text-dark dark:text-secondary hover:text-primary transition-colors"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#contact"
              @click="toggleMobileMenu"
              class="text-dark dark:text-secondary hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

