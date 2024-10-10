# Guía de Despliegue para Portafolio en GitHub Pages

Esta guía detalla los pasos para desplegar tu aplicación React en GitHub Pages.

## Prerrequisitos

- Node.js y npm (o yarn) instalados
- Git instalado
- Una cuenta de GitHub
- Tu proyecto React inicializado con Vite

## Pasos para el Despliegue

### 1. Configuración del Proyecto

1.1. Actualiza tu `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio/',
  build: {
    outDir: 'docs'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
})
```

1.2. Actualiza tu `src/App.jsx` para usar el `basename` correcto:

```jsx
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/Portafolio">
      {/* Resto de tu código */}
    </Router>
  );
};
```

### 2. Proceso de Build

2.1. Elimina la carpeta `docs` si existe:

```bash
rm -rf docs
```

2.2. Ejecuta el comando de build:

```bash
npm run build
```

o si usas yarn:

```bash
yarn build
```

Esto creará una nueva carpeta `docs` con los archivos de producción.

### 3. Ajustes Post-Build

3.1. Verifica que el archivo `docs/index.html` tenga las rutas correctas:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./assets/react-XXXXXX.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>F R E D G A R</title>
    <script type="module" crossorigin src="./assets/index-XXXXXX.js"></script>
    <link rel="stylesheet" crossorigin href="./assets/index-XXXXXX.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

3.2. Crea un archivo `docs/404.html` con el mismo contenido que `index.html`.

### 4. Commit y Push

4.1. Agrega los cambios al staging:

```bash
git add .
```

4.2. Realiza el commit:

```bash
git commit -m "Prepara para despliegue en GitHub Pages"
```

4.3. Push a GitHub:

```bash
git push origin main
```

### 5. Configuración de GitHub Pages

5.1. Ve a la página de tu repositorio en GitHub.

5.2. Haz clic en "Settings" (Configuración).

5.3. En el menú lateral, haz clic en "Pages".

5.4. En la sección "Source", selecciona la rama `main` y la carpeta `/docs`.

5.5. Haz clic en "Save".

### 6. Verificación

6.1. Espera unos minutos a que GitHub Pages actualice tu sitio.

6.2. Visita `https://[tu-usuario].github.io/Portafolio/` para ver tu sitio desplegado.

## Solución de Problemas

- Si encuentras errores 404, verifica que las rutas en `index.html` y `404.html` sean correctas.
- Asegúrate de que todos los archivos necesarios estén en la carpeta `docs`.
- Limpia la caché de tu navegador o intenta acceder al sitio en una ventana de incógnito.
- Revisa los logs de GitHub Actions (si está configurado) para ver si hay errores en el proceso de despliegue.

## Notas Adicionales

- Cada vez que hagas cambios y quieras actualizarlos en GitHub Pages, repite los pasos 2, 3 y 4.
- Considera usar una herramienta como `gh-pages` para automatizar el proceso de despliegue en proyectos más grandes.