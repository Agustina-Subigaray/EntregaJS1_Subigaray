# 🌟 Lume – Proyecto Django con Simulador de Velas

## 📌 Descripción
Este proyecto convierte un sitio web **estático** de Lume en un proyecto **Django dinámico**.  
Permite mostrar cómo Django mejora la organización y reutilización de código, integrando:

- Rutas y vistas para cada página (`index`, `simulador`, `blog`, etc.).
- Plantillas con `{% load static %}` para CSS, JS y assets.
- Simulador interactivo de velas con **carrito y total acumulado**.
- Persistencia de la selección del usuario con **LocalStorage**.
- Navbar y Footer consistentes en todas las páginas.

---

## 📂 Estructura del Proyecto
EntregaJS1_Subigaray/
├── core/ # App principal
│ ├── views.py # Funciones que renderizan las páginas
│ └── urls.py # Rutas para cada vista
├── templates/
│ ├── index.html
│ ├── simulador.html
│ └── pages/ # Otras páginas
│ ├── blog.html
│ ├── contacto.html
│ ├── inspiracion.html
│ └── sobre-nosotros.html
├── static/
│ ├── assets/ # Imágenes y videos
│ ├── css/ # Estilos compilados
│ ├── scss/ # Archivos SCSS
│ ├── data/ # JSON de velas
│ └── script.js # JS para simulador y carrito
├── manage.py


---

## ⚡ Funcionalidades Principales

### 1️⃣ Simulador de Velas
- Carga de velas desde `velas.json`.
- Tarjetas con **nombre, descripción y precio**.
- Botón “Elegir” para agregar al **carrito**.
- Carrito dinámico que muestra el **total acumulado**.
- Persistencia usando **LocalStorage**.

### 2️⃣ Navegación
- Navbar y Footer con **URLs dinámicas** mediante `{% url %}`.
- Mantiene consistencia en todas las páginas.

### 3️⃣ Diferencia con versión estática
- Las páginas estáticas solo muestran contenido HTML y JS.
- Django agrega:
  - Rutas dinámicas (`urls.py`)
  - Plantillas reutilizables
  - Separación de **lógica** (views.py) y **presentación** (HTML)
  - Integración con JSON y JS de forma estructurada

---

## 🛠 Tecnologías Utilizadas

- **Python 3.13**
- **Django 5.2.6**
- **HTML5, CSS3, SCSS**
- **JavaScript (vanilla)**
- **Bootstrap 5**
- **LocalStorage** para persistencia del carrito
- **JSON** para catálogo de velas

---

## 🚀 Instalación y Ejecución


Crear entorno virtual
python -m venv env
env\Scripts\activate

Instalar django
pip install django

Ejecutar migraciones
python manage.py migrate

Levantar el servidor
python manage.py runserver






