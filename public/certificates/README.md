# 📜 Certificados - Instrucciones de Uso

Este directorio contiene los certificados digitales que se mostrarán en el portafolio.

## 📁 Estructura de Archivos

Cada certificado debe estar nombrado exactamente como se especifica abajo para que aparezca correctamente en el portafolio:

```
public/certificates/
├── social-media-manager.jpg
├── community-manager-online.jpg
├── community-manager.jpg
├── seguridad-electronica.jpg
├── asistente-administrativo.jpg
├── reparacion-celulares.jpg
├── reparacion-impresoras.jpg
└── reparacion-laptops.jpg
```

## 📋 Lista de Certificados Requeridos

| Archivo | Certificado | Institución | Año |
|---------|-------------|-------------|-----|
| `social-media-manager.jpg` | Social Media Manager | Creative Diseños Academy | 2021 |
| `community-manager-online.jpg` | Community Manager Online | Creative Diseños Academy | 2021 |
| `community-manager.jpg` | Community Manager | ALPESINC Agencia de Marketing | 2021 |
| `seguridad-electronica.jpg` | Seguridad Electrónica 1 | Instituto Keys | 2017-2018 |
| `asistente-administrativo.jpg` | Asistente Administrativo | Academia Americana | 2015 |
| `reparacion-celulares.jpg` | Reparación de Celulares | Academia Americana | 2014 |
| `reparacion-impresoras.jpg` | Mantenimiento de Impresoras | Instituto Keys | 2013 |
| `reparacion-laptops.jpg` | Técnico Reparación de Laptops | Instituto Keys | 2012 |

## 📸 Formatos Aceptados

- **Imágenes**: `.jpg`, `.jpeg`, `.png`, `.webp`
- **PDFs**: `.pdf` (se convertirán automáticamente en el visor)
- **Tamaño recomendado**: Máximo 2MB por archivo
- **Resolución**: Mínimo 1200px de ancho para buena calidad

## 🔧 Cómo Agregar un Certificado

### Opción 1: Desde archivo de imagen o PDF

1. **Escanea o fotografía** tu certificado físico
2. **Nombra el archivo** exactamente como se indica en la tabla de arriba
3. **Copia el archivo** a este directorio (`public/certificates/`)
4. El certificado aparecerá automáticamente cuando hagas clic en "Ver Certificado"

### Opción 2: Si tu certificado está en PDF

1. Convierte el PDF a imagen usando:
   - **Online**: [PDF to JPG](https://www.ilovepdf.com/pdf_to_jpg)
   - **Photoshop/GIMP**: Exportar como JPG
   - **Windows**: Imprimir como imagen
2. Guarda como `.jpg` con el nombre correcto
3. Copia a `public/certificates/`

## ✅ Verificación

Para verificar que tus certificados están correctamente configurados:

1. Ejecuta el proyecto: `npm run dev`
2. Navega a la sección **CV**
3. Haz clic en **"Ver Todas las Certificaciones"**
4. Haz clic en **"Ver Certificado"** en  cualquier certificación
5. El certificado debería aparecer con marca de agua

## 🔒 Protección de Certificados

Los certificados están protegidos con:

- ✅ **Marca de agua** con tu nombre
- ✅ **Prevención de clic derecho** (no se puede guardar la imagen)
- ✅ **Prevención de arrastre** (no se puede arrastrar la imagen)
- ✅ **Sin selección de texto** (no se puede copiar)
- ✅ **Overlay transparente** para dificultar capturas

## 🎨 Personalización

Si quieres cambiar el diseño de la marca de agua, edita el archivo:
```
components/CertificateViewer.tsx
```

Busca la sección de "Marca de agua diagonal" y personaliza:
- Color
- Tamaño del texto
- Opacidad
- Rotación

## 📌 Notas Importantes

- Los nombres de archivos son **sensibles a mayúsculas/minúsculas**
- Si falta un certificado, se mostrará un placeholder indicando "Certificado no disponible"
- Los certificados solo son visibles cuando haces clic en "Ver Certificado"
- La marca de agua dice "ANTONIO RUIZ" y no afecta la legibilidad

## 🚀 ¿Listo para Deploy?

Una vez que todos los certificados estén en su lugar:

1. Verifica que todos los archivos existan
2. Haz commit: `git add public/certificates/ && git commit -m "📜 Agregados certificados digitales"`
3. Push a GitHub: `git push`
4. Deploy en Vercel actualizará automáticamente

---

**¿Necesitas ayuda?** Revisa el archivo `components/CertificateViewer.tsx` para ver cómo funciona el sistema de visualización.
