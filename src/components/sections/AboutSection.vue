<template>
  <section id="about" class="section-container reveal-on-scroll">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-dark dark:text-secondary">
        Sobre mí
      </h2>
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div class="flex-shrink-0">
          <div class="profile-image-container mx-auto">
            <div class="profile-image-wrapper">
              <div class="profile-image-bubble">
                <img
                  :src="profileImage"
                  alt="Martín Fuentes"
                  class="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Soy un desarrollador web full stack con experiencia en tecnologías modernas.
            Me apasiona construir soluciones rápidas, seguras y escalables para negocios
            y personas.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Mi enfoque se centra en crear experiencias digitales que no solo sean
            funcionales, sino también intuitivas y atractivas para los usuarios.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Siempre busco las mejores prácticas para garantizar resultados de alta calidad
            que impulsen el crecimiento de tu negocio.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImage from '../../assets/images/profile.png'
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

.profile-image-container {
  width: 12rem;
  height: 12rem;
}

@media (min-width: 768px) {
  .profile-image-container {
    width: 16rem;
    height: 16rem;
  }
}

.profile-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image-bubble {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 
    0 0 0 0 rgba(111, 207, 151, 0.4),
    0 0 0 0 rgba(111, 207, 151, 0.3),
    0 20px 60px rgba(111, 207, 151, 0.15),
    0 10px 30px rgba(0, 0, 0, 0.1),
    inset 0 0 30px rgba(111, 207, 151, 0.1);
  transition: all 0.4s ease;
  animation: bubble-pulse 3s ease-in-out infinite;
}

.profile-image-bubble::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(111, 207, 151, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
}

.profile-image-bubble:hover {
  transform: scale(1.03);
  box-shadow: 
    0 0 0 0 rgba(111, 207, 151, 0.5),
    0 0 0 0 rgba(111, 207, 151, 0.4),
    0 25px 70px rgba(111, 207, 151, 0.2),
    0 15px 40px rgba(0, 0, 0, 0.15),
    inset 0 0 40px rgba(111, 207, 151, 0.15);
}

.dark .profile-image-bubble {
  box-shadow: 
    0 0 0 0 rgba(111, 207, 151, 0.5),
    0 0 0 0 rgba(111, 207, 151, 0.4),
    0 20px 60px rgba(111, 207, 151, 0.2),
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 0 30px rgba(111, 207, 151, 0.15);
  animation: bubble-pulse-dark 3s ease-in-out infinite;
}

.dark .profile-image-bubble:hover {
  box-shadow: 
    0 0 0 0 rgba(111, 207, 151, 0.6),
    0 0 0 0 rgba(111, 207, 151, 0.5),
    0 25px 70px rgba(111, 207, 151, 0.25),
    0 15px 40px rgba(0, 0, 0, 0.4),
    inset 0 0 40px rgba(111, 207, 151, 0.2);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center left;
  border-radius: 50%;
  display: block;
  position: relative;
  z-index: 2;
}

@keyframes bubble-pulse {
  0%, 100% {
    box-shadow: 
      0 0 0 0 rgba(111, 207, 151, 0.4),
      0 0 0 0 rgba(111, 207, 151, 0.3),
      0 20px 60px rgba(111, 207, 151, 0.15),
      0 10px 30px rgba(0, 0, 0, 0.1),
      inset 0 0 30px rgba(111, 207, 151, 0.1);
  }
  50% {
    box-shadow: 
      0 0 0 5px rgba(111, 207, 151, 0.2),
      0 0 0 10px rgba(111, 207, 151, 0.1),
      0 20px 60px rgba(111, 207, 151, 0.2),
      0 10px 30px rgba(0, 0, 0, 0.1),
      inset 0 0 30px rgba(111, 207, 151, 0.15);
  }
}

@keyframes bubble-pulse-dark {
  0%, 100% {
    box-shadow: 
      0 0 0 0 rgba(111, 207, 151, 0.5),
      0 0 0 0 rgba(111, 207, 151, 0.4),
      0 20px 60px rgba(111, 207, 151, 0.2),
      0 10px 30px rgba(0, 0, 0, 0.3),
      inset 0 0 30px rgba(111, 207, 151, 0.15);
  }
  50% {
    box-shadow: 
      0 0 0 5px rgba(111, 207, 151, 0.3),
      0 0 0 10px rgba(111, 207, 151, 0.2),
      0 20px 60px rgba(111, 207, 151, 0.25),
      0 10px 30px rgba(0, 0, 0, 0.3),
      inset 0 0 30px rgba(111, 207, 151, 0.2);
  }
}
</style>

