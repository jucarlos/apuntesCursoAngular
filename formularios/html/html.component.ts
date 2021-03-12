import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  persona = {
    nombre: '',
    email: '',
    recuerdame: false,
    provincia: 0,
    localidad: 0,
    sexo: '',
  };


  sexos = ['Hombre', 'Mujer'];

  provincias = [
    { codigo: 2 , nombre: 'Albacete'},
    { codigo: 13, nombre: 'Ciudad Real'},
    { codigo: 45, nombre: 'Toledo' },
  ];

  localidades = [
    { codigo: 20, provincia: 2, nombre: 'Albacete'},
    { codigo: 21, provincia: 2, nombre: 'Los Llanos'},
    { codigo: 22, provincia: 2, nombre: 'Almansa'},
    { codigo: 23, provincia: 2, nombre: 'La Solana'},
    { codigo: 131, provincia: 13, nombre: 'Ciudad Real'},
    { codigo: 132, provincia: 13, nombre: 'Almadén'},
    { codigo: 133, provincia: 13, nombre: 'Almagro'},
    { codigo: 134, provincia: 13, nombre: 'Puerto Lápice'},
    { codigo: 135, provincia: 13, nombre: 'Puertollano'},
    { codigo: 450, provincia: 45, nombre: 'Toledo'},
    { codigo: 450, provincia: 45, nombre: 'Torrijos'},
    { codigo: 450, provincia: 45, nombre: 'Talevera de la Reina'},
    { codigo: 450, provincia: 45, nombre: 'Illescas'},
  ];

  localidadesFiltro ;

  constructor() { }

  ngOnInit() {
  }

  validar(f: NgForm) {
    console.log('Formulario: ', f)  ;
  }


  cambiaProvincia( numeroProvincia: string ) {

    const codPro = +numeroProvincia;

    this.localidadesFiltro =
    this.localidades.filter( ( l ) => l.provincia === codPro);

  }



}
