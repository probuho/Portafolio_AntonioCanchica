# 🚀 Guía de Deployment en Vercel

Esta guía te ayudará a desplegar tu portafolio en Vercel de forma gratuita.

## Opción 1: Deployment desde GitHub (Recomendado)

### Paso 1: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) y haz clic en "New repository"
2. Nombre del repositorio: `Portafolio_AntonioCanchica` (o el que prefieras)
3. Descripción: "Mi portafolio personal como Full Stack Developer"
4. Deja el repositorio como **público** (o privado si prefieres)
5. No inicialices con README (ya tenemos uno)
6. Haz clic en "Create repository"

### Paso 2: Subir el Código a GitHub

Desde tu terminal, ejecuta estos comandos en el directorio del proyecto:

```bash
# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "🚀 Primer commit: Portafolio cyberpunk completo"

# Conectar con tu repositorio remoto
git remote add origin https://github.com/probuho/Portafolio_AntonioCanchica.git

# Subir a GitHub
git push -u origin main
```

### Paso 3: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up" o "Log In"
3. Conecta tu cuenta de GitHub
4. Haz clic en "Add New" → "Project"
5. Busca tu repositorio `Portafolio_AntonioCanchica`
6. Haz clic en "Import"

### Paso 4: Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Configuración:

- **Framework Preset**: Next.js (auto-detectado)
- **Root Directory**: `./` (dejar por defecto)
- **Build Command**: `next build` (auto-detectado)
- **Output Directory**: `.next` (auto-detectado)
- **Install Command**: `npm install` (auto-detectado)

**No necesitas configurar variables de entorno** para este proyecto.

### Paso 5: Deploy

1. Haz clic en "Deploy"
2. Espera 2-3 minutos mientras Vercel construye tu sitio
3. ¡Listo! Tu portafolio estará en vivo en una URL como:
   - `https://portafolio-antonio-canchica.vercel.app`

## Opción 2: Deployment desde CLI

### Instalar Vercel CLI

```bash
npm i -g vercel
```

### Login en Vercel

```bash
vercel login
```

### Deploy

```bash
# Desde el directorio del proyecto
vercel

# Para deploy a producción
vercel --prod
```

## 🎯 Configurar Dominio Personalizado (Opcional)

### En Vercel:

1. Ve a tu proyecto en Vercel Dashboard
2. Haz clic en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

### Dominios Gratuitos:

- `.vercel.app` (incluido gratis)
- Puedes comprar dominios en:
  - [Namecheap](https://www.namecheap.com)
  - [GoDaddy](https://www.godaddy.com)
  - [Google Domains](https://domains.google)

## 🔄 Actualizaciones Automáticas

Una vez conectado con GitHub:

1. Cada vez que hagas `git push` a la rama `main`
2. Vercel automáticamente:
   - Detectará los cambios
   - Construirá el proyecto
   - Desplegará la nueva versión
   - ¡Sin hacer nada más!

## 📊 Monitoreo

Vercel te proporciona:

- ✅ Analytics de visitantes
- ✅ Logs de deploy
- ✅ Métricas de rendimiento
- ✅ Notificaciones de errores

Todo disponible en el Dashboard de Vercel.

## 🎨 Personalizar URL de Preview

Por defecto, Vercel te da una URL como:
- `portafolio-antonio-canchica.vercel.app`

Para personalizarla:

1. Ve a "Settings" → "Domains" en Vercel
2. Puedes agregar un alias más corto como:
   - `antonio-ruiz.vercel.app`
   - `antoniorc.vercel.app`

## 💡 Tips Pro

### 1. Protege tu rama main

```bash
# Trabaja en ramas de desarrollo
git checkout -b feature/nueva-seccion
# Haz tus cambios
git add .
git commit -m "✨ Agregada nueva sección"
git push origin feature/nueva-seccion
```

### 2. Preview Deployments

Vercel crea un deploy de preview para cada Pull Request, perfecto para revisar cambios antes de mergear.

### 3. Variables de Entorno

Si en el futuro necesitas variables de entorno:

```bash
# Localmente
vercel env add

# O en Vercel Dashboard: Settings → Environment Variables
```

## 🆘 Solución de Problemas

### Error: "Build failed"

1. Verifica que el código funcione localmente:
   ```bash
   npm run build
   ```
2. Revisa los logs en Vercel Dashboard
3. Asegúrate que todas las dependencias estén en `package.json`

### Error: "Cannot find module"

```bash
# Reinstala dependencias
rm -rf node_modules
rm package-lock.json
npm install
```

### El sitio se ve raro

1. Limpia la caché de Vercel:
   - Ve a Deployments → ⋮ → Redeploy
2. Verifica que Tailwind esté generando los estilos correctamente

## 📱 Compartir tu Portafolio

Una vez desplegado, comparte tu URL en:

- ✅ LinkedIn (en tu perfil, sección de sitio web)
- ✅ GitHub (actualiza tu perfil y README de usuario)
- ✅ CV (agrega el link)
- ✅ Redes sociales

## 🎉 ¡Felicidades!

Ahora tienes un portafolio profesional en vivo, accesible 24/7 desde cualquier parte del mundo.

**URL de ejemplo**: https://portafolio-antonio-canchica.vercel.app

---

**¿Problemas?** Contacta a Antonio en contactoprobuho@gmail.com
