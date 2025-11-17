<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 hero-section"
  >
    <div class="hero-background">
      <div class="aurora-gradient"></div>
      <div class="particles-container">
        <div
          v-for="(particle, index) in particles"
          :key="index"
          class="particle"
          :style="particle.style"
        ></div>
      </div>
      <div class="floating-shapes">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
        <div class="floating-shape shape-4"></div>
      </div>
    </div>

    <div class="section-container text-center z-10 relative">
      <div class="hero-content">
        <div class="greeting-text" :class="{ 'animate-in': isVisible }">
          <span class="wave-hand">👋</span>
          <span>Hola, soy</span>
        </div>

        <h1 class="hero-title" :class="{ 'animate-in': isVisible }">
          <span class="gradient-text">Martín Fuentes</span>
        </h1>

        <div class="typing-container" :class="{ 'animate-in': isVisible }">
          <h2 class="hero-subtitle">
            <span class="typing-text">{{ displayText }}</span>
            <span class="cursor">|</span>
          </h2>
        </div>

        <p
          class="hero-description"
          :class="{ 'animate-in': isVisible }"
        >
          Transformo ideas en experiencias digitales funcionales y atractivas
        </p>

        <div class="tech-badges" :class="{ 'animate-in': isVisible }">
          <div
            v-for="(tech, index) in technologies"
            :key="index"
            class="tech-badge"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <TechIcon :name="tech.icon" class="tech-icon" />
            <span>{{ tech.name }}</span>
          </div>
        </div>

        <div class="cta-buttons" :class="{ 'animate-in': isVisible }">
          <a href="#projects" class="btn btn-primary">
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Ver proyectos</span>
          </a>

          <a href="#contact" class="btn btn-secondary">
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contáctame</span>
          </a>
        </div>

        <div class="social-links" :class="{ 'animate-in': isVisible }">
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            :href="social.url"
            :target="social.external ? '_blank' : undefined"
            :rel="social.external ? 'noopener noreferrer' : undefined"
            class="social-link"
            :aria-label="social.name"
          >
            <SocialIcon :name="social.icon" class="social-icon" />
          </a>
        </div>
      </div>
    </div>

    <div class="scroll-indicator" :class="{ 'animate-in': isVisible }">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TechIcon from '../ui/TechIcon.vue'
import SocialIcon from '../ui/SocialIcon.vue'

const isVisible = ref(false)
const displayText = ref('')
const fullText = 'Desarrollador Web Full Stack'
let typingIndex = 0
let typingTimer = null

const particles = ref([])
const particleCount = 50

const technologies = [
  { name: 'Vue.js', icon: 'vue' },
  { name: 'Python', icon: 'python' },
  { name: 'SQL', icon: 'sql' },
  { name: 'Power BI', icon: 'powerbi' },
  { name: 'Tailwind', icon: 'tailwind' },
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/inoresma',
    external: true,
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/inoresma/',
    external: true,
    icon: 'linkedin',
  },
]

const createParticle = () => {
  const size = Math.random() * 4 + 2
  const x = Math.random() * 100
  const y = Math.random() * 100
  const duration = Math.random() * 20 + 15
  const delay = Math.random() * 5
  
  return {
    style: {
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    }
  }
}

const typeText = () => {
  if (typingIndex < fullText.length) {
    displayText.value += fullText[typingIndex]
    typingIndex++
    typingTimer = setTimeout(typeText, 100)
  }
}

onMounted(() => {
  isVisible.value = true
  particles.value = Array.from({ length: particleCount }, () => createParticle())
  
  setTimeout(() => {
    typeText()
  }, 800)
})

onUnmounted(() => {
  if (typingTimer) {
    clearTimeout(typingTimer)
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #F5F5F5 0%, #E8F5E9 50%, #F5F5F5 100%);
}

.dark .hero-section {
  background: linear-gradient(135deg, #111111 0%, #0a1a0d 50%, #111111 100%);
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
}

.aurora-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(111, 207, 151, 0.1) 0%,
    rgba(255, 164, 91, 0.1) 25%,
    rgba(111, 207, 151, 0.15) 50%,
    rgba(255, 164, 91, 0.1) 75%,
    rgba(111, 207, 151, 0.1) 100%
  );
  animation: aurora-shift 20s ease-in-out infinite;
  filter: blur(60px);
}

.dark .aurora-gradient {
  background: linear-gradient(
    135deg,
    rgba(111, 207, 151, 0.2) 0%,
    rgba(255, 164, 91, 0.15) 25%,
    rgba(111, 207, 151, 0.25) 50%,
    rgba(255, 164, 91, 0.15) 75%,
    rgba(111, 207, 151, 0.2) 100%
  );
}

.particles-container {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(111, 207, 151, 0.6) 0%, transparent 70%);
  animation: particle-float infinite ease-in-out;
  filter: blur(1px);
}

.dark .particle {
  background: radial-gradient(circle, rgba(111, 207, 151, 0.8) 0%, transparent 70%);
}

