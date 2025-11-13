<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover text-center">
    <div class="text-5xl mb-4">{{ service.icon }}</div>
    <h3 class="text-xl font-semibold mb-3 text-dark dark:text-secondary">
      {{ service.title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300">
      {{ service.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
})
</script>

