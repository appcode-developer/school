import { Component } from '@angular/core';


@Component({
  selector: 'page-walk',
  templateUrl: 'walk.html'
})

export class WalkPage {


slides = [

	{

		titulo: "Buscar Colegio",
		texto: "Busca el establecimiento en el cual estas cursando tus estudios",
		imagen: "assets/image/phone.png",
		color: "#4BC14B",

	},

	{

		titulo: "Selecciona el Grado",
		texto: "Selecciona el grado o año en el cuál estas cursando",
		imagen: "assets/image/list.png",
		color: "#198de0",

	},

	{

		titulo: "Selecciona tus Libros",
		texto: "Selecciona los libros que te han pedido en tu escuela",
		imagen: "assets/image/books.png",
		color: "#40ba91",

	},

	{

		titulo: "Selecciona la forma de Pago",
		texto: "Una vez que ya has seleccionados los libros de la lista, procede a seleccionar la forma de pago que más te acomode",
		imagen: "assets/image/pago.png",
		color: "#f1c433",



	}



	];

	
  

  }