# Catálogo de Productos

<p align="center">
  <strong>Aplicación web para el registro, la catalogación y el cálculo de precios de productos.</strong>
</p>

<p align="center">
  <a href="[https://example.com](https://migueldotdev.github.io/web-gestion-productos/)">
    <img src="https://img.shields.io/badge/Ver%20demo-Abrir%20aplicaci%C3%B3n-222222?style=for-the-badge&logo=github" alt="Ver demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Firebase-Realtime%20Database-FFCA28?style=flat&logo=firebase&logoColor=black" alt="Firebase">
</p>

## Descripción

Catálogo de Productos es una aplicación web que permite registrar información de productos, visualizarlos en una tabla dinámica y calcular el importe de los productos agregados considerando su precio, stock e IVA.

El proyecto utiliza **HTML, CSS y JavaScript vanilla**, con Bootstrap para la interfaz y Firebase Realtime Database para almacenar los registros. Fue desarrollado como una práctica de integración de servicios de Firebase en una aplicación web estática.

## Funcionalidades

- **Registro de productos:** captura nombre, descripción, unidad de medida, precio unitario, stock y código de barras.
- **Validación progresiva:** habilita los campos del formulario conforme se completa la información requerida.
- **Selección de atributos:** permite especificar la consistencia del producto y sus modalidades de venta.
- **Tabla dinámica:** muestra los productos agregados durante la sesión.
- **Eliminación de productos:** permite retirar registros de la tabla antes de finalizar el trabajo.
- **Cálculo de precios:** calcula el importe de los productos según su precio y stock, aplica un IVA fijo del 16 % y muestra el total.
- **Almacenamiento en Firebase:** guarda los datos de los productos en Firebase Realtime Database.
- **Notificaciones visuales:** utiliza SweetAlert2 para mostrar mensajes y confirmaciones de las acciones.

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la aplicación y formularios. |
| CSS3 / SCSS | Estilos personalizados de la interfaz. |
| JavaScript vanilla | Validación, manipulación del DOM y lógica de la aplicación. |
| Bootstrap 5.3.3 | Maquetación y componentes de interfaz. |
| Firebase JS SDK 10.12.3 | Integración con Firebase desde el navegador. |
| Firebase Realtime Database | Persistencia de los registros de productos. |
| SweetAlert2 | Alertas y notificaciones. |
| Animate.css | Animaciones de la interfaz. |
| Ionicons | Iconografía. |
| Google Fonts | Tipografía Roboto. |

Las bibliotecas se cargan mediante CDN. El proyecto no requiere un framework de JavaScript ni un proceso de compilación para ejecutarse.

## Cómo funciona

La aplicación utiliza una estructura sencilla de frontend estático y se comunica directamente con Firebase Realtime Database desde el navegador.

1. El usuario completa el formulario de registro de productos.
2. La validación progresiva habilita el botón para agregar el registro cuando los campos requeridos están completos.
3. El producto se incorpora a una tabla y se mantiene en un arreglo en memoria.
4. La aplicación guarda el registro en Firebase utilizando su nombre como clave.
5. El usuario puede eliminar productos de la tabla o calcular el importe acumulado, incluido el IVA del 16 %.

### Almacenamiento de datos

Los registros se guardan en la siguiente ruta de Firebase Realtime Database:

```text
productos/{nombreDelProducto}
```

La aplicación utiliza el nombre del producto como clave y guarda información como su nombre, descripción, precio, unidad de medida y stock.

**Nota:** los productos almacenados no se recuperan automáticamente al cargar la página. La tabla refleja los productos agregados durante la sesión actual.

## Estructura del proyecto

```text
web-gestion-productos/
├── index.html
├── CSS/
│   ├── style.css
│   ├── style.css.map
│   └── style.scss
└── JS/
    ├── firebase-data.js
    ├── funciones.js
    └── scoope.js
```

| Archivo | Responsabilidad |
|---|---|
| `index.html` | Interfaz principal, formulario, tabla y calculadora. |
| `JS/scoope.js` | Validación, manipulación de la tabla, gestión de productos y cálculo de IVA. |
| `JS/firebase-data.js` | Inicialización de Firebase y almacenamiento de productos. |
| `JS/funciones.js` | Archivo auxiliar sin funcionalidad implementada actualmente. |
| `CSS/style.css` | Estilos utilizados por la aplicación. |
| `CSS/style.scss` | Fuente SCSS de los estilos. |

## Demo

Accede a la demostración desde el botón situado en la parte superior del README.

**URL temporal:** [https://example.com](https://example.com)

Reemplaza `https://example.com` en el enlace del botón por la URL real cuando publiques la aplicación.

## Instalación y ejecución local

### Requisitos previos

- Git para clonar el repositorio.
- Python 3 o un servidor HTTP estático equivalente.
- Un navegador moderno.
- Un proyecto de Firebase con Realtime Database habilitada.

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd web-gestion-productos
```

Sustituye `<URL_DEL_REPOSITORIO>` por la dirección real de tu repositorio de GitHub.

### 2. Configurar Firebase

Abre `JS/firebase-data.js` y configura el objeto `firebaseConfig` con los datos de tu aplicación web de Firebase.

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
```

Utiliza los valores de tu propio proyecto desde la [consola de Firebase](https://console.firebase.google.com/).

Asegúrate también de configurar las reglas de seguridad de Realtime Database para permitir las operaciones necesarias.

### 3. Iniciar un servidor local

Desde la raíz del repositorio, ejecuta:

```bash
python3 -m http.server 8000
```

Abre la aplicación en:

[http://localhost:8000](http://localhost:8000)

Se recomienda utilizar un servidor HTTP para evitar posibles restricciones del navegador al cargar módulos JavaScript desde archivos locales.

## Consideraciones

- Los productos se mantienen en memoria durante la sesión y no se cargan automáticamente desde Firebase.
- La clave de cada registro se construye a partir del nombre del producto; por ello, dos productos con el mismo nombre pueden sobrescribirse.
- El IVA está establecido en el código al 16 %.
- Los atributos de consistencia, tipo de venta y código de barras no se guardan actualmente en Firebase.
- La funcionalidad de consulta de un recurso externo no está implementada por completo.
- La aplicación no incluye autenticación de usuarios ni un sistema de permisos propio. El acceso a los datos depende de las reglas de Firebase.

Este proyecto es una práctica de desarrollo web e integración con Firebase, no un sistema de inventario listo para producción.

## Autor

**Miguel Núñez**
