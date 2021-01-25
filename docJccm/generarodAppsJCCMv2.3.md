# Guía de uso del generador de aplicaciones Angular JCCM.

En esta sección comentaremos cómo utilizar el generador de aplicaciones. Dicho generador está basado en la herramienta [Schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2) de Angular, que permite crear un esqueleto de aplicaciones según las necesidades de la aplicación.

> Versión 0.0.4.

## Índice

[toc]

## Conceptualización

El backoffice de la JCCM, (idealmente) es una aplicación "padre" que da estructura y contexto a un conjunto de módulos funcionales (por ejemplo tablón de anuncios, siaci, etc) que son independientes los unos de los otros. Para que la aplicación backoffice no se convierta en un gran monolito, difícil de mantener según vayan creciendo las funcionalidades, se ha optado por un enfoque de modularización, en los que cada módulo funcional se puede desarrollar de forma desacoplada al backoffice, y se puedan incorporar al mismo como dependencias.
Por este motivo se ha creado el generador de aplicaciones de JCCM, para dotar de un punto de partida para desarrollar estos módulos con una configuración adecuada para que luego se puedan incorporar al backoffice casi sin modificación en éste.

Para ello el generador se crea como un workspace de angular que contiene dos proyectos:

* **Una aplicación "base" (llamada demo) que hará las veces de "backoffice mock"**: básicamente provee del contexto de autenticación y un marco visual parecido al que ofrecerá el backoffice.
* **Una librería que albergará el código del módulo funcional**: este será el objeto del desarrollo, ya que este módulo se exportará como paquete de npm y se importará en el backoffice cuando esté desarrollado.

*Notas importantes en el desarrollo de módulos para backoffice*:

* Es importante que toda la funcionalidad se implemente en la librería y no en la aplicación demo, ya que lo único que se va a exportar al paquete npm es la primera.
* Hay ciertas dependencias que ya existen en el módulo, porque las provee el backoffice (la aplicación demo en este caso), como la librería de componentes visuales @jccm/ui, o los componentes core @jccm/bo-core. Cualquier dependencia que sea exclusiva del módulo (por ejemplo una librería de gráficos que se use en un módulo concreto), deberá ir especificada adecuadamente en las dependencias del módulo (y no en las de la aplicación)

Cabe destacar, que si bien el generador tiene un fin muy específico que es el de crear aplicaciones y módulos destinados a ir al backoffice, puede servir como base para un proyecto angular "normal" perfectamente haciendo algunos ajustes, que son básicamente eliminar la librería y las dependencias que no se necesiten (por ejemplo @jccm/bo-core o keycloak en caso de no utilizar este método de autenticación)

## Requisitos previos

Es necesario tener instalado lo siguiente:

