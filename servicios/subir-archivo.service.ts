import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo(archivo: File, tipo: string, id: string): Promise<any> {

    return new Promise((resolve, reject) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append('imagen', archivo, archivo.name);

      xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {

          if (xhr.status === 200) {
            console.log('Imagen subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Fallo la subida');
            reject(xhr.response);
          }

        }
      };

      // ESte método sube a cloudinary
      // const url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;
      // Este método sube a Firebase Storage
      const url = URL_SERVICIOS + '/uploadfirebase/' + tipo + '/' + id;

      // console.log(url);

      xhr.open('PUT', url, true);
      // xhr.setRequestHeader('token', this.usuarioService.token );
      xhr.send(formData);

    });

  }
  

}
