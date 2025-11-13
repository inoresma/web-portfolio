<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
    <div class="relative h-48 overflow-hidden">
      <img
        :src="project.image"
        :alt="project.name"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 text-dark dark:text-secondary">
        {{ project.name }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        {{ project.description }}
      </p>
      <div class="flex gap-4">
        <a
          v-if="project.demoUrl && project.demoUrl !== '#'"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Demo →
        </a>
        <a
          v-if="project.githubUrl && project.githubUrl !== '#'"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:text-primary/80 font-medium transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

