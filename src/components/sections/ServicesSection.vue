<template>
  <section id="services" class="section-container reveal-on-scroll">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-dark dark:text-secondary">
        Qué ofrezco
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
        Servicios profesionales para hacer realidad tus proyectos digitales
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          :service="service"
          class="reveal-on-scroll"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard.vue'
</script>

<style scoped>
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>

