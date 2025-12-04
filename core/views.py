from django.shortcuts import render, redirect
import json
import os
from django.conf import settings

# Página principal
def index(request):
    return render(request, "index.html")
# Simulador de velas
def simulador(request):
    # Cargar velas desde JSON
    json_path = os.path.join(settings.BASE_DIR, 'static/data/velas.json')
    with open(json_path, encoding='utf-8') as f:
        velas = json.load(f)
    return render(request, "simulador.html", {"velas": velas})
# Carrito de compras
def agregar_carrito(request, id):
    carrito = request.session.get("carrito", [])
    carrito.append(id)
    request.session["carrito"] = carrito
    return redirect("simulador")

def mostrar_carrito(request):
    json_path = os.path.join(settings.BASE_DIR, 'static/data/velas.json')
    with open(json_path, encoding='utf-8') as f:
        velas_data = json.load(f)
    
    carrito_ids = request.session.get("carrito", [])
    velas_carrito = [v for v in velas_data if v["id"] in carrito_ids]
    total = sum(v["precio"] for v in velas_carrito)
    
    return render(request, "pages/carrito.html", {"velas": velas_carrito, "total": total})
# Otras páginas
def blog(request):
    return render(request, "pages/blog.html")

def contacto(request):
    return render(request, "pages/contacto.html")

def inspiracion(request):
    return render(request, "pages/inspiracion.html")

def sobre_nosotros(request):
    return render(request, "pages/sobre-nosotros.html")


