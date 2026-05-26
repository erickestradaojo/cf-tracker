# CF Tracker · Erick

Web app PWA para tracking de entrenamiento CrossFit + nutrición.

## 🚀 Instalación rápida (3 pasos)

### 1. Subir a un host gratuito

Necesitas un servidor HTTPS para que funcione como PWA. **3 opciones gratis** (la más fácil primero):

#### Opción A: Netlify Drop (más rápida, sin cuenta)
1. Abre **https://app.netlify.com/drop** en tu computadora
2. Arrastra esta carpeta completa (`cf-tracker-pwa`) a la página
3. En segundos tendrás una URL tipo `https://random-name-12345.netlify.app`
4. Listo

#### Opción B: GitHub Pages
1. Crea un repo en GitHub, sube estos archivos
2. Settings → Pages → Source: main branch → Save
3. URL: `https://tu-usuario.github.io/nombre-repo/`

#### Opción C: Vercel
1. https://vercel.com → Login → New Project
2. Drag & drop la carpeta
3. URL automática

### 2. Abrir en iPhone Safari

1. Copia la URL que te dio el host
2. Pégala en **Safari** (no Chrome, debe ser Safari)
3. Espera que cargue completo

### 3. Agregar a pantalla de inicio

1. Tap en el **botón Compartir** (cuadrado con flecha hacia arriba) en la barra inferior de Safari
2. Scroll hacia abajo → **"Agregar a pantalla de inicio"**
3. Confirma el nombre **"CF Tracker"**
4. Tap "Agregar"

Listo. Ahora tienes un icono en tu home screen que se abre como app nativa, **funciona sin internet** después de la primera carga, y guarda todo localmente en tu iPhone.

---

## 📁 Archivos incluidos

- `index.html` - Punto de entrada
- `app.js` - Toda la lógica de la app
- `manifest.json` - Metadata PWA (nombre, iconos, colores)
- `sw.js` - Service worker (offline + cache)
- `icon-192.png` / `icon-512.png` - Iconos para home screen

---

## 🔧 Cómo funciona

### Tu Semana 1 ya está cargada
La rutina que me pasó Rodrigo está hardcodeada como Semana 1. Solo abre la app y empieza.

### Para cargar Semana 2, 3, 4...
1. En la vista de Entrenamiento, tap el botón **"+"** arriba
2. Pega el texto del Word de Rodrigo
3. Pon el número de semana
4. Guardar

El parser entiende:
- `LUNES`, `MARTES`, etc. → divide en días
- `1-WEIGHTLIFTING`, `2-CONDITIONING`, etc. → divide en bloques
- `1x5 65 lbs`, `5x5 75%`, etc. → sets/reps/peso

Si algo no parsea bien, puedes ajustarlo manualmente (próxima versión).

### Para ver semanas pasadas
Tap en "SEMANA X · Rodrigo Rivera" arriba → selector de semanas.

### Para ver historial de un ejercicio
En cualquier ejercicio, tap el ícono de reloj (📜) → modal con todas las veces que hiciste ese ejercicio en semanas pasadas, con qué status (RX/↓/↑) y qué peso.

### Para ver tus PRs
Botón amarillo "PR" arriba a la derecha → lista de todos tus 1RM ordenados.

---

## 💾 Datos

Todo se guarda en `localStorage` de tu iPhone. Esto significa:
- ✅ Funciona sin internet
- ✅ Es privado (solo tú lo ves)
- ✅ Persiste si cierras la app
- ⚠️ Si borras Safari/la app, pierdes los datos
- ⚠️ No sincroniza entre dispositivos

(En el futuro podríamos agregar export/backup a un archivo, o cuenta en la nube.)

---

## 🥗 Nutrición

La sección de Nutrición está en **placeholder** esperando el plan de Paula Martinez. Cuando lo recibas, lo agregamos.

---

## 🐛 Si algo no funciona

- **Iconos no salen:** asegúrate que `icon-192.png` e `icon-512.png` estén en la misma carpeta
- **No funciona offline:** entra una vez con internet, espera 5 segundos, luego puedes usarla offline
- **Quieres reiniciar todo:** Settings de Safari → Avanzado → Datos de sitios web → buscar el dominio → Eliminar

---

**Mantente disciplinado. Que cada set cuente.**
