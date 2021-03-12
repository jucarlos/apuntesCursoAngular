import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  
  miFormulario = this.fb.group({
    nombre: ['', [
      Validators.required,
      Validators.minLength(3)
    ],],
    apellido: ['', 
          Validators.required,
    ],
    favoritos: this.fb.array([
      ['Hola', Validators.required],
      ['Adios', Validators.required],
    ], Validators.required)

  });

  nuevoFavorito = this.fb.control('', Validators.required );

  get favoritosArr() {

    return this.miFormulario.get('favoritos') as FormArray;
    
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  campoInValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }


  guardar() {

    if (this.miFormulario.invalid) {

      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario);
  }


  agregarFavorito() {
    if ( this.nuevoFavorito.invalid ){
      return;
    }

    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required ) );
    this.nuevoFavorito.reset();
  }

  borrar( i: number ) {
    this.favoritosArr.removeAt(i);
  }

}
