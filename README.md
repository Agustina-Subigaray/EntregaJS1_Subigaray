Lume – Simulador de Velas con Django
Descripción del Proyecto

Lume es un proyecto web desarrollado con HTML, CSS, JavaScript y Django, que permite a los usuarios explorar y seleccionar velas según sus preferencias. El proyecto nació como un sitio estático y luego fue adaptado a Django para manejar rutas, plantillas y funcionalidades dinámicas como un carrito de compras que utiliza LocalStorage.

El objetivo principal es demostrar la diferencia entre un sitio estático y un proyecto gestionado con Django, mostrando buenas prácticas en la organización de archivos, separación de responsabilidades y uso de plantillas.

Funcionalidades

Navegación completa

Navbar dinámico en todas las páginas usando {% url %} de Django.

Footer replicando la misma navegación.

Simulador de velas

Muestra un catálogo de velas cargado desde static/data/velas.json.

Cada vela tiene: nombre, descripción y precio.

Botones “Elegir” para agregar velas al carrito.

Total calculado dinámicamente.

Los datos seleccionados se guardan en LocalStorage, permitiendo persistencia aunque se recargue la página.

Carrito de compras

Visualiza las velas seleccionadas.

Muestra el total de la compra.

Diseño uniforme con fondo blanco esfumado para mantener la estética de la página.

Rutas gestionadas por Django

Cada página (index, simulador, blog, contacto, inspiracion, sobre-nosotros) tiene su vista y URL propia.

Permite separar la lógica de presentación y la funcionalidad dinámica.

Arquitectura organizada

templates/ → Contiene las plantillas HTML.

static/ → Contiene CSS, JS, imágenes y datos JSON.

core/ → Contiene vistas (views.py) y rutas (urls.py).

Estructura de Carpetas
EntregaJS1_Subigaray/
│
├── core/
│   ├── urls.py       # Definición de rutas de Django
│   └── views.py      # Vistas para cada página
│
├── templates/
│   ├── index.html
│   ├── simulador.html
│   ├── carrito.html
│   └── pages/
│       ├── blog.html
│       ├── contacto.html
│       ├── inspiracion.html
│       └── sobre-nosotros.html
│
├── static/
│   ├── assets/       # Imágenes y videos
│   ├── css/          # CSS
│   ├── scss/         # Archivos SCSS
│   ├── data/         # JSON de velas
│   └── script.js     # Lógica JS del simulador y carrito
│
└── manage.py

Requisitos

Python 3.13+

Django 5.2+

Navegador moderno (Chrome, Firefox, Edge)

Instalación y Ejecución

Clonar el repositorio

git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO


Crear un entorno virtual (opcional pero recomendado)

python -m venv env
source env/bin/activate      # Linux/Mac
env\Scripts\activate         # Windows


Instalar Django

pip install django


Aplicar migraciones

python manage.py migrate


Ejecutar servidor

python manage.py runserver


Abrir en navegador

Visitar: http://127.0.0.1:8000/

Cómo Funciona
Simulador de Velas

El catálogo se carga dinámicamente desde velas.json.

Cada vela se muestra con un botón “Elegir”.

Al hacer clic en “Elegir”, la vela se agrega a LocalStorage y se actualiza el total.

La persistencia permite que la selección permanezca aunque el usuario cambie de página.

Carrito

Recupera los datos del LocalStorage.

Muestra lista de velas seleccionadas y total.

Fondo esfumado consistente con el estilo general del sitio.

Diferencias con versión estática

Antes era un sitio HTML/JS puro.

Con Django:

Manejo centralizado de rutas (urls.py).

Plantillas reutilizables (templates/).

Separación de código estático y dinámico.

Facilidad para agregar nuevas funcionalidades dinámicas, como el carrito.

Detalles Técnicos

Plantillas: {% load static %} para archivos estáticos, {% url 'nombre' %} para enlaces internos.

Rutas: Definidas en core/urls.py y conectadas con core/views.py.

JSON: static/data/velas.json contiene la información de cada vela.

JavaScript:

cargarVelas() → Carga las velas desde JSON.

activarBotones() → Permite elegir velas y actualizar el carrito.

mostrarSeleccion() → Actualiza la sección del carrito dinámicamente.

Autor : Agustina Subigaray


Diferencia entre la versión estática y Django.

Link al video (si lo subís a YouTube, Google Drive o similar).
