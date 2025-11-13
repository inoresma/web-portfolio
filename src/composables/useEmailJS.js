import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export function useEmailJS() {
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const error = ref(null)

  const sendEmail = async (formData) => {
    isLoading.value = true
    isSuccess.value = false
    error.value = null

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuración de EmailJS incompleta. Por favor, verifica las variables de entorno.')
      }

      await emailjs.send(serviceId, templateId, formData, publicKey)
      
      isSuccess.value = true
      setTimeout(() => {
        isSuccess.value = false
      }, 5000)
    } catch (err) {
      error.value = err.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      setTimeout(() => {
        error.value = null
      }, 5000)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    isSuccess,
    error,
    sendEmail,
  }
}

