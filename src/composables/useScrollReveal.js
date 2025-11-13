export function useScrollReveal() {
  let observer = null

  const initScrollReveal = () => {
    if (observer) {
      observer.disconnect()
    }

    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, options)

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el)
      }
    })
  }

  const disconnect = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  return {
    initScrollReveal,
    disconnect,
  }
}

