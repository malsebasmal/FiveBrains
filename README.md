
# FiveBrains - Plataforma de Herramientas Educativas

## 🧠 Descripción

FiveBrains es una plataforma integral que combina 5 herramientas esenciales para optimizar el proceso de aprendizaje. Diseñada para estudiantes que buscan maximizar su productividad académica.

## 🏗 Estructura del Proyecto

```
FiveBrains/
├── public/              # Assets estáticos
├── src/
│   ├── assets/         # Íconos e imágenes
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Plantillas base
│   ├── pages/          # Rutas principales
│   ├── styles/         # Estilos globales
│   └── utils/          # Funciones auxiliares
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias
└── tailwind.config.js  # Configuración de Tailwind
```

## 🚀 Instrucciones para Ejecución

### Requisitos previos

- Node.js v18+
- pnpm

### Instalación

```bash
pnpm install
```

### Desarrollo

```bash
pnpm run dev
```

### Producción

```bash
pnpm run build
pnpm run preview
```

## 📊 Integraciones de Tracking

- **Google Analytics** – Configurado en `src/layouts/Layout.astro`
- **Hotjar** – Para análisis de comportamiento de usuarios.
- **Sentry** – Monitoreo de errores.

> ⚠️ Las claves de API están gestionadas mediante variables de entorno.

## 🤔 Justificación de Decisiones Técnicas

### ⚡ Astro

- **Rendimiento:** Genera sitios estáticos ultra-rápidos.
- **Flexibilidad:** Permite usar componentes de múltiples frameworks.
- **SEO:** Renderizado del lado del servidor nativo.

### 🎨 Tailwind CSS v4

- **Eficiencia:** Usa el nuevo motor JIT más rápido.
- **Customización:** Extensión fácil con colores y animaciones personalizadas.
- **Consistencia:** Sistema de diseño unificado.

### 🛠 Otras Tecnologías Clave

| Tecnología             | Propósito               | Beneficio                   |
|------------------------|-------------------------|-----------------------------|
| AOS                    | Animaciones al hacer scroll | Mejora experiencia visual  |
| @midudev/animations    | Efectos para Tailwind   | Biblioteca especializada     |

## 🌈 Paleta de Colores

```js
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
```

## 🤝 Contribución

1. Haz fork del proyecto
2. Crea tu branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request
