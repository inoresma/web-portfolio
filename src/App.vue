<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { useScrollReveal } from './composables/useScrollReveal'

const { initScrollReveal } = useScrollReveal()

onMounted(() => {
  initScrollReveal()
  
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      if (href !== '#' && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const headerHeight = 80
          const targetPosition = targetElement.offsetTop - headerHeight
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          })
        }
      }
    })
  })
})
</script>

