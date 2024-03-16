function carritoDeCompras() {
  let totalGastado = 0;
  let opcion;
  let cantidad = 0;
  const materiales = [
      { nombre: "BolsaDeCemento", precio: 10000 },
      { nombre: "BolsonDeArena", precio: 38000 },
      { nombre: "Ceramicos", precio: 6000 },
      { nombre: "Hierros", precio: 8000 },
      { nombre: "Ladrillos", precio: 113000 }
  ];

  alert("Hola, estás en nuestra tienda online");

  do {
      opcion = prompt("Ingrese el número de la opción que desea comprar: \n1. Bolsa de cemento - $10000 \n2. Bolson De Arena - $38000 \n3. Ceramicos - $6000 \n4. Hierros - $8000 \n5. Ladrillos - $113000 \n0. Finalizar");

      if (isNaN(opcion)) {
          alert("Seleccione una opción válida o pulse 0 para cancelar");
          continue;
      } else {
          opcion = parseInt(opcion);
          if ((opcion < 0) || (opcion > 5)) {
              alert("Seleccione una opción válida o pulse 0 para cancelar");
              continue;
          }
      }

      if (opcion !== 0) {
          do {
              cantidad = parseInt(prompt("Ingresar cantidad de materiales que necesita:"));
              if (isNaN(cantidad) || cantidad < 0) {
                  alert("Ingrese un número mayor o igual a cero.");
              }
          } while (isNaN(cantidad) || cantidad < 0)
      }

      switch (opcion) {
          case 1:
              totalGastado += materiales[0].precio * cantidad;
              alert("Compró " + cantidad + " Bolsa(s) De Cemento por $" + materiales[0].precio * cantidad);
              break;
          case 2:
              totalGastado += materiales[1].precio * cantidad;
              alert("Compró " + cantidad + " Bolson(es) de arena por $" + materiales[1].precio * cantidad);
              break;
          case 3:
              totalGastado += materiales[2].precio * cantidad;
              alert("Compró " + cantidad + " Ceramicos por $" + materiales[2].precio * cantidad);
              break;
          case 4:
              totalGastado += materiales[3].precio * cantidad;
              alert("Compró " + cantidad + " Hierros por $" + materiales[3].precio * cantidad);
              break;
          case 5:
              totalGastado += materiales[4].precio * cantidad;
              alert("Compró " + cantidad + " Ladrillos por $" + materiales[4].precio * cantidad);
              break;
          case 0:
              alert("Compra finalizada");
              break;
          default:
              alert("Opción inválida.");
      }
  } while (opcion !== 0);

  alert("Ha gastado un total de $" + totalGastado + ".");
  alert("Vuelva pronto.");
}

function buscarMaterialPorNombre(nombre) {
  const materialEncontrado = materiales.find(material => material.nombre === nombre);
  if (materialEncontrado) {
      return materialEncontrado;
  } else {
      return "Material no encontrado";
  }
}

function filtrarMaterialesPorPrecio(precioMaximo) {
  const materialesFiltrados = materiales.filter(material => material.precio <= precioMaximo);
  return materialesFiltrados;
}

carritoDeCompras();

// Ejemplo de uso de los métodos de búsqueda y filtrado
console.log(buscarMaterialPorNombre("Ceramicos"));
console.log(filtrarMaterialesPorPrecio(10000));
