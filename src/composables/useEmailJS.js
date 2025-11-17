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
        const missing = []
        if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID')
        if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID')
        if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY')
        throw new Error(`Configuración incompleta. Faltan: ${missing.join(', ')}. Verifica tu archivo .env y reinicia el servidor.`)
      }

      if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
        throw new Error('Por favor, reemplaza los valores de ejemplo en el archivo .env con tus credenciales reales de EmailJS.')
      }

      const templateParams = {
        ...formData,
        time: new Date().toLocaleString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      if (result.status === 200) {
        isSuccess.value = true
        setTimeout(() => {
          isSuccess.value = false
        }, 5000)
      } else {
        throw new Error(`Error del servidor: ${result.text}`)
      }
    } catch (err) {
      let errorMessage = 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      
      if (err.text) {
        errorMessage = `Error: ${err.text}`
      } else if (err.message) {
        errorMessage = err.message
      } else if (typeof err === 'string') {
        errorMessage = err
      }
      
      if (err.status === 400) {
        errorMessage = `Error 400: ${err.text || 'Solicitud inválida'}. Verifica:
        1. Los IDs en tu archivo .env son correctos (sin espacios, sin comillas)
        2. El Service ID empieza con "service_"
        3. El Template ID empieza con "template_"
        4. El servicio de email está activo en EmailJS
        5. La plantilla tiene los campos: {{from_name}}, {{from_email}}, {{message}}`
      }
      
      error.value = errorMessage
      setTimeout(() => {
        error.value = null
      }, 8000)
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

