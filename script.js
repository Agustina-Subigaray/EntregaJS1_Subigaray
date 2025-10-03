function encuestaUsuario() {
  //Creamos un objeto para guardar las respuestas
  const encuesta = {
    nombre: "",
    edad: 0,
    tipoVelas: ""
  };

  //Pedir el nombre
  while(encuesta.nombre === "" || encuesta.nombre === null) {
    encuesta.nombre = prompt("¿Cómo es tu nombre?");
  }

  //Pedir la edad
  while(encuesta.edad <= 0 || isNaN(encuesta.edad)) {
    encuesta.edad = parseInt(prompt("¿Cuál es tu edad?"));
  }

  //Preguntar tipo de vela con números
  let opcion = 0;
  while(opcion < 1 || opcion > 6 || isNaN(opcion)) {
    opcion = parseInt(prompt(`
Elegí el número de la vela que más te gusta:
1. Velas para exterior
2. Velas perfumadas
3. Velas con formas
4. Velas rústicas
5. Velas de té
6. Velas flotantes
`));
  }

  //Asignar significado con switch
  let descripcionVelas = "";
  switch(opcion) {
    case 1:
      descripcionVelas = "Velas para exterior: perfectas para decorar tu patio o terraza.";
      break;
    case 2:
      descripcionVelas = "Velas perfumadas: aromatizan tu hogar y crean un ambiente acogedor.";
      break;
    case 3:
      descripcionVelas = "Velas con formas: decorativas y originales para cualquier ocasión.";
      break;
    case 4:
      descripcionVelas = "Velas rústicas: estilo natural y cálido para tu espacio.";
      break;
    case 5:
      descripcionVelas = "Velas de té: pequeñas y prácticas para ambientar cualquier lugar.";
      break;
    case 6:
      descripcionVelas = "Velas flotantes: ideales para decorar con agua y dar un efecto relajante.";
      break;
  }

  // Guardamos la descripción en el objeto
  encuesta.tipoVelas = descripcionVelas;

  //Mostrar resumen final al usuario
  alert(`
¡Gracias por completar la encuesta!
Nombre: ${encuesta.nombre}
Edad: ${encuesta.edad}
Tipo de velas favoritas: ${encuesta.tipoVelas}

Sigue recorriendo nuestra web, y si querés, accede a nuestra sección Inspiración.
  `);

  //Preguntar si quiere completar otra encuesta
  let repetir = confirm("¿Querés completar otra encuesta?");
  if(repetir) {
    encuestaUsuario(); // se llama a sí misma
  }

  //Mostrar en consola para depuración
  console.log(encuesta);
}

//Llamar la función para que se ejecute al cargar la página
encuestaUsuario();