- NodeJS (versión LTS o superior) (https://nodejs.org/es/)
- Visual Studio Code (o un IDE similar) (https://code.visualstudio.com/)

# 1. Publicar el "Generador"

1. Se descarga todo el código fuente y entramos en la carpeta.

2. Tenemos en **Artifactory** los siguientes repositorios:

   - El local **suiteAd-npm** (https://artifactory.jccm.es/artifactory/suiteAd-npm/) 

   - El virtual **jccm-npm** (https://artifactory.jccm.es/artifactory/api/npm/jccm-npm/) que contiene:
     - **suiteAd-npm** 
     - [https://registry.npmjs.org](https://registry.npmjs.org/).

1. Se añade al package.json , la ruta del repositorio local que donde se debe publicar

   ```json
   "publishConfig": {
       "registry": "https://artifactory.jccm.es/artifactory/api/npm/suiteAd-npm/"
     },
   ```

2. Nos aseguramos que apuntamos al repositorio local al que apuntamos y que estamos logados.

   ```bash
   $npm config set registry https://artifactory.jccm.es/artifactory/api/npm/suiteAd-npm/
   $npm login
   
   ```

3. Se ejecutan estos comandos desde dentro de la carpeta

   ```
   npm install
   npm run build
   npm publish
   ```



# 2. Crear una aplicación utilizando el "Generador"

### Caso A. El generador está publicado en Artifactory (recomendado)

1. Asegurarnos que estamos apuntando al repositorio virtual (jccm-npm).

   `````bash
   npm config set registry https://artifactory.jccm.es/artifactory/api/npm/jccm-npm/
   npm login
   `````
   

   
2. Tener instaladas de forma global el paquete schematics-cli y @schematics/angular con las versiones alineadas a la versión actual del framework angular que usamos (v9-lts): 

   ```bash
   npm install --global @angular-devkit/schematics-cli@v9-lts
   npm install --global @schematics/angular@v9-lts
   ```

   

3. Tener instalado de forma global el generador

   ````bash
   #Si estamos apuntando al repo virtual, se instala directamente
   npm install --global @jccm/generador@latest
   
   #Si no apuntamos al repo virtual, hay que especificarlo al realizar el install.
   npm install --global @jccm/generador@latest --registry 
   https://artifactory.jccm.es/artifactory/api/npm/jccm-npm/
   ````

   


### Caso B. El generador NO está publicado en Artifactory

Para poder utilizar el generador de aplicaciones, primero deberemos descargar el código e instalar las herramientas necesarias.

1. Instalar de forma global el paquete schematics-cli y @schematics/angular con las versiones alineadas a la versión actual del framework angular que usamos (v9-lts): 

   ```bash
   npm install --global @angular-devkit/schematics-cli@v9-lts
   npm install --global @schematics/angular@v9-lts
   ```

2. Descargar del repositorio subversión el código del generador: https://gesproy.jccm.es/svn/m-add-a-suite_ad-a-bo-core/branches/feat/97117-add-generator/generador

3. Acceder a la carpeta e Instalar sus dependencias

   ````bash
   cd generador
   npm install 
   ````

Ahora se puede ejecutar la esquemática utilizando una de estas dos formas:

- 1ª Forma: 

  Colocarnos en la carpeta en la que deseemos crear un proyecto y ejecutar el siguiente comando: 

    ````bash
    schematics {path_relativo_al_generador}:app --debug=false
    ````

- 2ª Forma: 

  Utilizar un enlace global mediante el comando npm link y de esta forma acceder más fácilmente al generador:

	1. Ejecutar el comando `npm link` en la carpeta donde se encuentra el generador
	2. Arrancar el generador mediante el comando `schematics @jccm/generador:app`



### Crear la aplicación utilizando el generador

1. Colocarnos en la carpeta en la que deseemos crear un proyecto y ejecutaremos dentro de ellas el  comando: `jccm-generador <nombre_proyecto>`

por ejemplo:
````bash
jccm-generador appTablonAnuncios
````

2. A partir de este momento, aparecerán unas preguntas en la consola para adecuar la aplicación generada a las necesidades reales:

   \- **What name would you like to use for the project?**: Pregunta por el nombre que se le dará a la carpeta en la que se instalará el generador. 

   ```
   ATENCION: utilizar una palabra con todos los caracteres en minuscula. Si se utiliza una palabra como por ejemplo: appTest, la aplicación no se genera correctamente, porque genera dos carpetas: appTest y app-test
   ```

   \- **Do you want to skip dependencies installation on finish?**: Pregunta si se quiere omitir la instalación de dependencias al terminar la copia de la plantilla (por defecto no se omite)

   \- **Do you want to install mock server?**: Pregunta si se quiere instalar un servidor de mock, usando [dyson](https://github.com/webpro/dyson) (por defecto, se instala)

# 3. Usar la aplicación generada 

Con esta información, el generador creará la carpeta correspondiente con los archivos base del proyecto. Para arrancar la aplicación nos colocaremos en el directorio generado y tenemos varias opciones para arrancar la aplicación:

- `npm start`: Arranca la aplicación en un servidor local
- `npm run start:mock`: Arranca la aplicación en un servidor local y además, arranca un servidor mock para los servicios rest usando Dyson, en el puerto 8000
- `npm run build`: Hace un build de la aplicación para generar los estáticos y llevar a un servidor web convencional (apache, nginx, etc)
- `npm test`: Pasa los tests creados en la aplicación. El motor de tests que se utiliza es [Jest](https://jestjs.io/)
- `npm run lint`: Ejecuta la revisión de calidad de código usando [EsLint](https://eslint.org/)
- `npm run e2e`: Ejecuta los tests funcionales usando [Cypress](https://www.cypress.io/)
- `npm run coverage`: Comprueba la cobertura de tests unitarios (usa también Jest)
- `npm run mock`: Arranca el servidor de mock creado con Dyson en el puerto 8000
- `npm run packagr`: Realiza los cambios necesarios para que la aplicación se adecue al formato de paquete de Angular.

### Primeros pasos

Una vez creada la aplicación desde el generador, hay ciertos aspectos que hay que configurar para que la misma arranque correctamente:

* **Autenticación**: Para la autenticación en estas aplicaciones se utiliza RedHat Single Sign On, que es una solución basada en Keycloak. Cada aplicación / módulo funcional puede tener un realm o clientId contra los que autenticarse o bien puede compartir los de otra aplicación, esto supedita los usuarios que pueden autenticarse y tienen permiso sobre cada aplicación. Habrá que solicitar al responsable de proyecto de JCCM los datos adecuados para la configuración de rh-sso y cambiarlos en el archivo `environment.ts` de la aplicación demo:

```
export const environment = {
  ...
  srvCervero: 'url de cervero SIN el /auth, p.ej. https://sso-cerbero-uat.cm-pre.jccm.es',
  realmCervero: 'realm',
  clientIdCervero: 'clientId',
  credentialsCervero: { secret: 'secret' }
};
```

* **PROXY / CORS**: en caso de que tengamos problemas de CORS atacando a los servicios REST que corresponda, tenemos dos opciones:
	* Pedir al equipo de API que habiliten la cabecera `Access-Control-Allow-Origin` para nuestro dominio de desarrollo (http://localhost:4200)
	* Utilizar un proxy inverso. En el servidor de desarrollo que se arranca con el generador este mecanismo ya está previsto en el archivo `proxy.conf.js` con algunos registros ya configurados que pueden servir de ejemplo. Para usarlo simplemente habrá que dirigir las peticiones a `http://localhost:4200/endpoint` en vez de a `http://remoto/endpoint`

	
# 4. Exportar la nueva aplicación como módulo

Una vez desarrollada la aplicación inicialmente creada utilizando el "generador" y en el caso de que se quiera exportar como módulo y publicar en un registro privado hay que seguir las siguientes instrucciones:


1. Configurar la URL del registro en el `package.json` dentro de la propiedad publishConfig --> registry.

   ````type
   "publishConfig": {
       "directory": "projects/<nombre>/dist",
       "registry": "https://artifactory.jccm.es/artifactory/api/npm/areaEAdmon-npm/"
     }
   ````

   

2. Ejecutar el comando `npm run build` para hacer el build de la aplicación

3. Ejecutar el comando `npm run packagr` para realizar los cambios necesarios para que la aplicación se adecue al formato de paquete de Angular.

4. Ejecutar el comando `npm publish` para publicar lo que se ha obtenido en el directorio ´dist´ en el registro indicado. Es recomendable añadir el tag `latest` para indicar que la versión que subimos es la última disponible, y la actualización de dependencias sea más eficiente (`npm publish --tag latest`)

Para importar el módulo correspondiente en el backoffice de forma dinámica al cargar una ruta específica, debemos hacer lo siguiente (suponiendo que el nómbre del paquete que ha exportado el módulo es @jccm/functional-module):

1. Instalar el paquete que se ha exportado en las instrucciones anteriores (`npm install @jccm/functional-module@latest --save`)

2. En el módulo que contenga las rutas de la aplicación :

```javascript
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    export function functionalModule { return import("@jccm/functional-module").then(m => m.NombreModulo) };

    const routes: Routes = [{ 
        path: 'path-to-module',
        loadChildren: functionalModule
    }];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })

    export class AppRoutingModule { }
```