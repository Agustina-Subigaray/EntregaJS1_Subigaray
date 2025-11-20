// ====================== Encuesta ======================
const formEncuesta = document.getElementById('formEncuesta');
const resumenEncuesta = document.getElementById('resumenEncuesta');

if (formEncuesta && resumenEncuesta) {
    formEncuesta.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombreUsuario').value;
        const edad = document.getElementById('edadUsuario').value;
        const tipoVela = document.getElementById('tipoVela').value;

        let recomendacion = "";
        switch (tipoVela) {
            case "Velas para exterior":
                recomendacion = "Perfectas para decorar espacios al aire libre.";
                break;
            case "Velas perfumadas":
                recomendacion = "Ideales para aromatizar tu hogar.";
                break;
            case "Velas con formas":
                recomendacion = "Originales y decorativas.";
                break;
            case "Velas rústicas":
                recomendacion = "Aportan calidez y estilo natural.";
                break;
            case "Velas de té":
                recomendacion = "Pequeñas y versátiles.";
                break;
            case "Velas flotantes":
                recomendacion = "Perfectas para decoraciones con agua.";
                break;
        }

        const encuesta = { nombre, edad, tipoVela, recomendacion };
        let encuestas = JSON.parse(localStorage.getItem("encuestas")) || [];
        encuestas.push(encuesta);
        localStorage.setItem("encuestas", JSON.stringify(encuestas));

        resumenEncuesta.innerHTML = `
            <div class="alert alert-success">
                <strong>¡Gracias, ${nombre}!</strong><br>
                Tipo elegido: ${tipoVela}<br>
                Recomendación: ${recomendacion}
            </div>
        `;

        formEncuesta.reset();
    });
}

// ====================== Catálogo de Velas ======================
async function cargarVelas() {
    const catalogo = document.getElementById("catalogo");
    if (!catalogo) return;

    try {
        const resp = await fetch("data/velas.json");
        const velas = await resp.json();
        mostrarVelas(velas);
    } catch (error) {
        console.error("Error cargando velas:", error);
    }
}

function mostrarVelas(array) {
    const catalogo = document.getElementById("catalogo");

    array.forEach(vela => {
        const card = document.createElement("div");
        card.classList.add("simulador-card");

        card.innerHTML = `
            <h3>${vela.nombre}</h3>
            <p>${vela.descripcion}</p>
            <p class="precio">$${vela.precio}</p>
            <button class="btn-agregar" data-id="${vela.id}">Elegir</button>
        `;

        catalogo.appendChild(card);
    });

    activarBotones(array);
}

let seleccion = [];

function activarBotones(velas) {
    document.querySelectorAll(".btn-agregar").forEach(btn => {
        btn.addEventListener("click", () => {
            const vela = velas.find(v => v.id == btn.dataset.id);
            seleccion.push(vela);
            mostrarSeleccion();
        });
    });
}

function mostrarSeleccion() {
    const div = document.getElementById("seleccion");
    if (!div) return;

    div.innerHTML = `
        <h2>Tu selección</h2>
        ${seleccion.map(v => `<p>${v.nombre} - $${v.precio}</p>`).join("")}
        <hr>
        <p class="total">Total: $${seleccion.reduce((acc, v) => acc + v.precio, 0)}</p>
    `;
}

cargarVelas();

