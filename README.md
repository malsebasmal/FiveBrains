# FiveBrains - Plataforma de Herramientas Educativas

## 🧠 Descripción

FiveBrains es una plataforma integral que combina 5 herramientas esenciales para optimizar el proceso de aprendizaje. Diseñada para estudiantes que buscan maximizar su productividad académica.

## 🏗 Estructura del Proyecto
FiveBrains/
├── public/ # Assets estáticos
├── src/
│ ├── assets/ # Íconos e imágenes
│ ├── components/ # Componentes reutilizables
│ ├── layouts/ # Plantillas base
│ ├── pages/ # Rutas principales
│ ├── styles/ # Estilos globales
│ └── utils/ # Funciones auxiliares
├── astro.config.mjs # Configuración de Astro
├── package.json # Dependencias
└── tailwind.config.js # Configuración de Tailwind

text

## 🚀 Instrucciones para Ejecución

### Requisitos previos
- Node.js v18+
- pnpm

### Instalación
```bash
pnpm install
Desarrollo
bash
pnpm run dev
Producción
bash
pnpm run build
pnpm run preview
📊 Integraciones de Tracking
Google Analytics (Configurado en src/layouts/Layout.astro)

Hotjar (Para análisis de comportamiento)

Sentry (Monitoreo de errores)

Nota: Las claves de API se gestionan mediante variables de entorno.

🤔 Justificación de Decisiones Técnicas
⚡ Astro
Rendimiento: Genera sitios estáticos ultra-rápidos

Flexibilidad: Permite usar componentes de múltiples frameworks

SEO: Renderizado del lado del servidor nativo

🎨 Tailwind CSS v4
Eficiencia: Utiliza el nuevo motor JIT más rápido

Customización: Fácil extensión con colores y animaciones personalizadas

Consistencia: Sistema de diseño unificado

🛠 Otras Tecnologías Clave
Tecnología	Propósito	Beneficio
AOS	Animaciones scroll	Efectos al desplazar
@midudev/animations	Efectos Tailwind	Biblioteca especializada
🌈 Paleta de Colores
javascript
// tailwind.config.js
theme: {
  colors: {
    'primary-blue': '#2a3b8f',
    'secondary-purple': '#6a3d9a',
    'accent-green': '#3cb371',
    'neutral-light': '#f0f0f0',
    'text-dark': '#333333'
  }
}
🤝 Contribución
Haz fork del proyecto

Crea tu branch (git checkout -b feature/nueva-funcionalidad)

Commit tus cambios (git commit -m 'Añade nueva funcionalidad')

Push al branch (git push origin feature/nueva-funcionalidad)

Abre un Pull Request

📄 Licencia
MIT © 2023 [Tu Nombre]