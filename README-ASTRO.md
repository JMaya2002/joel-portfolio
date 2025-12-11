# Portfolio - Astro Version

Portfolio moderno, minimalista y enfocado construido con Astro para máximo rendimiento y mínimo JavaScript.

## 🚀 Características

### Rendimiento
- ⚡ **Astro** - Casi cero JavaScript en el cliente
- 🎨 **CSS Moderno** - Estilos scoped y optimizados
- 📱 **Responsive** - Mobile-first design
- 🌓 **Dark Mode** - Tema claro/oscuro con persistencia
- ♿ **Accesible** - ARIA labels y navegación por teclado

### Diseño
- 🎯 **Landing Page Style** - Directo al grano
- ✨ **Animaciones Sutiles** - Sin sobrecarga
- 🎨 **Colores Modernos** - Indigo & Pink gradient
- 📐 **Grid Layout** - Diseño limpio y organizado

### Secciones
1. **Hero** - Presentación impactante con stats
2. **About** - Resumen profesional y stack técnico
3. **Projects** - 3 proyectos destacados
4. **Contact** - Formulario y métodos de contacto

## 📦 Estructura del Proyecto

```
Portfolio Joel/
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # Navegación con tema toggle
│   │   ├── Hero.astro         # Sección hero animada
│   │   ├── About.astro        # Sobre mí + skills
│   │   ├── Projects.astro     # Proyectos destacados
│   │   └── Contact.astro      # Contacto + footer
│   ├── layouts/
│   │   └── Layout.astro       # Layout base con estilos globales
│   └── pages/
│       └── index.astro        # Página principal
├── public/                     # Assets estáticos
├── astro.config.mjs           # Configuración Astro
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript config
```

## 🛠️ Instalación y Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Desarrollo local

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### 3. Build para producción

```bash
npm run build
```

Los archivos optimizados estarán en `/dist`

### 4. Preview del build

```bash
npm run preview
```

## 🎨 Personalización

### Información Personal

#### Layout principal (`src/layouts/Layout.astro`)
```astro
const { title, description = "Tu descripción aquí" } = Astro.props;
```

#### Navbar (`src/components/Navbar.astro`)
Cambia el logo "YN" por tus iniciales:
```astro
<span class="gradient-text">TI</span>
```

#### Hero (`src/components/Hero.astro`)
Actualiza título, descripción y stats:
```astro
<h1>
  Tu propuesta de valor<br/>
  <span class="gradient-text">única aquí</span>
</h1>
```

Cambia imagen de perfil:
```astro
<img src="tu-imagen.jpg" alt="Tu Nombre" />
```

#### About (`src/components/About.astro`)
Edita el texto y actualiza el array de skills:
```astro
const skills = [
  { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
  // Añade más skills aquí
];
```

#### Projects (`src/components/Projects.astro`)
Actualiza el array de proyectos:
```astro
const projects = [
  {
    title: 'Tu Proyecto',
    description: 'Descripción breve',
    image: 'url-imagen.jpg',
    tags: ['Tech1', 'Tech2'],
    link: 'https://proyecto.com',
  },
  // Más proyectos...
];
```

#### Contact (`src/components/Contact.astro`)
Actualiza información de contacto:
```astro
const contactInfo = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'tu@email.com',
    link: 'mailto:tu@email.com',
  },
  // Más métodos de contacto...
];
```

### Colores y Tema

Edita las variables CSS en `src/layouts/Layout.astro`:

```css
:root {
  --primary: #6366f1;        /* Color primario */
  --primary-dark: #4f46e5;   /* Variante oscura */
  --accent: #ec4899;         /* Color de acento */
  --text: #0f172a;           /* Texto principal */
  --text-light: #64748b;     /* Texto secundario */
  --bg: #ffffff;             /* Fondo principal */
  --bg-alt: #f8fafc;         /* Fondo alternativo */
  --border: #e2e8f0;         /* Bordes */
}
```

### Tipografía

Las fuentes actuales son **Inter** y **Space Grotesk**. Para cambiarlas:

