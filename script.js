// ====================== Encuesta ======================
const formEncuesta = document.getElementById('formEncuesta');
const resumenEncuesta = document.getElementById('resumenEncuesta');

formEncuesta.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombreUsuario').value;
    const edad = document.getElementById('edadUsuario').value;
    const tipoVela = document.getElementById('tipoVela').value;

    // Definir recomendaciones según el tipo de vela
    let recomendacion = '';
    switch(tipoVela) {
        case "Velas para exterior":
            recomendacion = "Perfectas para decorar tu patio o terraza y disfrutar del aire libre.";
            break;
        case "Velas perfumadas":
            recomendacion = "Ideales para aromatizar tu hogar y crear un ambiente acogedor.";
            break;
        case "Velas con formas":
            recomendacion = "Decorativas y originales para cualquier ocasión o regalo.";
            break;
        case "Velas rústicas":
            recomendacion = "Darán un estilo natural y cálido a tu hogar.";
            break;
        case "Velas de té":
            recomendacion = "Pequeñas y prácticas para ambientar cualquier lugar de manera elegante.";
            break;
        case "Velas flotantes":
            recomendacion = "Perfectas para decorar con agua y generar un efecto relajante.";
            break;
        default:
            recomendacion = "Gracias por completar la encuesta.";
    }

    const encuesta = { nombre, edad, tipoVela, recomendacion };

    // Guardar en localStorage
    let encuestas = JSON.parse(localStorage.getItem('encuestas')) || [];
    encuestas.push(encuesta);
    localStorage.setItem('encuestas', JSON.stringify(encuestas));

    // Mostrar resumen y recomendación
    resumenEncuesta.innerHTML = `
        <div class="alert alert-success">
            <strong>¡Gracias por completar la encuesta, ${nombre}!</strong><br>
            Edad: ${edad}<br>
            Tipo de velas favoritas: ${tipoVela}<br>
            <em>Recomendación:</em> ${recomendacion}
        </div>
    `;

    formEncuesta.reset();
});
