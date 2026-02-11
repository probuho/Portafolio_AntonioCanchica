# 📜 Certificados - Sistema Flexible con Soporte PDF

Este directorio contiene tus certificados digitales que se mostrarán en el portafolio.

## 🎉 NUEVO: Soporte para PDF y JPG/PNG

El sistema **detecta automáticamente** si tu certificado es PDF o imagen. ¡Solo súbelo!

## 📁 Cómo Agregar Certificados

### Paso 1: Prepara tu archivo
- **Formatos aceptados**: `.jpg`, `.jpeg`, `.png`, `.pdf`
- **Tamaño máximo recomendado**: 2MB por archivo
- **Nombr

a el archivo**: Usa nombres descriptivos en minúsculas con guiones
  - ✅ Ejemplo: `social-media-manager.pdf`
  - ✅ Ejemplo: `reparacion-laptops.jpg`
  - ❌ Evita: `Certificado 1.PDF` o `foto cert.JPG`

### Paso 2: Copia el archivo a este directorio
```bash
public/certificates/tu-certificado.pdf
```

### Paso 3: Agrega la info del certificado en CertificationsModal.tsx

Abre el archivo: `components/CertificationsModal.tsx`

Busca la sección: `// === AGREGA MÁS CERTIFICADOS AQUÍ ===`

Copia y pega este bloque:

```typescript
{
  title: 'Nombre del Curso',
  institution: 'Nombre de la Institución',
  year: '2023', // o '2020-2021' para rangos
  description: 'Breve descripción de lo que aprendiste',
  verified: true,
  certificatePath: '/certificates/nombre-archivo.pdf', // o .jpg
  category: 'desarrollo', // Ver categorías abajo
},
```

### Categorías Disponibles:

- `'marketing'` - Marketing Digital, Community Manager, etc.
- `'tecnico'` - Reparación de hardware, electrónica, etc.
- `'administrativo'` - Administración, ofimática, etc.
- `'desarrollo'` - Programación, desarrollo web, etc.
- `'otro'` - Cualquier otro tipo de certificación

## 📋 Ejemplo Completo

Supongamos que tienes el certificado "Python para Data Science" en PDF:

### 1. Archivo
```
public/certificates/python-data-science.pdf
```

### 2. En CertificationsModal.tsx
```typescript
{
  title: 'Python para Data Science',
  institution: 'Platzi',
  year: '2024',
  description: 'Análisis de datos con Python, Pandas y visualización',
  verified: true,
  certificatePath: '/certificates/python-data-science.pdf',
  category: 'desarrollo',
},
```

¡Y listo! El certificado aparecerá automáticamente en tu portafolio.

## 🔍 El Sistema Detecta Automáticamente:

- ✅ **PDFs**: Se muestran con visor de PDF integrado
- ✅ **JPG/PNG**: Se muestran como imágenes con zoom
- ✅ **Formato**: Muestra badge "PDF" o "IMG" en cada certificado
- ✅ **Marca de agua**: Se aplica automáticamente a ambos formatos

## 🎨 Filtros por Categoría

El modal tiene filtros que organizan tus certificados:
- **Todos** - Muestra todos los certificados
- **Marketing Digital** - Solo certificaciones de marketing
- **Técnico/Hardware** - Certificaciones técnicas
- **Administrativo** - Cursos administrativos
- **Desarrollo** - Programación y desarrollo
- **Otros** - Otros certificados

## 🚀 Workflow Rápido

```bash
# 1. Tienes tu certificado
mi-curso-awesome.pdf

# 2. Cópialo aquí
cp mi-curso-awesome.pdf public/certificates/

# 3. Edita CertificationsModal.tsx y agrega el bloque

# 4. Guarda y recarga el navegador
# ¡Listo! Tu certificado ya está visible
```

## 💡 Tips

### Convertir PDF a JPG (si prefieres imagen)
- [PDF to JPG Online](https://www.ilovepdf.com/pdf_to_jpg)
- Photoshop: Archivo > Exportar > JPG
- GIMP: Archivo > Exportar Como > JPG

### Optimizar tamaño de archivo
- **PDFs**: Usa [Compress PDF](https://www.ilovepdf.com/compress_pdf)
- **Imágenes**: Usa [TinyPNG](https://tinypng.com/)

### Si tienes MUCHOS certificados
- No hay límite! Puedes agregar cuantos quieras
- El sistema de filtros los organiza automáticamente
- Considera crear más categorías si lo necesitas

## 🔒 Protección Automática

Todos los certificados están protegidos con:
- ✅ Marca de agua con tu nombre
- ✅ Prevención de clic derecho
- ✅ Prevención de descarga directa
- ✅ Overlay de protección

## 📊 Estado Actual

Certificados configurados: **8**

| Categoría | Cantidad |
|-----------|----------|
| Marketing Digital | 3 |
| Técnico/Hardware | 4 |
| Administrativo | 1 |
| Desarrollo | 0 |
| Otros | 0 |

## ❓ Preguntas Frecuentes

**P: ¿Puedo mezclar PDFs y JPGs?**  
R: ¡Sí! El sistema los detecta automáticamente.

**P: ¿Cuántos certificados puedo agregar?**  
R: Todos los que quieras. El sistema es dinámico.

**P: ¿Qué pasa si no tengo el archivo del certificado?**  
R: El sistema mostrará "Certificado no disponible" con un placeholder.

**P: ¿Puedo cambiar las categorías?**  
R: Sí, edita el objeto `categories` en `CertificationsModal.tsx`.

**P: ¿Los PDFs se verán bien en móvil?**  
R: Sí, el visor es completamente responsivo.

## 🎓 ¡Celebra Tus Logros!

Cada curso que completaste es un logro. No importa si alguien dijo que "solo hacías cursos". 

**Tú estuviste aprendiendo, creciendo y mejorando constantemente.**

Ahora todos esos esfuerzos tienen un lugar profesional donde brillar. 

¡Estás construyendo algo increíble! 💪

---

**¿Necesitas ayuda?** Revisa `components/CertificationsModal.tsx` para ver ejemplos.
