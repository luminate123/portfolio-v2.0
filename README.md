# Portafolio v2.0

Mi portafolio personal y profesional, diseñado y desarrollado con [Astro](https://astro.build/). Este proyecto sirve como un catálogo interactivo y moderno para mostrar mi experiencia laboral, tecnologías adquiridas y los proyectos que he desarrollado (Front-end, Back-end y E-commerce).

## 🚀 Tecnologías Utilizadas

- **Astro** - Framework web ultrarrápido centrado en el contenido.
- **Tailwind CSS** - Framework CSS utilitario para estilizado rápido y responsivo.
- **TypeScript** - Tipado estático para un código más robusto.
- **React** (si aplica en tus componentes interactivos).
- Animaciones CSS y JavaScript nativo.

## 📂 Estructura del Proyecto

El proyecto sigue la convención estándar de Astro:

```text
/
├── public/           # Archivos estáticos como imágenes y logos (ej. placeholder.png)
├── src/              # Código fuente de la aplicación principal
│   ├── components/   # Componentes Astro (Header, Hero, Experience, Projects, Footer)
│   ├── layouts/      # Plantillas base (Layout.astro)
│   ├── pages/        # Párutas del sitio (index.astro)
│   └── styles/       # Estilos globales de CSS/Tailwind
├── astro.config.mjs  # Configuración de Astro
├── package.json      # Dependencias del proyecto
└── tsconfig.json     # Configuración de TypeScript
```

## 💻 Desarrollo Local

Para correr este proyecto en tu máquina local:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/luminate123/portfolio-v2.0.git
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo local:
   ```sh
   npm run dev
   ```

4. Abre tu navegador y dirígete a `http://localhost:4321/`

## 🛠 Comandos Disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala todas las dependencias                   |
| `npm run dev`             | Inicia el servidor local de desarrollo           |
| `npm run build`           | Compila el sitio para producción                 |
| `npm run preview`         | Previsualiza la compilación localmente           |

## 🎨 Proyectos Destacados (Componente Projects)

La sección de proyectos contiene un carrusel dinámico de imágenes, modales flotantes (lightbox) e información de los proyectos que he construido o participado, como:

- Corporativos (KML Tech Solutions)
- E-commerce con integraciones Shopify + Nest.js (Shop Test)
- Back-end / APIs Robustas en Java (API de Detección de Fraude)
- Landing pages para el sector médico (Cliniderma, Website Doctor)
