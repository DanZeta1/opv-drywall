# OPV Drywall — Vite + LESS

Sitio web de OPV Drywall migrado a **Vite 5** con **LESS** como preprocesador CSS.

## Estructura del proyecto

```
opv-drywall/
├── index.html                  ← Página principal (Quiénes somos / Misión / Valores)
├── vite.config.js
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Deploy automático a GitHub Pages
├── public/                     ← Archivos estáticos que NO pasan por Vite
│   └── (vacío por ahora)
└── src/
    ├── assets/                 ← Pega aquí todas tus imágenes y logos
    │   └── logo_1.png, imagen1.jpg, facebook.png ...
    ├── styles/
    │   └── main.less           ← Todos los estilos en LESS
    ├── js/
    │   └── main.js             ← Entry point: importa LESS + lógica JS
    └── pages/
        ├── acercaDe.html
        ├── galeria.html
        ├── preguntasFrecuentes.html
        ├── nuestrosProgramas.html
        ├── porqueOpv.html
        ├── testimonios.html
        ├── formRegistro.html
        ├── contactenos.html
        └── terminosYcondiciones.html
```

## Instalación local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview   # para revisar el build localmente
```

## ⚠️ Paso OBLIGATORIO antes de hacer push

Abre `vite.config.js` y cambia `base` con el nombre exacto de tu repositorio:

```js
base: '/TU-REPO-AQUI/',
```

Ejemplo: si tu repo se llama `opv-drywall`, déjalo como está.

## Deploy en GitHub Pages

### Opción A — Automático (recomendado)

1. Sube el proyecto a GitHub.
2. Ve a **Settings → Pages → Source** y elige **GitHub Actions**.
3. Cada push a `main` construye y despliega el sitio automáticamente.

### Opción B — Manual (gh-pages)

```bash
npm run build
npx gh-pages -d dist
```

## Assets

Copia tu carpeta `assets/` original dentro de `src/assets/`.  
Los archivos referenciados en el LESS y en los HTML deben estar ahí:

- `logo_1.png`, `logo_2.png`
- `imagen1.jpg` … `imagen14.jpg`
- `facebook.png`, `tiktok.png`, `gmail.png`, `fon.png`, `job.png`
