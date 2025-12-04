from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("simulador/", views.simulador, name="simulador"),
    path("agregar/<int:id>/", views.agregar_carrito, name="agregar_carrito"),
    path("carrito/", views.mostrar_carrito, name="carrito"),
    path("blog/", views.blog, name="blog"),
    path("contacto/", views.contacto, name="contacto"),
    path("inspiracion/", views.inspiracion, name="inspiracion"),
    path("sobre-nosotros/", views.sobre_nosotros, name="sobre-nosotros"),
]
# Incluye todas las rutas de la app core
