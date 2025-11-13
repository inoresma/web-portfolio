<template>
  <section id="contact" class="section-container bg-secondary dark:bg-gray-800 reveal-on-scroll border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-dark dark:text-secondary">
        Contacto
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
        ¿Tienes un proyecto en mente? Hablemos
      </p>
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-dark dark:text-secondary">
            Información de contacto
          </h3>
          <div class="space-y-4">
            <a
              href="mailto:inoresma@gmail.com"
              class="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <svg
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>inoresma@gmail.com</span>
            </a>
            <a
              href="tel:+56966505035"
              class="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <svg
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+56 9 66505035</span>
            </a>
          </div>
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label
              for="name"
              class="block text-sm font-medium mb-2 text-dark dark:text-secondary"
            >
              Nombre
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-dark dark:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium mb-2 text-dark dark:text-secondary"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-dark dark:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              for="message"
              class="block text-sm font-medium mb-2 text-dark dark:text-secondary"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="5"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-dark dark:text-secondary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">Enviar mensaje</span>
            <span v-else>Enviando...</span>
          </button>
          <div v-if="isSuccess" class="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
            ¡Mensaje enviado con éxito! Te responderé pronto.
          </div>
          <div v-if="error" class="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useEmailJS } from '../../composables/useEmailJS'

const { isLoading, isSuccess, error, sendEmail } = useEmailJS()

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = async () => {
  await sendEmail({
    from_name: formData.value.name,
    from_email: formData.value.email,
    message: formData.value.message,
  })
  
  if (isSuccess.value) {
    formData.value = {
      name: '',
      email: '',
      message: '',
    }
  }
}
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

