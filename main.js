function carritoDeCompras() {
    let totalGastado = 0;
    let opcion;
    let cantidad = 0;
    const BolsaDeCemento = 10000;
    const BolsonDeArena = 38000;
    const Ceramicos = 6000;
    const Hierros = 8000;
    const Ladrillos = 113000;
  
    
    alert("Hola, estas en nuestra tienda online");
  
    do {
      opcion = prompt("Ingrese el número de la opción que desea comprar: \n1. Bolsa de cemento - $10000 \n2. Bolson De Arena - $38000 \n3. Ceramicos - $6000 \n4. Hierros - $8000 \n5. Ladrillos - $113000 \n0. Finalizar");
  
      if (isNaN(opcion)) {
        alert("Seleccione una opcion valida o pulse 0 para cancelar");
        continue;
      } else {
        opcion = parseInt(opcion);
        if ((opcion < 0) || (opcion > 5)) {
          alert("Seleccione una opcion valida o pulse 0 para cancelar");
          continue;
        }
      }
  
      if (opcion !== 0) {
        do {
          cantidad = parseInt(prompt("Ingresar cantidad de materiales que necesita:"));
          if (isNaN(cantidad) || cantidad < 0) {
            alert("ingrese un número mayor o igual a cero.");
          }
        } while (isNaN(cantidad) || cantidad < 0)
      }
  
      switch (opcion) {
        case 1:
          totalGastado += BolsaDeCemento * cantidad;
          alert("Compró " + cantidad + " Bolsa(s) De Cemento por $" + BolsaDeCemento * cantidad);
          break;
        case 2:
          totalGastado += BolsonDeArena * cantidad;
          alert("Compró " + cantidad + " Bolson(es) de arena por $" + BolsonDeArena * cantidad);
          break;
        case 3:
          totalGastado += Ceramicos * cantidad;
          alert("Compró " + cantidad + " Ceramicos por $" + Ceramicos * cantidad);
          break;
        case 4:
          totalGastado += Hierros * cantidad;
          alert("Compró " + cantidad + " Hierros por $" + Hierros * cantidad);
          break
        case 5:
          totalGastado += Ladrillos * cantidad;
          alert("Compró " + cantidad + " Ladrillos por $" + Ladrillos * cantidad);
          break
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
  
  carritoDeCompras();