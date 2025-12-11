// ===================================
// Sistema de Animaciones Moderno con GSAP
// Inspirado en Apple, Stripe y portfolios ganadores de Awwwards
// ===================================

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Configuración global de animaciones
const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: "power3.out",
  staggerAmount: 0.15,
  distance: 60
};

document.addEventListener("DOMContentLoaded", () => {

  // ===================================
  // 1. HERO - Animación inicial dramática
  // ===================================

  const hero = document.querySelector('.hero-content');
  if (hero) {

    // Timeline para secuencia perfecta
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTimeline
      .from('.hero-title', {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power4.out"
      })
      .from('.hero-title .subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8
      }, "-=0.5")
      .from('.badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6
      }, "-=0.6")
      .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8
      }, "-=0.4")
      .from('.tech-stack', {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5
      }, "-=0.5")
      .from('.hero-actions', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6
      }, "-=0.3");
  }

  // ===================================
  // 2. HOVER ANIMATIONS - Microinteracciones
  // ===================================

  // Botones
  gsap.utils.toArray('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Project cards - Lift effect
  gsap.utils.toArray('.project-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Skill items - Pulse effect
  gsap.utils.toArray('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.05,
        duration: 0.2,
        ease: "back.out(2)"
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  });

  // ===================================
  // 3. CURSOR PERSONALIZADO - Experiencia premium
  // ===================================

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 12px;
    height: 12px;
    background: var(--primary, #3b82f6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    mix-blend-mode: difference;
    transition: transform 0.2s ease, opacity 0.3s ease;
    opacity: 0;
  `;
  document.body.appendChild(cursor);

  const cursorFollower = document.createElement('div');
  cursorFollower.className = 'cursor-follower';
  cursorFollower.style.cssText = `
    position: fixed;
    width: 40px;
    height: 40px;
    border: 2px solid var(--primary, #3b82f6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: transform 0.15s ease, opacity 0.3s ease;
  `;
  document.body.appendChild(cursorFollower);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '0.5';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
  });

  // Smooth cursor follow
  function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;

    cursor.style.transform = `translate(${cursorX - 6}px, ${cursorY - 6}px)`;
    cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;

    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  // Cursor interactions
  gsap.utils.toArray('a, button, .project-item, .skill-item').forEach(element => {
    element.addEventListener('mouseenter', () => {
      gsap.to(cursorFollower, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(cursorFollower, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // ===================================
  // 4. NAVBAR - Solo visible en el top
  // ===================================

  const navbar = document.querySelector('.navbar, nav');
  if (navbar) {
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onUpdate: (self) => {
        const currentScroll = self.scroll();

        // Navbar solo visible cuando está en el top (scroll <= 100)
        if (currentScroll <= 100) {
          gsap.to(navbar, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        } else {
          gsap.to(navbar, {
            y: -100,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    });
  }

  // ===================================
  // 5. PERFORMANCE - Pausar cuando no está visible
  // ===================================

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      gsap.globalTimeline.pause();
    } else {
      gsap.globalTimeline.resume();
    }
  });

  // ===================================
  // 6. SMOOTH SCROLL - Mejorar navegación
  // ===================================

  gsap.utils.toArray('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: "power3.inOut"
        });
      }
    });
  });

  // ===================================
  // Log de inicialización
  // ===================================

  console.log('✨ Sistema de animaciones moderno inicializado');
  console.log('📊 ScrollTriggers activos:', ScrollTrigger.getAll().length);
  console.log('🎨 Animaciones optimizadas para rendimiento');
});
