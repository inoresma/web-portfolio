<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 hero-background"
  >
    <div class="hero-gradient-overlay"></div>
    <div class="hero-shapes">
      <div class="hero-shape hero-shape-1"></div>
      <div class="hero-shape hero-shape-2"></div>
      <div class="hero-shape hero-shape-3"></div>
    </div>
    <div class="hero-grid-pattern"></div>
    <div class="section-container text-center z-10 reveal-on-scroll relative">
      <h1
        class="text-5xl md:text-7xl font-bold mb-6 text-dark dark:text-secondary animate-fade-in"
      >
        Martín Fuentes
      </h1>
      <h2 class="text-2xl md:text-4xl font-medium mb-6 text-gray-700 dark:text-gray-300">
        Desarrollador Web Full Stack
      </h2>
      <p
        class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Transformo ideas en experiencias digitales funcionales y atractivas
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#projects" class="btn-primary">
          Ver proyectos
        </a>
        <a href="#contact" class="btn-secondary">
          Contáctame
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-background {
  background: linear-gradient(135deg, #F5F5F5 0%, #E8F5E9 50%, #F5F5F5 100%);
}

.dark .hero-background {
  background: linear-gradient(135deg, #111111 0%, #0a1a0d 50%, #111111 100%);
}

.hero-gradient-overlay {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(111, 207, 151, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(111, 207, 151, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 164, 91, 0.05) 0%, transparent 50%);
  z-index: 1;
}

.dark .hero-gradient-overlay {
  background: 
    radial-gradient(circle at 20% 30%, rgba(111, 207, 151, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(111, 207, 151, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 164, 91, 0.08) 0%, transparent 50%);
}

.hero-shapes {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
}

.hero-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
}

.hero-shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #6FCF97 0%, #4CAF7A 100%);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.hero-shape-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #6FCF97 0%, #81C784 100%);
  bottom: -50px;
  right: -50px;
  animation-delay: 7s;
}

.hero-shape-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #FFA45B 0%, #FF8A65 100%);
  top: 50%;
  right: 10%;
  animation-delay: 14s;
}

.dark .hero-shape-1,
.dark .hero-shape-2 {
  opacity: 0.3;
}

.dark .hero-shape-3 {
  opacity: 0.25;
}

.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(111, 207, 151, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(111, 207, 151, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
  mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 70%);
}

.dark .hero-grid-pattern {
  background-image: 
    linear-gradient(rgba(111, 207, 151, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(111, 207, 151, 0.08) 1px, transparent 1px);
}

@keyframes float {
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

.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>