1. Visita [Google Fonts](https://fonts.google.com)
2. Selecciona tus fuentes
3. Actualiza el link en `Layout.astro`:
```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente&display=swap" rel="stylesheet">
```
4. Actualiza las variables CSS:
```css
body {
  font-family: 'TuFuente', sans-serif;
}
```

### Iconos

Actualmente usa Font Awesome 6.4.0. Los iconos están disponibles en:
- [Font Awesome Icons](https://fontawesome.com/icons)

Formato:
```html
<i class="fab fa-react"></i>      <!-- Brands -->
<i class="fas fa-envelope"></i>   <!-- Solid -->
```

## 📱 Responsive Breakpoints

```css
/* Mobile: < 640px */
/* Tablet: 641px - 968px */
/* Desktop: > 968px */
```

Todos los componentes son responsive por defecto usando CSS Grid y Flexbox.

## 🚀 Deployment

### Netlify (Recomendado)

1. Push tu código a GitHub
2. Conecta tu repo en [Netlify](https://netlify.com)
3. Configuración automática detectada
4. Deploy automático en cada push

### Vercel

```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Actualiza `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://tuusuario.github.io',
  base: '/nombre-repo',
});
```

2. Build y deploy:
```bash
npm run build
# Deploy la carpeta /dist a gh-pages branch
```

### Netlify Drop

Simplemente arrastra la carpeta `/dist` a [Netlify Drop](https://app.netlify.com/drop)

## 🎯 Optimizaciones de Rendimiento

Astro incluye automáticamente:
- ✅ Generación de HTML estático
- ✅ Hidratación parcial (casi cero JS)
- ✅ Optimización de imágenes
- ✅ CSS crítico inlineado
- ✅ Code splitting automático
- ✅ Compresión HTML

## 📧 Integración del Formulario

El formulario actualmente hace `console.log`. Para conectarlo:

### Opción 1: Formspree (Más fácil)

```astro
<form action="https://formspree.io/f/tu-id" method="POST">
  <!-- campos del formulario -->
</form>
```

### Opción 2: EmailJS

1. Crea cuenta en [EmailJS](https://emailjs.com)
2. Añade el script en `Layout.astro`
3. Actualiza el handler en `Contact.astro`

### Opción 3: API Propia

```typescript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

## 🔍 SEO

Para mejorar SEO, añade en `Layout.astro`:

```html
<!-- Open Graph -->
<meta property="og:title" content="Tu Nombre - Developer" />
<meta property="og:description" content="Tu descripción" />
<meta property="og:image" content="/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@tuusuario" />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## ♿ Accesibilidad

El portfolio incluye:
- Navegación por teclado
- ARIA labels en botones e iconos
- Alto contraste de colores
- Textos alternativos en imágenes
- Focus states visibles

## 🐛 Troubleshooting

### El servidor no inicia

```bash
# Borra node_modules y reinstala
rm -rf node_modules
npm install
```

### Errores de TypeScript

```bash
# Regenera tipos de Astro
npm run astro sync
```

### Estilos no se aplican

- Verifica que uses `<style>` tags en componentes `.astro`
- Usa `is:global` para estilos globales:
```astro
<style is:global>
  /* estilos globales aquí */
</style>
```

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com)
- [Can I Use](https://caniuse.com) - Compatibilidad CSS

## 🎉 Diferencias vs Versión HTML

### Ventajas de Astro:
- ⚡ **50-90% menos JavaScript** - Carga ultra rápida
- 🎯 **Componentes modulares** - Código más organizado
- 📦 **Build optimizado** - HTML estático pre-renderizado
- 🔄 **Hot reload** - Desarrollo más rápido
- 📱 **Mejor rendimiento móvil** - Menos recursos

### Simplificaciones:
- ❌ Eliminadas: Servicios, Testimonios, Certificaciones
- ❌ Reducido de 6 a 3 proyectos destacados
- ❌ Menos animaciones innecesarias
- ✅ Enfoque en lo esencial
- ✅ Navegación más directa

## 🤝 Contribuir

Este es un template personal, pero puedes:
1. Fork el proyecto
2. Personalízalo para ti
3. Compártelo con otros developers

## 📝 Notas Finales

- **Menos es más**: Portfolio enfocado y al grano
- **Rendimiento primero**: Astro elimina JS innecesario
- **Mobile-first**: Pensado para verse bien en móviles
- **Fácil de mantener**: Estructura simple y clara

---

**Hecho con ❤️ y Astro 🚀**

¿Preguntas? Revisa la [documentación de Astro](https://docs.astro.build) o abre un issue.
