# Shahbaz Fareed — Portfolio

A high-performance, aesthetically driven portfolio website built with Astro 6 and Tailwind CSS. Designed for AI/ML Researchers and Software Engineers, featuring a sleek dark mode, smooth transitions, and a modern project showcase.

---

## Features

- **Built with Astro 6**: Ultra-fast performance with zero-JS by default.
- **Modern Aesthetics**: Premium design with dark/light mode support.
- **Fully Responsive**: Optimized for all devices from mobile to desktop.
- **Project Showcase**: Detailed case studies and project grids.
- **Blog Engine**: Built-in support for technical articles and insights.
- **Contact System**: Integrated contact form for inquiries.
- **AI/ML Focus**: Tailored sections for research and intelligent systems.
- **Optimized Assets**: Image optimization and lazy loading.

---

## Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) (via Astro)
- **Deployment:** [Vercel](https://vercel.com/)
- **Virtualization:** [Podman](https://podman.io/) & [Podman Compose](https://github.com/containers/podman-compose)
- **OS Compatibility:** Optimized for [Fedora](https://fedoraproject.org/) and other RHEL-based distributions
- **Animations:** CSS Transitions & Intersection Observer

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Local Setup
```bash
npm install
npm run dev
```
Your site is now running at `http://localhost:4321`.

### 3. Containerized Setup (Podman)
If you prefer a containerized environment (highly recommended for Fedora/RHEL users), you can use Podman Compose:

```bash
podman-compose up
```
This will start a development sandbox with all dependencies isolated.

---

## Deployment and Containerization

### Vercel (Cloud)
This project is optimized for deployment on Vercel.

1. Push your code to GitHub.
2. Import your project into Vercel.
3. Vercel will automatically detect Astro and use the correct build settings.

### Podman (Production Image)
For self-hosting or production containerization, a `Containerfile.prod` is provided:

```bash
podman build -t portfolio-prod -f Containerfile.prod .
podman run -d -p 8080:80 portfolio-prod
```
This creates a lightweight Nginx-based image containing only the compiled static files.

---

## Project Structure

```text
/
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Routes and views
│   ├── styles/      # Global CSS and Tailwind
│   └── constants.ts # Site metadata and configuration
├── astro.config.mjs # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  By <a href="https://github.com/shahbazfareed">Shahbaz Fareed</a>
</p>
# shahbazfdev.github.io