.floating-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.floating-shape {
  position: absolute;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(40px);
  opacity: 0.3;
  animation: shape-float 25s ease-in-out infinite;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #6FCF97 0%, #4CAF7A 100%);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #FFA45B 0%, #FF8A65 100%);
  bottom: -50px;
  right: -50px;
  animation-delay: 7s;
}

.shape-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #6FCF97 0%, #81C784 100%);
  top: 50%;
  right: 10%;
  animation-delay: 14s;
}

.shape-4 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #FFA45B 0%, #FFB74D 100%);
  bottom: 30%;
  left: 15%;
  animation-delay: 21s;
}

.hero-content {
  position: relative;
  z-index: 10;
  padding: 2rem 0;
}

.greeting-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.dark .greeting-text {
  color: #9ca3af;
}

.wave-hand {
  font-size: 1.5rem;
  animation: wave 2s ease-in-out infinite;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 5rem;
  }
}

.gradient-text {
  background: linear-gradient(135deg, #6FCF97 0%, #FFA45B 50%, #6FCF97 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 5s ease infinite;
  text-shadow: 0 0 30px rgba(111, 207, 151, 0.3);
}

.typing-container {
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out 0.4s;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 2rem;
  }
}

.dark .hero-subtitle {
  color: #d1d5db;
}

.typing-text {
  display: inline-block;
}

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s infinite;
  color: #6FCF97;
}

.hero-description {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 42rem;
  margin: 0 auto 2rem;
  line-height: 1.75;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out 0.6s;
}

.dark .hero-description {
  color: #9ca3af;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out 0.8s;
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 207, 151, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  transition: all 0.3s ease;
  animation: badge-fade-in 0.6s ease-out forwards;
  opacity: 0;
}

.dark .tech-badge {
  background: rgba(17, 24, 39, 0.7);
  border-color: rgba(111, 207, 151, 0.3);
  color: #d1d5db;
}

.tech-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(111, 207, 151, 0.3);
  border-color: #6FCF97;
}

.tech-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out 1s;
}

.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  overflow: hidden;
  text-decoration: none;
  z-index: 1;
}

.btn > * {
  position: relative;
  z-index: 2;
}

.btn-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.btn-primary {
  background: linear-gradient(135deg, #6FCF97 0%, #4CAF7A 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(111, 207, 151, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(111, 207, 151, 0.6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #6FCF97;
  border: 2px solid #6FCF97;
}

.dark .btn-secondary {
  background: rgba(17, 24, 39, 0.9);
  color: #6FCF97;
}

.btn-secondary:hover {
  background: #6FCF97;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(111, 207, 151, 0.4);
}

.btn-outline {
  background: transparent;
  color: #374151;
  border: 2px solid #d1d5db;
}

.dark .btn-outline {
  color: #d1d5db;
  border-color: #4b5563;
}

.btn-outline:hover {
  border-color: #6FCF97;
  color: #6FCF97;
  transform: translateY(-2px);
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  opacity: 0;
  z-index: 0;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
  opacity: 1;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out 1.2s;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 207, 151, 0.2);
  border-radius: 50%;
  color: #374151;
  transition: all 0.3s ease;
  text-decoration: none;
}

.dark .social-link {
  background: rgba(17, 24, 39, 0.7);
  border-color: rgba(111, 207, 151, 0.3);
  color: #d1d5db;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  background: #6FCF97;
  color: white;
  box-shadow: 0 4px 12px rgba(111, 207, 151, 0.4);
}

.social-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transition: all 0.8s ease-out 1.4s;
  z-index: 10;
}

.mouse {
  width: 1.5rem;
  height: 2.5rem;
  border: 2px solid #6FCF97;
  border-radius: 1rem;
  position: relative;
}

.wheel {
  width: 0.25rem;
  height: 0.5rem;
  background: #6FCF97;
  border-radius: 0.125rem;
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 2s ease-in-out infinite;
}

.arrow {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.arrow span {
  width: 0.375rem;
  height: 0.375rem;
  border-right: 2px solid #6FCF97;
  border-bottom: 2px solid #6FCF97;
  transform: rotate(45deg);
  animation: arrow-bounce 2s ease-in-out infinite;
}

.arrow span:nth-child(2) {
  animation-delay: 0.2s;
}

.arrow span:nth-child(3) {
  animation-delay: 0.4s;
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@keyframes aurora-shift {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes particle-float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(30px, -40px) scale(1.2);
    opacity: 0.8;
  }
}

@keyframes shape-float {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  33% {
    transform: translate(40px, -50px) scale(1.1) rotate(5deg);
  }
  66% {
    transform: translate(-30px, 40px) scale(0.9) rotate(-5deg);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-20deg);
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

@keyframes badge-fade-in {
  to {
    opacity: 1;
  }
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes scroll-wheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(1rem);
  }
}

@keyframes arrow-bounce {
  0%, 100% {
    opacity: 0;
    transform: rotate(45deg) translateY(0);
  }
  50% {
    opacity: 1;
    transform: rotate(45deg) translateY(0.25rem);
  }
}
</style>
