# BIDCSA Website - Deployment Instructions

## Archivos Incluidos

- `index.html` - Página de Inicio
- `experiencia.html` - Página de Experiencia
- `servicios.html` - Página de Servicios
- `contacto.html` - Página de Contacto
- `styles.css` - Estilos CSS
- `script.js` - JavaScript
- `logo.png` - Logo de BIDCSA

## Cómo Desplegar en Cloudflare Pages

### Opción 1: Despliegue Directo (Más Rápido)

1. **Descarga todos los archivos** a una carpeta en tu computadora

2. **Ve a Cloudflare Dashboard**
   - Accede a https://dash.cloudflare.com/
   - Inicia sesión con tu cuenta

3. **Ve a Pages**
   - En el menú lateral, selecciona "Workers & Pages"
   - Haz clic en "Create application"
   - Selecciona la pestaña "Pages"
   - Haz clic en "Upload assets"

4. **Sube tus archivos**
   - Arrastra todos los archivos del sitio a la zona de carga
   - Asegúrate de incluir TODOS los archivos (HTML, CSS, JS, logo)
   - Dale un nombre al proyecto (ej: "bidcsa-website")
   - Haz clic en "Deploy site"

5. **Conecta tu dominio bidcsa.com**
   - Una vez desplegado, ve a "Custom domains"
   - Haz clic en "Set up a custom domain"
   - Ingresa "bidcsa.com"
   - Cloudflare configurará automáticamente el DNS
   - También agrega "www.bidcsa.com" si lo deseas

### Opción 2: Despliegue con Git (Recomendado para actualizaciones futuras)

1. **Crea un repositorio en GitHub**
   - Ve a https://github.com/new
   - Crea un nuevo repositorio (puede ser privado)
   - Sube todos los archivos del sitio al repositorio

2. **Conecta Cloudflare Pages con GitHub**
   - En Cloudflare Pages, haz clic en "Create application"
   - Selecciona "Connect to Git"
   - Autoriza Cloudflare a acceder a tu GitHub
   - Selecciona el repositorio que creaste

3. **Configura el despliegue**
   - Framework preset: Ninguno (None)
   - Build command: (déjalo vacío)
   - Build output directory: `/`
   - Haz clic en "Save and Deploy"

4. **Conecta tu dominio**
   - Igual que en la Opción 1, paso 5

## Personalización del Contenido

### Actualizar Información de Contacto

En todas las páginas HTML, busca y reemplaza:
- `info@bidcsa.com` → tu email real
- `+52 (55) XXXX-XXXX` → tu teléfono real
- `Ciudad de México, México` → tu ubicación real

### Configurar el Formulario de Contacto

El formulario actualmente solo muestra un mensaje de éxito. Para hacerlo funcional:

#### Opción A: Usar Formspree (Recomendado - Gratis)
1. Crea una cuenta en https://formspree.io/
2. Crea un nuevo formulario
3. Copia tu Form ID
4. En `script.js`, descomenta el código de Formspree y agrega tu Form ID

#### Opción B: Usar Web3Forms (Gratis)
1. Ve a https://web3forms.com/
2. Ingresa tu email y obtén tu Access Key
3. Modifica el formulario en `contacto.html` para usar Web3Forms

#### Opción C: Usar Cloudflare Workers
Puedes crear un Worker en Cloudflare para procesar los formularios directamente.

### Actualizar Contenido

Puedes editar fácilmente el contenido en cada archivo HTML:
- Abre el archivo con un editor de texto
- Busca el texto que quieres cambiar
- Guarda y vuelve a desplegar

## Características del Sitio

✅ Diseño responsive (funciona en móviles, tablets, y escritorio)
✅ Colores corporativos de BIDCSA (azul marino y verde lima)
✅ 4 páginas completas: Inicio, Experiencia, Servicios, Contacto
✅ Formulario de contacto
✅ Navegación funcional
✅ Optimizado para velocidad
✅ SEO-friendly

## Estructura de Archivos

```
bidcsa-website/
├── index.html          # Página de inicio
├── experiencia.html    # Página de experiencia
├── servicios.html      # Página de servicios
├── contacto.html       # Página de contacto
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── logo.png            # Logo de BIDCSA
└── README.md           # Este archivo
```

## Notas Importantes

1. **DNS**: Si tu dominio ya apunta a Cloudflare, la conexión será automática
2. **HTTPS**: Cloudflare proporciona SSL gratis automáticamente
3. **Actualizaciones**: Cualquier cambio que hagas y subas se desplegará automáticamente
4. **Sin costo**: Cloudflare Pages es completamente gratis para sitios estáticos

## Soporte

Si tienes problemas con el despliegue:
1. Verifica que todos los archivos estén subidos
2. Revisa la consola de Cloudflare para errores
3. Asegúrate de que el DNS esté configurado correctamente

## Próximos Pasos Sugeridos

1. Actualiza la información de contacto con datos reales
2. Configura el formulario de contacto con Formspree o Web3Forms
3. Agrega contenido real en la sección de Experiencia
4. Sube fotos de proyectos reales (opcional)
5. Configura Google Analytics para rastrear visitantes (opcional)

¡Tu sitio está listo para desplegarse!
