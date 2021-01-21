import { Component } from '@angular/core';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'interceptores';

  paises = [];

  constructor(private paisesService: PaisesService ) {

    this.paisesService.getPaises().subscribe( (resp: any ) => {
      this.paises = resp;
      console.log( this.paises );
    });

  }
}
