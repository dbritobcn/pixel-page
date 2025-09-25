# Pixel Page - Team Page easyname

Este es un proyecto interactivo que muestra una página de equipo con animaciones pixel art. Contiene 4 pestañas principales:

1. **2. Stock** - Segundo piso de la oficina con animaciones de empleados
2. **1. Stock** - Primer piso de la oficina con animaciones de empleados
3. **Rechenzentrum** - Centro de datos con animaciones tipo Pac-Man
4. **Unser echtes Leben** - Video del equipo en acción real

## Características

- Interface interactiva con tabs navegables
- Animaciones CSS de personajes pixel art
- Tooltips informativos al hacer hover sobre elementos
- Biografías emergentes al hacer clic en los empleados
- Diseño responsivo con Bootstrap
- Compilación automática de LESS a CSS

## Requisitos

- Node.js y npm
- Bower (instalado globalmente)
- Navegador web moderno
- Servidor web local (incluye instrucciones para Python)

## Instalación y ejecución

### 1. Instalar dependencias

```bash
# Instalar Bower globalmente
npm install -g bower

# Instalar dependencias del proyecto
bower install
```

### 2. Iniciar servidor web local

```bash
# Usando Python 3 (recomendado)
python3 -m http.server 8080

# O usando Python 2
python -m SimpleHTTPServer 8080

# O usando Node.js (si tienes http-server instalado)
npx http-server -p 8080
```

### 3. Abrir en el navegador

Navega a: `http://localhost:8080`

## Estructura del proyecto

```
pixelpage/
├── bower.json              # Dependencias del proyecto
├── index.html              # Página principal
├── js/
│   └── team.js             # Lógica de interacciones
├── less/
│   ├── main.less           # Estilos principales
│   └── team.less           # Estilos específicos del equipo
├── images/
│   └── team/
│       ├── people/         # Fotos reales y pixel art del equipo
│       ├── scenes/         # Imágenes de los pisos y oficinas
│       └── sprites/        # Sprites de animaciones
└── bower_components/       # Librerías instaladas por Bower
```

## Dependencias principales

- **jQuery 2.1.x** - Manipulación del DOM
- **Bootstrap 3.2.x** - Framework CSS responsivo
- **LESS 4.x** - Preprocesador CSS
- **Fancybox 3.x** - Lightbox para imágenes
- **iScroll 5.1.3** - Scroll táctil
- **HTML5Shiv & Respond.js** - Compatibilidad IE

## Funcionalidades

### Navegación por pestañas

Haz clic en las miniaturas superiores para cambiar entre:

- Pisos de oficina (con empleados animados)
- Centro de datos (con animaciones tipo juego)
- Video del equipo real

### Interacciones

- **Hover**: Muestra tooltips informativos
- **Click en empleados**: Abre biografías personales
- **Drag**: Navega por escenas grandes
- **Elementos interactivos**: Activan animaciones especiales

### Animaciones

- Caminatas automáticas de personajes pixel art
- Animaciones de objetos (plantas, máquinas, etc.)
- Transiciones suaves entre secciones

## Notas técnicas

- Los archivos LESS se compilan automáticamente en el navegador
- Las imágenes están optimizadas para web
- Compatible con navegadores modernos
- Responsive design para dispositivos móviles

## Troubleshooting

Si encuentras problemas:

1. **Dependencias faltantes**: Ejecuta `bower install`
2. **CORS errors**: Usa un servidor web local, no abras el archivo directamente
3. **Estilos no cargan**: Verifica que less.js esté incluido correctamente
4. **Imágenes rotas**: Confirma que las rutas en `images/team/` existen

## Créditos

Desarrollado originalmente para easyname GmbH como parte de su página de equipo corporativo.
