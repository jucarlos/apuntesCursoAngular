# Guía de arquitectura y buenas prácticas front-end

Abril 2020



## Índice

1.  [Introducción](#1)

2.  [Alcance](#2)

3.  [Tecnologías seleccionadas](#3)

    1.  [Librería de interfaz gráfica](#3.1)

    2.  [Compilado y calidad de código](#3.2)

    3.  [Framework de componentes de interfaz gráfica](#3.3)

    4.  [Gestión de dependencias](#3.4)

    5.  [Control de versiones](#3.5)

    6.  [Herramientas de Testing](#3.6)

    7.  [Comunicación con Backend](#3.7)

    8.  [Entorno de ejecución](#3.8)

    9.  [Motor de ejecución](#3.9)

    10. [IDE de Desarrollo](#3.10)

4.  [Guía de buenas prácticas en desarrollo](#4)

    1.  [Buenas prácticas de desarrollo con Angular en la arquitectura propuesta](#4.1)

        1.  [Estructura de archivos ](#4.1.1)

        2.  [Responsabilidad única](#4.1.2)

        3.  [Nomenclatura](#4.1.3)

        4.  [Estructura de la aplicación y NgModules](#4.1.4)

        5.  [Componentes](#4.1.5)

        6.  [Directivas](#4.1.6)

        7.  [Servicios](#4.1.7)

        8.  [Data services](#4.1.8)

        9.  [Lifecycle hooks](#4.1.9)

        10. [Evitar código duplicado](#4.1.10)

        11. [Tipado de variables](#4.1.11)

        12. [Importaciones](#4.1.12)

        13. [Comentarios del código](#4.1.13)

        14. [Gestión de dependencias del proyecto](#4.1.14) 

        15. [Uso de servidor mock para desarrollo](#4.1.15)

    2.  [Angular CLI](#4.2) 

        1.  [Requisitos de Angular CLI](#4.2.1)

        2.  [Crear y ejecutar una aplicación Angular](#4.2.2)

        3.  [Empaquetado y transformación de código](#4.2.3)

        4.  [Carpetas y Ficheros principales](#4.2.4)

        5.  [Configuración](#4.2.5)

        6.  [Environments](#4.2.6)

5.  [Buenas prácticas de testing en Angular](#5)

    1.  [Desarrollar el test antes del propio componente](#5.1)

    2.  [Cobertura mínima](#5.2)

    3.  [Un test debe probar un componente funcional](#5.3)

    4.  [Utilidades de testing](#5.4)

    5.  [Test unitarios en el componente](#5.5) 

    6.  [Tests legibles y mantenible](#5.6)

6.  [Guía de normalización](#6)

    1.  [Scaffolding - Indicaciones](#6.1)

    2.  [Guía de estilos](#6.2)

        1.  [Longitud máxima de una línea](#6.2.1)

        2.  [Espaciado e indentación](#6.2.2)

        3.  [Comparación de variables](#6.2.3)

        4.  [Evaluación condicional](#6.2.4)

7.  [Versiones de las librerías utilizadas](#7)

8. [Enlaces](#8)

## 1. Introducción <a name="1"></a>

El presente documento es una guía de arquitectura y buenas prácticas para el desarrollo de aplicaciones frontend. Las aplicaciones frontend de la Junta de Castilla la Mancha (JCCM), deben partir de una arquitectura constituida a partir de la selección de aquellas tecnologías y buenas prácticas que garanticen la calidad de dichas aplicaciones y el buen hacer en el desarrollo de las mismas.

Teniendo en cuenta el entorno de JCCM, es necesario establecer unas líneas de referencia a seguir por todos los proveedores en el desarrollo de aplicaciones. El objetivo es unificar las decisiones técnicas tomadas en el ámbito de desarrollo frontend, basándonos en las necesidades de la organización.

Las tecnologías seleccionadas permiten el desarrollo de aplicaciones frontales con las siguientes características:

-   Interfaces de usuario interactivas

-   Experiencia de usuario optimizada

-   Reutilización de componentes personalizados

-   Mayor facilidad de testeo unitario de los componentes

-   Calidad de código garantizada

## 2. Alcance  <a name="2"></a>

En este documento se especificarán y explicarán los siguientes puntos:

-   Tecnologías seleccionadas

-   Buenas prácticas de desarrollo

-   Buenas prácticas de testing

-   Guía de normalización

## 3.Tecnologías seleccionadas <a name="3"></a>

### 3.1  Librería de interfaz gráfica <a name="3.1"></a>

Angular es un framework JavaScript Open Source, desarrollado por Google para facilitar la creación y programación de aplicaciones web de una sola página, las webs SPA (Single Page Application).

Angular separa completamente el frontend y el backend en la aplicación, evita escribir código repetitivo y mantiene todo más ordenado gracias a su patrón MVC (Modelo-Vista-Controlador) asegurando los desarrollos con rapidez, a la vez que posibilita modificaciones y actualizaciones.

Solamente es una ruta la que se tiene que enviar el servidor, y Angular lo que hace 'por debajo' es cambiar la vista al navegar para que dé la apariencia de una web normal, pero de forma más dinámica.

Entre otras ventajas, este framework es modular y escalable adaptándose a las necesidades de la organización, al estar basado en el estándar de componentes web, y contar con un conjunto de interfaz de programación de aplicaciones (API) que permite crear nuevas etiquetas HTML personalizadas que pueden reutilizarse.

Como ya se ha indicado, las aplicaciones Angular almacenan por separado el código de la interfaz del usuario (front-end) y el de la lógica de negocio (back-end), lo cual redunda en una especialización de los diferentes equipos y el uso de stacks tecnológicos específicos que mejoran el rendimiento y la calidad de las aplicaciones, permitiendo además que los equipos trabajen, hasta cierto punto, de forma desacoplada.

Además, los principales editores y entornos de desarrollo integrado (IDEs) ofrecen ya extensiones para poder trabajar con este framework con mayor comodidad.

Por su programación reactiva, la vista se actualiza automáticamente tras realizar los cambios. Adicionalmente, se integra bien con herramientas de testing y con otros frameworks para la creación de aplicaciones móviles (como Ionic), lo que facilita la creación de aplicaciones web adaptadas a móviles. Este aspecto cada día adquiere mayor importancia tanto por el creciente uso de estos dispositivos para acceder a internet como por la penalización que Google realiza de aquellas páginas que no facilitan su visita en cualquier dispositivo.

### 3.2  Compilado y calidad de código <a name="3.2"></a>

En primer lugar, se ha seleccionado Typescript como lenguaje para el tipado de datos. Se trata de un lenguaje de programación, concretamente, un superset de JavaScript, desarrollado y mantenido por Microsoft, que nos permite, entre otras cosas, tipar el código que usamos para programar las aplicaciones.

#### ¿Por qué Typescript y no JavaScript?

Typescript utiliza la misma sintaxis y semántica que JavaScript, pero añadiendo el tipado de las variables, además compila este código a código JavaScript simple para que se ejecute en cualquier navegador.

Las ventajas que aporta Typescript son muy importantes tanto para la calidad del código desarrollado como para la eficiencia del desarrollo del mismo. A continuación, se especifican algunas de esas ventajas:

-   Prevención de errores en tiempo de desarrollo

-   Facilita las tareas de optimización y refactorización del código

-   En el caso de existir un error de tipado, se manifiestan como errores en tiempo de compilación, por lo que se asegura que el tipado siempre sea correcto, al ser necesario para la compilación del código

-   La mayoría de entornos de desarrollo utilizan la información que añade Typescript al código para aumentar la productividad durante el desarrollo, a través de autocompletado y análisis estático del código, que avisan de errores o incoherencias en el mismo.

-   Mejora la legibilidad y mantenibilidad del código, ya que informa de qué tipo de variables se esperan recibir o se esperan devolver.

-   Facilita la testeabilidad del código, al garantizar que las variables lleguen con un determinado tipo.

Se ha optado por la utilización de Typescript por las siguientes razones:

-   La integración con Angular es total, y la mayoría de referencia o ejemplos de código están hechos con Typescript.

-   Con Typescript podemos tipar todas las variables de la aplicación tanto propiedades como variables de estado, funciones, clases, etc...

-   Añade, además del tipado de datos, otras características muy útiles para los desarrolladores: sintaxis de clases, decoradores, etc...

-   Cuando el tipado es incorrecto, Typescript lanza un error de compilación, por ello el uso de Typescript ofrece una mayor garantía respecto a la verificación del tipado y, por tanto, respecto a la calidad del código.

Además, se pueden realizar configuraciones del compilador de Typescript en caso de necesitar características complejas a la hora de compilar.

La calidad del código no solo se ve afectada por el tipado de las variables, sino que también hay otros factores que también pueden influir. Para ello existen los denominados linter, herramientas que nos ayudan a garantizar que el código siga unas líneas comunes de buenas prácticas o guías de estilo.

#### ESLint 
Se ha seleccionado ESLint como linter de la arquitectura. ESLint es un analizador estático open source de JavaScript utilizado para encontrar discordancias del código con determinadas guías de estilos, que se establecen a nivel global para todos los proyectos, como se comentaba anteriormente.

En este caso, es un linter especializado en código JavaScript que sí que permite añadir reglas personalizadas según el criterio del desarrollador, además permite crear plugins con conjuntos de reglas personalizadas para soportar ciertas características del lenguaje.

El propósito principal que persigue la utilización de ESLint es la homogeneización de código desarrollado por diferentes personas o equipos, bajo un estándar que asegure un mismo estilo de desarrollo y que garantice la calidad las aplicaciones, desde un punto de vista de codificación.

En este caso, existen entornos de desarrollo que han implementado extensiones para detectar errores o incoherencias respecto a las reglas especificadas, en tiempo de desarrollo, lo que ayuda a prevenir y evitar errores de estilos.

También es posible integrar ESLint en entornos de integración continua a través de plugins de terceros, de tal forma que es posible condicionar el despliegue de una aplicación en un determinado entorno al cumplimiento exhaustivo de todas las reglas que se definen en la configuración de ESLint.

### 3.3  Framework de componentes de interfaz gráfica <a name="3.3"></a>

Los componentes son las unidades gráficas mínimas capaces de conformar interfaces gráficas complejas. A la hora de desarrollar las aplicaciones frontend, hay ciertos componentes que se repiten con frecuencia, por lo que se han ido desarrollando frameworks de componentes que ofrecen una gran cantidad de elementos visuales con funcionalidades ya desarrolladas, con un rendimientos optimizados, testeados y soportados por una amplia comunidad de desarrolladores.

La utilización de estos frameworks evita desarrollar componentes ad-hoc que ya están implementados y añaden funcionalidades que mejoran la experiencia del usuario en su utilización.

Para Angular existen varios frameworks de este tipo, pero se ha optado por Angular Material, que es una librería de estilos que está constituido por un conjunto de componentes que siguen las líneas de diseño de Google Material, adaptándose a la implementación con Angular, y además, cuentan con la capacidad de ser personalizados para poder adaptarse a diferentes marcas o estilos.

Los componentes de Angular Material optimizan su rendimiento y tienen una gran aceptación al ofrecer una buena experiencia al usuario, añadiendo ciertas características como las transiciones en cambios de estado en la visualización del componente, que hacen los cambios más naturales y agradables para el usuario final de la aplicación.

Otra de las razones por las que se ha optado por Angular Material es la gestión de estilos y temas que ofrece para utilizar a lo largo de toda la aplicación, más allá de los componentes propios del framework.

Angular Material te ofrece un tema por defecto con ciertas variables tales como colores principales, secundarios, tamaños, puntos de corte, fuentes o tamaño de fuente entre otras, pero se puede personalizar el tema definiendo el conjunto de colores propios de la marca. Con ello se consigue cambiar toda la paleta de colores de la aplicación, por lo que todos los componentes del framework estarán alineados con esa línea gráfica.

Esta característica nos permite que los estilos de aquellos componentes no pertenecientes al framework puedan ser dependientes de las variables definidas en el tema personalizado definido para toda la aplicación. Con esto, cualquier cambio adoptado por la marca en su línea gráfica implicará un cambio en la definición del tema, en vez de un cambio en todos los estilos.

Finalmente, cabe destacar las utilidades que ofrece Angular Material para adaptar sus componentes a un diseño responsive capaz de ajustarse al tamaño de diferentes dispositivos, así como el resto de componentes visuales de la aplicación.

Esta librería puede ser completada con otras librerías de terceros en el caso de que se quieran incluir algunos componentes concretos, pero en este caso se añadiría en cada proyecto según las necesidades del mismo.

### 3.4  Gestión de dependencias <a name="3.4"></a>

NPM es el gestor de dependencias para aplicaciones node.js, que es el motor de desarrollo de la arquitectura propuesta.

Las dependencias de los proyectos están definidas en un fichero JSON llamado package.json que contiene parte importante del proyecto como son los siguientes campos:

-   Nombre del proyecto, que junto con la versión forma una clave única para la publicación del proyecto en el registro de npm

-   Versión del proyecto, siguiendo las convenciones de Semantic Versioning (MAYOR.MINOR.PATCH)

-   Descripción del proyecto

-   Keywords: palabras clave con términos que puedan ser utilizados para la búsqueda del paquete en caso de ser publicado en el registro de npm

-   Licencia

-   Autor del proyecto

Además de estos datos, en el fichero package.json se especifican los scripts que definen los comandos que podemos ejecutar en nuestro proyecto asociándolos a un comando personalizado. Algunos scripts vienen predefinidos (start, test, install, etc.).

Para especificar las dependencias tenemos que diferenciar entre las dependencias de ejecución, especificadas en la propiedad *dependencies, las dependencias que se dan por supuestas (peerDependencies)* y las dependencias de desarrollo especificadas en la propiedad *devDependencies*

Las dependencias de ejecución son aquellas que son imprescindibles para que la aplicación se ejecute en producción, mientras que las dependencias de desarrollo son aquellas que no son necesarias en el entorno de producción pero que las requerimos en el desarrollo del proyecto, como compiladores, tipado, generadores de documentación técnica o las librerías de testing. Las peerDependencies, se utilizan sobre todo en librerías, e indican aquellas dependencias que se dan por supuestas para el funcionamiento de la aplicación. Por ejemplo, en una librería para angular, el propio angular debería ser una peerDependency y no una dependencia en sí, para no importar dos veces el mismo paquete (una en la aplicación padre y otra en la librería)

En este caso el uso de *npm* se debe a la gran cantidad de paquetes que existen en el registro de npm, su robustez, su gran aceptación por parte de la comunidad de desarrolladores, así como por la inexistencia de una alternativa comparable técnicamente para la gestión de paquetes en el desarrollo de las aplicaciones frontend que tengan como motor de desarrollo *node.js*.

### 3.5  Control de versiones <a name="3.5"></a>

Subversion es un sistema de control de versiones libre y de código fuente abierto. Es decir, Subversion maneja ficheros y directorios a través del tiempo. Hay un árbol de ficheros en un repositorio central. El repositorio es como un servidor de ficheros ordinario, excepto porque recuerda todos los cambios hechos a sus ficheros y directorios. Esto le permite recuperar versiones antiguas de sus datos, o examinar el historial de cambios de los mismos.

Subversion puede acceder al repositorio a través de redes, lo que le permite ser usado por personas que se encuentran en distintos ordenadores. A cierto nivel, la capacidad para que varias personas puedan modificar y administrar el mismo conjunto de datos desde sus respectivas ubicaciones fomenta la colaboración. Se puede progresar más rápidamente sin un único conducto por el cual deban pasar todas las modificaciones. Y puesto que el trabajo se encuentra bajo el control de versiones, no hay razón para temer por que la calidad del mismo vaya a verse afectada por la pérdida de ese conducto único, si se ha hecho un cambio incorrecto a los datos, simplemente se puede deshacer ese cambio.

Algunos sistemas de control de versiones son también sistemas de administración de configuración de software. Estos sistemas son diseñados específicamente para la administración de árboles de código fuente, y tienen muchas características que son específicas del desarrollo de software. Sin embargo, Subversion no es uno de estos sistemas. Subversion es un sistema general que puede ser usado para administrar cualquier conjunto de ficheros.

Para establecer la estructuración de ramas en el repositorio Subversion se respetarán las ramas principales trunk, branches y tags.

Toda nueva rama que haya que crear debe seguir un mismo patrón: "token"/"id-issue"-"descripción"

-   token: tendrá las siguientes abreviaturas:

    -   "feat": para las features.

    -   "bugfix": para solucionar alguna incidencia.

    -   "chore": para tareas de refactorización, eliminación de deuda técnica o limpieza en general.

    -   "wip": para el resto de tareas.

-   id-issue: es el código de la issue de GesProy.
-   descripción: serán un conjunto de palabras descriptivas de lo que se incluirá en la rama, separadas por guiones (-) y con tres palabras máximo.

El nombre deberá ser claro y legible, evitando que quede excesivamente largo. 

Ejemplos:

-   feat/94864-gestion-ciudadanos

-   bugfix/76755-correccion-redondeo-importes

Se recomienda generar un tag cada vez que se haga una entrega, siguiendo este patrón:

-   tags/rcs/v0.9.0-RC, en las entregas a release candidates, habituales de los despliegues a UAT tras finalizar sprints.

-   tags/releases/v0.9.0-RELEASE, para los casos de entregar release para despliegues en PRE y PRO.

Es recomendable que las ramas no permanezcan durante mucho tiempo, reintegrándolas lo antes posible y manteniéndolas sincronizadas en todo momento.

En los casos en los que las funcionalidades requieran mucho tiempo de desarrollo, se recomienda el uso de feature flags.

### 3.6  Herramientas de Testing <a name="3.6"></a>

El testing es una parte importante dentro del desarrollo de una aplicación frontend, ya que nos va a permitir prevenir y detectar errores o resultados inesperados automáticamente sin tener que estar probando todas las casuísticas dentro de la aplicación cada vez que se haga un cambio o una refactorización dentro del código.

Hay que diferenciar dos tipos de tests dentro de las aplicaciones: los tests unitarios y los test end-to-end (también llamados e2e). Los tests unitarios son pruebas que comprueban el buen funcionamiento de un fragmento de código, en este caso se van a probar cada uno de los componentes de las aplicaciones individualmente. En el caso de haber funcionalidades más complejas o utilidades dentro de la aplicación también es recomendable testearlas, aunque no formen parte de un componente.

Los tests e2e nos permiten comprobar el funcionamiento completo de la aplicación, de extremo a extremo, lo que hace posible probar, además del funcionamiento completo del sistema, el flujo completo de pantallas, añadiendo condiciones del propio sistema como el tiempo que tarda el sistema al responder a un servicio o la comunicación entre componentes de la aplicación.

Para los tests unitarios se ha seleccionado Jest como framework de testing para aplicaciones frontend. Jest se caracteriza por la velocidad de ejecución, que es muy superior en comparación con otras herramientas. Esto se debe al uso de ciertas estrategias tales como la paralelización de tests o la priorización de los tests más pesados al principio para aprovechar al máximo la capacitad computacional disponible, entre otros.

Jest incorpora herramientas de generación de reportes de cobertura que facilitan la detección de fragmentos de código no testeados, al proporcionar métricas porcentuales

de elementos testeados en comparación con elementos encontrados en el código. Es recomendable establecer una cobertura mínima de testing e incluso integrarlo dentro del proceso de integración continua.

Cabe destacar que Jest aporta utilidades que facilitan en gran medida la tarea de mockear métodos, llamadas a servicios o configuraciones, lo que acelera el desarrollo de tests y su fiabilidad.

Más adelante se especificarán buenas prácticas para testing de aplicaciones front-end.

### 3.7  Comunicación con Backend <a name="3.7"></a>

La mayoría de las aplicaciones front-end se comunican con los servicios de back-end a través del protocolo HTTP. Los navegadores modernos admiten dos API diferentes para realizar solicitudes HTTP: la XMLHttpRequest interfaz y la fetch() API.

El HttpClient de \@angular/common/http ofrece una API HTTP de cliente simplificada para aplicaciones Angular que se basa en la interfaz XMLHttpRequest expuesta por los navegadores. Los beneficios adicionales de HttpClient incluyen características de comprobación, solicitud de tipo y objetos de respuesta, intercepción de solicitud y respuesta, Observable apis y manejo simplificado de errores.

### 3.8  Entorno de ejecución <a name="3.8"></a>

Node.js es el entorno de ejecución para JavaScript que actuará como motor de desarrollo de la aplicación.

Es una librería basada en eventos, es decir, asíncrona que se ejecuta sobre V8, el motor de alto rendimiento de JavaScript desarrollado por Google. Node.js es open-source y está diseñado para generar aplicaciones web muy optimizadas, participando en varios procesos como el minificado de código, el empaquetado de estáticos o en la utilización del servidor mock. Por todo ello es considerado como la base de

### 3.9   Motor de ejecución <a name="3.9"></a>

La ejecución del código JavaScript se realiza sobre los navegadores, cumpliendo con los requerimientos marcados por el framework de desarrollo.

Por defecto, la arquitectura propuesta va a soportar las versiones de los navegadores que soporte las aplicaciones generadas por el generador de aplicaciones de Angular, es decir, soportará todos los navegadores modernos. Para ser soportado por Internet Explorer en sus versiones 9, 10 y 11 se requieren *polyfills* que nos proporciona el propio ecosistema de Angular con un paquete publicado en NPM a tal efecto.

### 3.10  IDE de Desarrollo <a name="3.10"></a>

Para el desarrollo se va a utilizar Visual Studio Code. Es un potente editor de código fuente sofisticado multiplataforma que admite muchas funcionalidades prácticas en el momento de trabajar con el código, además de ser Open Source. Fue creado y diseñado para que funcione en los tres sistemas operativos mayormente utilizados: Windows, Linux y Mac OS.

Incluye soporte para la depuración de código, resaltado de sintaxis, fragmentos de código y refactorización de código. También es personalizable, de modo que los usuarios pueden cambiar el tema del editor, los métodos abreviados de teclado y las preferencias.

Contamos con IntelliSense, una capacidad que tiene el editor de texto para predecir las instrucciones que estamos por escribir, sin la necesidad de escribir toda la instrucción, ya que ésta se puede autocompletar haciéndonos más productivos y acortando la posibilidad de errores de sintaxis.

Visual Studio Code es una herramienta que se actualiza constantemente, cuenta con un extenso Marketplace y tiene la posibilidad de adaptar plugins o extensiones que faciliten el desarrollo del proyecto.

Algunos de las extensiones que recomendamos son las siguientes:

-   Angular Snippets: Esta extensión añade atajos al editor para generar estructuras de código de forma muy rápida con los principales patrones de trabajo.

-   Angular Material snippets: Añade atajos al editor para generar estructuras de código de forma muy rápida para los componentes de Angular Material.

-   Auto Import: Encuentra, analiza y proporciona automáticamente acciones de código y finalización de código para todas las importaciones disponibles.

-   TODO Highlight: Añade anotaciones en forma de comentario para modificaciones o correcciones que debemos hacer en el código a modo de recordatorio.

-   ESLint: Es un analizador de código utilizado principalmente para encontrar errores o discordancia en el desarrollo del proyecto.

-   Jest: Para tener feedback de error en alguno de los test en tiempo real o hacer debug fácilmente.

## 4  Guía de buenas prácticas en desarrollo <a name="4"></a>

A continuación, se presenta una guía de buenas prácticas de desarrollo de aplicaciones frontend desarrolladas con la arquitectura propuesta, que utiliza Angular como librería de construcción de interfaces gráficas.

Las indicaciones que se explican en ese apartado son resultado de las recomendaciones y especificaciones publicadas por Angular en su documentación oficial, y de las recomendaciones tanto de desarrolladores experimentados y referencias en la comunidad de desarrolladores, como de las experiencias del equipo de arquitectura.

Es altamente recomendable seguir las directrices que aquí se presentan con la finalidad de potenciar la mantenibilidad, eficiencia y legibilidad del código, garantizar el desarrollo de código homogéneo por parte de equipos diferentes y optimizar el rendimiento de las aplicaciones resultantes de este proceso.

En primer lugar, se explicarán buenas prácticas respecto al desarrollo con Angular para finalizar explicando buenas prácticas de carácter general.

### 4.1  Buenas prácticas de desarrollo con Angular en la arquitectura propuesta <a name="4.1"></a>

#### 4.1.1  Estructura de archivos <a name="4.1.1"></a>

Algunos ejemplos de código muestran un archivo que tiene uno o más archivos complementarios con nombres similares. Por ejemplo, hero.component.ts y hero.component.html.
>
La directriz utiliza el acceso directo hero.component.ts\|html\|css\|spec para representar esos diversos archivos. El uso de este acceso directo hace que las estructuras de archivos de esta guía sean más fáciles de leer y más concisas.

#### 4.1.2  Responsabilidad única <a name="4.1.2"></a>

Considera limitar los archivos a 400 líneas de código.
>
Definir una pieza de software, como un servicio o componente, por archivo. Un componente por archivo hace que sea mucho más fácil leer, mantener y evitar colisiones con equipos en el control de código fuente. Evita errores ocultos que a menudo surgen al combinar componentes en un archivo donde pueden compartir variables, crear cierres no deseados o un acoplamiento no deseado con dependencias.
>
La clave es hacer que el código sea más reutilizable, más fácil de leer y menos propenso a errores.
>
Es una mejor práctica redistribuir el componente y sus clases de soporte en sus propios archivos dedicados.
>
Definir funciones pequeñas. Considera limitar no más de 75 líneas por función, ya que son más fáciles de probar, especialmente cuando hacen una funcionalidad y tienen un propósito. Promueven la reutilización, son más fáciles de leer y mantener, ayudan a evitar errores ocultos que vienen con funciones grandes que comparten variables con un alcance externo, crean cierres no deseados o acoplamiento no deseado con dependencias.

#### 4.1.3  Nomenclatura <a name="4.1.3"></a>

La nomenclatura es muy importante para la mantenibilidad y la legibilidad. Esta guía recomienda los siguientes pasos de nomenclatura para el nombre del archivo y el nombre del símbolo.

-   Se deben utilizar nombres coherentes para todos los símbolos. El patrón recomendado es feature.type.ts, ya que ayuda a buscar el código deseado más rápido y facilitar su comprensión.

-   Separe los nombres de archivo con puntos y guiones. Los nombres de carpetas y archivos deben transmitir claramente su intención. Por ejemplo, app/heroes/hero-list.component.ts puede contener un componente que gestiona una lista de héroes.

-   Utilice nombres de los tipos .service, .component, .pipe, .module, y .directive. Si es necesario, invente nombres de tipos adicionales, pero tenga cuidado de no crear demasiados. Éstos, son una forma coherente de identificar rápidamente lo que hay en el archivo.

-   Se debe utilizar *upper camel case* para los nombres de clase, por ejemplo, HeroButtonComponent.

```{=html}
<!-- -->
```
-   Añadir al nombre de símbolo con el sufijo convencional (como Component, Directive, Module, Pipe, o Service) por ejemplo, "HeroesComponent".

-   Utilizar el nombre de archivo del sufijo convencional (como .component.ts, .directive.ts, .module.ts, .pipe.ts, o .service.ts) para un archivo de ese tipo.

-   Para los *services* se debe añadir al nombre el sufijo Service. Ya que proporciona una manera consistente de identificar y referenciar servicios rápidamente. Por ejemplo, algo que obtiene datos o héroes debería llamarse DataService o HeroService.

-   El nombre de las clases *pipes* debe usar UpperCamelCase (igual que los nombres de clase), y el *string name* correspondiente debe usar lowerCamelCase.

-   Los nombres para las pruebas unitarias deben ser iguales que su componente que se desee probar. Se debe añadir el sufijo .spec, como por ejemplo "heroes.component.spec.ts".

-   A diferencia de éstos, los nombre para las pruebas *end-to-end* deberán contener el sufijo .e2e-spec, como ejemplo, heroes.e2e-spec.ts

-   Para lo *modules*, la forma correcta para identificarlos sería añadir el sufijo Module a la clase, por ejemplo, "AppModule".

-   Los nombres de las variables utilizarán la convención camelcase *const firstName = "Ana";*

-   Se recomienda que los nombres de las variables de tipo Array sean nombres en plural.

-   Se recomienda que los nombres de las variables tipo boolean comiencen con los prefijos is, can o has, representando así una variable que puede tener dos valores únicamente.

-   Se recomienda utilizar el prefijo on para los props correspondientes a eventos: onClick, onClose.

-   Se recomienda utilizar el prefijo handler para nombrar las funciones que manejan los eventos.

-   Las props de los componentes deben nombrarse mediante la convención camelCase y se debe evitar que tenga el mismo nombre que propiedades de elementos del DOM para evitar errores no deseados.

-   Los nombres de las constantes se deberán escribir mediante la convención ALL\_CAPS.

-   Es recomendable que los métodos se nombren comenzando por un verbo, cuando sea posible, para especificar así, su funcionalidad

#### 4.1.4  Estructura de la aplicación y NgModules <a name="4.1.4"></a>

Todo el código de la aplicación va en una carpeta llamada src. Cada parte de la aplicación está en su propia carpeta, con su propio NgModule.
>
Todo el contenido es un asset por archivo. Cada componente, service y pipes está en su propio archivo. Los scripts de proveedores externos se almacenan en otra carpeta y no en la de src.
>
La estructura ha de realizarse de tal manera que se pueda localizar el código rápidamente y de un solo vistazo.
>
El código de localización ha de ser intuitivo, simple y rápido, ya que, para trabajar de manera eficiente, debe poder encontrar archivos rápidamente, especialmente cuando no conoce (o no recuerda) los nombres de los archivos. Mantener los archivos relacionados cerca uno del otro en una ubicación intuitiva ahorra tiempo. Una estructura de carpetas descriptiva es más cómoda para los desarrolladores que puedan intervenir en el proyecto.
>
Se debe asignar un nombre al archivo de manera que se sepa instantáneamente lo que contiene y representa. Tiene que ser descriptivo y mantenga el contenido del archivo exactamente en un componente. Se evitarán archivos con múltiples componentes, múltiples servicios o una mezcla de ambos.
>
La estructura de carpetas debería mantenerse plana el mayor tiempo posible. Hay que considerar crear subcarpetas sólo cuando una carpeta llegue a los siete o más archivos.
>

Cada aplicación requiere al menos crear un NgModule en la carpeta raíz, en este caso en /src/app/ app.module.ts.
```javascript
import {NgModule } from '\@angular/core';
import { BrowserModule } from '\@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({

imports: [BrowserModule],

declarations: [
    AppComponent,
    HeroesComponent
],

exports: [ AppComponent ],

entryComponents: \[ AppComponent \]

})

export class AppModule {}

```
Se debe crear un NgModule para todas las features en una aplicación. Cada módulo tendrá el mismo nombre que la carpeta del componente, por ejemplo, en app/heroes contendrá el módulo heroes.module.ts que definirá la clase HeroesModule.
>
En los casos en los que necesitemos componentes comunes que vayan a ser reutilizados por componentes declarados en otros módulos, se creará una carpeta nombrada *shared* cuyo modulo será nombrado SharedModule ubicado en app/shared/shared.module.ts.
>
Los servicios en cambio, no deberían estar en dicha carpeta, ya que se proporcionan una vez para toda la aplicación, o en un módulo en particular, salvo los casos en los que el servicio no tiene estado, es decir, los que consuman este servicio no se ven afectados por nuevas instancias.
>
Se deben importar todos los módulos que requieran los assets en el SharedModule, como por ejemplo CommonModule y FormsModule. Exportar todos los componentes que requieran el uso de los demás componentes.

#### 4.1.5  Componentes <a name="4.1.5"></a>

Se debe dar a los componentes un selector de elementos, en oposición a los selectores de atributos o clases, ya que los componentes tienen plantillas que contienen HTML. Muestran contenido. Los desarrolladores colocan componentes en la página como lo harían con elementos HTML nativos y componentes web.
>
Es más fácil reconocer que una clase es un componente mirando el html de la plantilla.

```javascript

@Component({
    selector: 'toh-hero-button',
    templateUrl: './hero-button.component.html'
})

export class HeroButtonComponent {}
```
Se deben separar las plantillas y estilos en archivos separados siempre que sean de más de 3 líneas de código. Éstos archivos tendrán el mismo nombre del componente con el sufijo .html (\[component-name\].component.html) o .css (\[component-name\].component.css). Se realiza de esta manera ya que muchas líneas de código en plantillas o estilos oscurecen el propósito y la implementación del componente, reduciendo la legibilidad y la facilidad del mantenimiento del mismo.
```javascript
@Component({
    selector: 'toh-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
```
Se utilizarán los class decorators \@Input() y \@Output() en vez de las propiedades inputs y outputs de los metadata \@Directive y \@Component. De esta manera es más fácil y más legible identificar qué propiedades de una clase serán entradas o salidas. Si se necesita cambiar el nombre de la propiedad o evento asociado se puede modificar en un único sitio. Aparte que serán menos las líneas de código necesarias.


Hay que evitar los alias de entrada y salida, excepto cuando tenga un propósito importante, ya que puede ser confuso en cuanto a usabilidad.

```javascript
export class HeroButtonComponent {
    // Evitar los alias entre paréntesis
    @Output('heroChangeEvent') heroChange = new EventEmitter<any>();
    @Input('labelAttribute') label: string;
}

```

Las variables estarán ubicadas al inicio, en orden de públicas primero, y privadas posteriormente, seguidas por los métodos. De esta manera será más sencilla la lectura e identificaremos con más rapidez las funcionalidades del componente.
>
Toda la lógica deberá estar limitada en un componente que sólo se requiera para la parte vista. El resto de lógica deberá ser delegada a los *services*. También deberemos incluir la lógica reutilizable a dichos *services* para mantener los componentes lo más limpios y entendibles. Éstas serán expuestas a través de funciones. De esta manera también se eliminan dependencias y se ocultan detalles de implementación del componente.
>
Los nombres de los eventos no deben contener el prefijo "on", ya que éstos son utilizados en eventos como los "clicks" en botones.

```javascript
export class HeroComponent {
    // Evitar el prefijo on
    @Output() onSavedTheDay = new EventEmitter<boolean>();
}
```

La lógica de presentación deberá estar situada en la clase del componente y no en la plantilla html así evitaremos extenderlo en dos lugares, mejorar la capacidad de test, mantenimiento y la reutilización.

#### 4.1.6  Directivas <a name="4.1.6"></a>

También se podrían hacer uso de directivas de atributos cuando se tiene la lógica de presentación sin una plantilla.
```javascript

@Directive({
    selector: '[tohHighlight]'
})
export class HighlightDirective {
    @HostListener('mouseover') onMouseEnter() {
    // do highlight work
    }
}
<div tohHighlight>Example</div>
```

#### 4.1.7  Servicios <a name="4.1.7"></a>

Un Servicio en Angular es el mecanismo para compartir funcionalidad entre componentes, y es la recomendación debido a su mantenibilidad. El patrón de diseño que siguen los servicios y es el Singleton, en JavaScript. Un Singleton sirve como un recurso compartido el cual aísla la implementación de un contexto global, es decir, puedo referenciarlo en varios lugares y llamar sus funciones.

```javascript
export class HeroService {
    constructor(private http: HttpClient) { }
    getHeroes() {
        return this.http.get<Hero[]>('api/heroes');
    }  
}
```

Se crearán servicios con una única responsabilidad que esté encapsulada por su contexto o una vez que el servicio comience a exceder ese propósito. Cuando un servicio tiene múltiples responsabilidades, se hace difícil testearlo, y cada componente o servicio que lo inyecta ahora tiene el peso de todos ellos.
>
Hay que proveer al servicio con el inyector de la raíz de la aplicación en el decorador \@Injectable. De esta manera esa instancia del *service* se comparte y está disponible en todas las clases que lo necesiten. Ideal cuando un servicio comparte métodos o estados.

```javascript
@Injectable({
    providedIn: 'root',
})
export class Service {
}
```

Utilizaremos el decorador \@Injectable() en vez del decorador \@Inject como parámetro cuando usemos dependencias de un service ya que el mecanismo de inyección de dependencia en angular resuelve las dependencias propias de un servicio en función de los tipos declarados de los parámetros del constructor de ese servicio.


```javascript
@Injectable()
export class HeroArena {
    constructor(
    private heroService: HeroService,
    private http: HttpClient
    ) {}
}

```

#### 4.1.8   Data services <a name="4.1.8"></a>

Se trata de la lógica que se utiliza para realizar operaciones e interactuar con los datos a un servicio.
>
Hace que los data services sean responsables de las llamadas XHR, local storage, el almacenamiento en la memoria o cualquier otra operación de datos.
>
La responsabilidad del componente es la presentación y la recopilación de información para la vista. No debería importarle cómo obtiene los datos, sólo sabe a quién pedirlos. La separación de los data services mueve la lógica sobre cómo llevarlos al data services, y permite que el componente sea más simple y más centrado en la vista.
>
Esto hace que sea más fácil testearlo (mock o una prueba real) las llamadas de datos cuando se prueba un componente que utiliza un data service.
>
¿Por qué? Los detalles de la gestión de datos, como headers, métodos HTTP, almacenamiento en caché,
>
manejo de errores, son irrelevantes para los componentes y otros consumidores de datos.
>
Un data service encapsula estos detalles. Es más fácil evolucionar estos detalles dentro del servicio sin afectar a sus consumidores. Y es más fácil probar a los consumidores con implementaciones de servicios mockeados.

#### 4.1.9  Métodos de ciclo de vida <a name="4.1.9"></a>

En Angular, cada componente tiene un ciclo de vida, una cantidad de etapas diferentes que atraviesa. Hay 8 etapas diferentes en el ciclo de vida de los componentes. Cada etapa se denomina lifecycle hook event. Podemos utilizar estos eventos en diferentes fases de nuestra aplicación para obtener el control de los componentes. Como un componente es una clase de TypeScript, cada componente debe tener un método constructor.
>
El constructor de la clase de componente se ejecuta primero, antes de la ejecución de cualquier otro lifecycle hook. Si necesitamos inyectar dependencias en el componente, el constructor es el mejor lugar para hacerlo. Después de ejecutar el constructor, Angular ejecuta sus métodos de lifecycle hook en un orden específico.
>
La manera de implementarlo sería la siguiente:

```javascript
@Component({
    selector: 'toh-hero-button',
    template: `<button>OK</button>`
})
export class HeroButtonComponent implements OnInit {
    ngOnInit() {
        console.log('The component is initialized');
    }
}
```


#### 4.1.10  Evitar código duplicado <a name="4.1.10"></a>

Se recomienda siempre que sea posible y útil, no repetir fragmentos de código evitando la duplicidad. Para conseguir este objetivo se recomienda revisar el código buscando patrones o similitudes para, siempre que sea posible y haga más eficiente el desarrollo, extraer aquellas funcionalidades comunes dentro de la aplicación.
>
Con ello también se optimizará la testeabilidad de estas utilidades, lo que ayudará a prevenir errores dentro de estas funciones al as que se llamará repetidamente dentro de la aplicación.

#### 4.1.11  Tipado de variables <a name="4.1.11"></a>

El tipado de variables es una buena práctica que nos ofrece muchos beneficios, tal y como se ha explicado en el apartado de *Compilado y calidad de código* dentro de las tecnologías seleccionadas.
>
Dentro del desarrollo de aplicaciones con Angular, es recomendable utilizar los tipados en los diferentes tipos de variables del código, desde las *props* pasando por el estado del componente, en caso de que lo implemente, así como las variables que manejan los métodos.
>
Cuando sea necesario tipar un objeto concreto, hay que crear una interfaz personalizada que corresponda con ese objeto para poder detectar si alguna de las propiedades almacena datos de un tipo inesperado, lo que puede traducirse en errores en tiempo de ejecución.
>
Se recomienda no utilizar tipos no primitivos como
>
*Number*, *String*, *Boolean*, *Symbol*
>
Y utilizar en su lugar:
>
*number*,*string*,*boolean*,*symbol*
>
Ya que los primeros se refieren a tipos no primitivos, de uso muy reducido en código Javascript.
>
Al tipar funciones, es muy recomendable no solo tipar las propiedades, sino también los valores que va a devolver. En caso de no devolver ningún valor, lo más correcto es devolver un tipo *void* en vez de un tipo *any* que será ignorado al compilar ya que en el caso de que en el código se esperara un valor de retorno, Typescript emitiría un error en tiempo de desarrollo para evitar fallos posteriores, que serían muy difíciles de detectar de otra forma.
>
A la hora de tipar las funciones, es posible utilizar parámetros opcionales, es decir, que se pueden pasar a la función o no, pasándolos únicamente cuando sea necesario y evitando manejar datos inservibles
>
Finalmente es preferible no utilizar *overloads* si fuera posible, que son varias definiciones del tipo de una variable. En su lugar, además de utilizar parámetros opcionales, también se pueden utilizar la unión de varios tipos posibles para una variable, como se puede ver a continuación:
```javascript
let a: (number\|string);
```
#### 4.1.12  Importaciones <a name="4.1.12"></a>

Es recomendable realizar las importaciones en orden, de tal forma que en primer lugar se importen los elementos de terceros y, a continuación, se importen los elementos propios dejando una línea en blanco entre importaciones de elementos de terceros e importaciones de elementos propios.
>
Esto facilita la búsqueda de importaciones dentro del componente.

#### 4.1.13  Comentarios del código <a name="4.1.13"></a>

Los comentarios de código son recomendables siempre y cuando sean necesarios y ayuden a entender el código a otros desarrolladores que puedan trabajar sobre ese mismo código.
>
No es recomendable sobrecargar el código con comentarios y se fomenta el uso de métodos y componentes con nombres que identifiquen la funcionalidad o finalidad del elemento que representan, describiendo en el propio nombre el comportamiento esperado.

#### 4.1.14  Gestión de dependencias del proyecto <a name="4.1.14"></a>

Dentro del fichero package.json, se especifican las dependencias de ejecución del proyecto dependencies y las dependencias de desarrollo del proyecto, devDependencies, entre otras. Es muy recomendable revisar las dependencias que se han añadido al proyecto, evitando que haya dependencias innecesarias o sin utilizar. De esta forma, evitaremos un mayor peso del proyecto.
>
Además, debemos tener en consideración las versiones que están especificadas para cada una de las dependencias, ya que en ocasiones existen relación entre ellas y exigen unas versiones mínimas para su buen funcionamiento. Por ello se recomienda, no solo revisar si las dependencias que se especifican en el fichero package.json son necesarias, sino si las versiones de las mismas son correctas, para el funcionamiento óptimo de la aplicación.

#### 4.1.15  Uso de servidor mock para desarrollo <a name="4.1.15"></a>

Al desarrollar la parte frontend de una aplicación, existen dependencias con el equipo de desarrollo de backend, ya que los datos de la aplicación normalmente se reciben a través de servicios API Rest con los que la aplicación frontend se tiene que integrar.
>
Se recomienda la utilización de un servidor mock desarrollado con Node.js que se comporte de la misma manera en que se espera que se comporten los servicios API Rest de la parte de backend. Con esto se pretende evitar bloqueos en aquellas partes de la aplicación dependientes directamente de los datos
>
obtenidos a través de los servicios, sobre todo en etapas más tempranas de la aplicación, donde pueden no estar preparados o desplegados.
>
El servidor mock debe estar implementado siguiendo los contratos de integración en los que se definen cómo son y cómo responden los servicios API Rest, para que en el momento en el que se vaya a realizar la integración con ellos, las diferencias entre las respuestas del servidor mock y del servidor real sean los más parecidas posibles, evitando hacer muchos cambios en la aplicación dentro de la tarea de integración.

### 4.2  Angular CLI <a name="4.2"></a>

Angular es la plataforma perfecta para el desarrollo profesional de aplicaciones modernas. Angular CLI es la herramienta adecuada para generar aplicaciones Angular.
>
El comúnmente conocido como Angular CLI es la herramienta de línea de comandos estándar para crear, depurar y publicar aplicaciones Angular. En su actual versión es muy sencillo dominar los aspectos básicos.

#### 4.2.1  Requisitos de Angular CLI <a name="4.2.1"></a>

Angular es una plataforma de desarrollo dogmática y llave en mano. Para empezar, como en casi cualquier desarrollo necesitarás NodeJS y su manejador de paquetes npm.

#### 4.2.2  Crear y ejecutar una aplicación Angular  <a name="4.2.2"></a>

El primer comando será "ng new" que va a generar toda una aplicación funcional y las configuraciones necesarias para su depuración, pruebas y ejecución.
>
Se puede configurar el tipo, el estilo y muchas más cosas, tanto de forma interactiva como mediante opciones en línea de comandos.
>
Lo más habitual es usar la configuración que viene por defecto, pero también se pueden crear soluciones a medida.
>
Una vez finalizada la instalación de todas las librerías necesarias se puede ejecutar el comando standard de npm para el arranque de cualquier aplicación: npm start. Si todo va bien, desde la url http://localhost:4000 estará en marcha la aplicación.

#### 4.2.3  Empaquetado y transformación de código  <a name="4.2.3"></a>

Angular CLI proporciona un comando utilizado para empaquetar los módulos que se va a utilizar en la arquitectura propuesta, junto con sus dependencias. Para ello se utiliza el comando "ng build" que hará que compile la aplicación Angular en un directorio de salida llamado dist/ en la ruta de salida. Se ejecutará desde un directorio de espacio de trabajo.
>
El generador de aplicaciones utiliza la herramienta de compilación webpack, con opciones de configuración predeterminadas especificadas en el archivo de configuración del espacio de trabajo (angular.json). Para la configuración de \"producción\" se crea de manera predeterminada cuando se usa Angular CLI para crear el proyecto, y se puede usar esa configuración añadiendo a la línea de comandos la opción *\--configuration=\"production\"* o *\--prod=\"true\"*.
>
Algunas opciones adicionales solo se pueden establecer a través del archivo de configuración, ya sea modificando a mano dicho archivo o con el comando "ng config". Estos incluyen assets, estilos y scripts objects que proporcionan recursos globales en tiempo de ejecución para incluir en el proyecto. Los recursos en CSS, como imágenes y fuentes, se escriben automáticamente y se toman las huellas digitales en la raíz de la carpeta de salida.

#### 4.2.4  Carpetas y Ficheros principales  <a name="4.2.4"></a>

Volviendo a la estructura de ficheros y carpetas se encontrarán con muchos archivos de distintos tipos. Siendo los siguientes los más importantes:

-   angular.json: configuración del propio CLI

-   package.json: dependencias de librerías y scripts

-   src/: la carpeta donde están los archivos fuentes

-   index.html: un fichero HTML índice estándar

-   main.ts: fichero TypeScript de arranque de la aplicación

-   app/: la carpeta con el código específico de la aplicación

-   app.module.ts: la aplicación es un árbol de módulos, y este es su raíz

-   app.component.ts: la página es un árbol de componentes, y este es su raíz

-   app.component.html: tiene una parte visual, esta es su vista

#### 4.2.5  Configuración  <a name="4.2.5"></a>

El package.json es el fichero estándar de npm donde se almacenan las dependencias de terceros. Contiene las librerías que necesita la aplicación para ejecutarse, por ejemplo, todas las de Angular. Y también las herramientas que necesita el desarrollador, por ejemplo, el propio AngularCLI;
>
Otro uso del package.json es servir de contenedor de scripts para automatizar tareas de operaciones rutinarias. Por ejemplo, el comando estándar npm start ejecutará el contenido asignado en el fichero json, originalmente "ng serve". Esto lanza el servidor de pruebas con sus opciones por defecto. El comando "ng serve" admite muchas configuraciones.

#### 4.2.6  Environments  <a name="4.2.6"></a>

La carpeta environments/ contiene ficheros para cada entorno de distribución necesario. En código siempre importaremos el fichero base, pero durante la compilación el CLI lo sustituirá por el adecuado.

## 5. Buenas prácticas de testing en Angular  <a name="5"></a>

Los test unitarios representan una buena práctica que supone muchos beneficios a la hora de desarrollar proyectos front.
>
En primer lugar, nos va a permitir encontrar bugs más fácilmente y de forma automática, lo que va a suponer que los errores sean subsanados lo antes posible y evitando que afecten a otros componentes del código.
>
También va a facilitar los cambios de comportamiento o la refactorización en los componentes, ya que permitirá comprobar el buen comportamiento del componente después de una modificación del código, ya sea por la actualización de una versión de una librería, por una nueva *feature* a añadir en el componente o una refactorización de ciertos métodos del mismo.
>
Finalmente, nos permite pensar en cómo diseñar el componente antes de escribir el código, definiendo su comportamiento en cada uno de los casos, lo que permite diseñar mejores componentes. Esto se debe a que, al hacer un test de una parte concreta del código, como un método, por ejemplo, se va a definir de qué es responsable esa parte del código, por lo que se acotará la funcionalidad de dicho método, facilitando su depuración.
>
A continuación, se presentan algunas buenas prácticas de testing, que facilitan la realización de tests y que aprovechan al máximo sus características para asegurar y garantizar la calidad del código.

### 5.1  Desarrollar el test antes del propio componente <a name="5.1"></a>

Existe una práctica de programación denominada TDD o Test-Driven-Development que consiste en escribir primero los tests unitarios, después de desarrollar el componente hasta que pueda pasar los tests unitarios con éxito y finalizar refactorizando el código.
>
Esta forma de trabajar es muy buena para entender el código y su funcionamiento. Con ella se consigue, una mayor rapidez en el desarrollo, así como un código más robusto y mantenible.
>
Antes de desarrollar el componente es necesario en primer lugar tener definidos los requisitos que tiene que cumplir el componente y el comportamiento esperado en cada uno de los casos posibles.
>
Esta buena práctica es la que va a permitir pensar mejor el diseño del componente antes de desarrollarlo, como se comentaba anteriormente, ya que se conoce cómo debe actuar el componente en todos los casos y se puede pensar en la mejor forma de implementarlo, aunque luego sea necesaria una refactorización del código.

### 5.2 Cobertura mínima <a name="5.2"></a>

Una de las medidas que se utilizan para calcular qué cantidad de código se ha probado con tests unitarios es
>
la cobertura o *coverage*. Esta medida recoge la cantidad de código que se han ejecutado durante la ejecución de una suite de test en un determinado componente respecto a la cantidad total de código, expresado en porcentaje.
>
Jest, el framework de testing propuesto para la realización de test unitarios en la arquitectura propuesta, tiene una herramienta concreta que nos ofrece informes de la cobertura alcanzada en cada directorio y en cada fichero del código. Además, permite ver en cada fichero que líneas se han ejecutado en los tests y cuáles no, lo que nos ayuda a detectar casos no testados o porciones de código que ya no son útiles en el código al eliminar algún comportamiento o *feature*.
>
Se recomienda una cobertura mínima del 80%, dando prioridad a comprobar el buen funcionamiento de las partes más críticas del componente o con más riesgos a provocar fallos.

### 5.3  Un test debe probar un componente funcional <a name="5.3"></a>

El hecho de que un componente tenga una alta cobertura de código es muy recomendable, pero no garantiza que se hayan probado todos los casos ante los que se puede encontrar un componente.
>
Por ello, no se deben adaptar los tests para forzar que sean pasados con éxitos por el componente, ya que esto quitaría gran parte de utilidad a la práctica del desarrollo de tests unitarios, en su lugar se debe poner a prueba todos los comportamientos del componente, sobre todo los más críticos y probar realmente que su comportamiento es correcto.
>
El desarrollo del test antes que el del componente ayuda y facilita el desarrollo de esta buena práctica

### 5.4  Utilidades de testing <a name="5.4"></a>

Al desarrollar los tests unitarios es probable que se repitan una serie de utilidades genéricas que se repitan a lo largo de diferentes tests. Por ejemplo, cuando se va a desarrollar un test unitario de un componente, en ocasiones es necesario *mockear* datos que provienen de otros componentes o librerías de terceros y que son necesarios para el buen funcionamiento y, por lo tanto, para el desarrollo de tests fiables de los componentes.
>
Si los datos que se *mockean* son necesarios en varios componentes se debe considerar exportar una utilidad de testing que facilite y haga genérica la simulación de estos datos, evitando repetir el código en cada test de cada componente que lo necesite. Esta generalización se debe hacer siempre y cuando compense desarrollarla y evite repetición de código, haciendo más eficiente el desarrollo de los tests.

### 5.5  Test unitarios en el componente <a name="5.5"></a>

Cuando hablamos de tests unitarios debemos garantizar que realmente estamos probando únicamente el buen funcionamiento del componente independiente del resto de componentes, de tal forma que no haya dependencias con las funcionalidades de otros componentes.
>
La mayoría de componentes de una aplicación se relacionan entre ellos o comparten datos, pero cuando se desarrollan los tests unitarios se deben *mockear* los datos que recibe el componente a testear y en ocasiones
>
mockear el resultado de ciertos métodos externos al componente, para evitar tener dependencias externas y aislar el componente en la suite de test.

### 5.6  Tests legibles y mantenible <a name="5.6"></a>

Los tests deben ser fáciles de entender y legibles para los desarrolladores, con una estructura clara que permita que cuando se detecte un *bug*, el test sea fácil de depurar y facilite encontrar en qué punto del código se está produciendo el error o el comportamiento inesperado.
>
Si el código del test es complejo y difícil de entender, la tarea de detectar el punto del código donde aparece el comportamiento erróneo es considerablemente más complejo, ya que en primer lugar habría que analizar el test, haciendo que la fiabilidad del test disminuya y, por tanto, también su utilidad.
>
Además, en el caso de que el comportamiento del componente deba cambiar o añadir una *feature*, el código de los tests debe ser entendible para otros desarrolladores, facilitándoles la tarea de añadir otras suites de tests o modificando las ya existentes.

## 6. Guía de normalización <a name="6"></a>

En este guía de normalización se va a describir, en primer lugar, el scaffolding de la arquitectura propuesta, indicando cómo se disponen los directorios y qué funcionalidades tienen cada uno de ellos.
>
A continuación, se expondrá la guía normalización en la que se define el formato de los nombres de los componentes y de los directorios que forman parte de la aplicación.
>
Finalmente se describirá una guía de estilo con las convenciones de codificación que se deben respetar en el desarrollo de las diferentes aplicaciones.
>
Respetar estas directrices y asumirlas dentro de los proyectos, permitirá asegurar unos niveles mínimos de calidad de código, mejorar su mantenibilidad y su legibilidad.

### 6.1  Scaffolding - Indicaciones <a name="6.1"></a>

La aplicación se debe estructurar de tal forma que se facilite la localización del código, para ello hay que tener algunas consideraciones como las que se indican a continuación:

-   Nombrar los ficheros y los directorios con nombres representativos que describan su contenido, de tal forma que no sea necesario acceder al fichero o al interior del directorio para conocer su contenido.

-   Tratar de mantener una estructura lo más plana posible, para evitar navegar a niveles profundos dentro de la estructura de la aplicación.

-   Si dentro de un directorio hay un número alto de ficheros (un máximo de 9 ficheros), es recomendable separarlos en subcarpetas que permitan una mejor organización.

-   Diferenciar aquellos componentes que sean comunes de aquellos que sean exclusivos para una vista concreta de la aplicación.

### 6.2  Guía de estilos <a name="6.2"></a>

A continuación, se especificarán una serie de directrices que permitirá a los desarrolladores de los proyectos que se implementen con la arquitectura propuesta, seguir unas líneas de estilo de referencia que, si bien no afectarán a aspectos técnicos como el rendimiento o la velocidad de la aplicación, mejorará significativamente su legibilidad y mantenibilidad.

#### 6.2.1  Longitud máxima de una línea <a name="6.2.1"></a>

La longitud máxima de una línea de código será de 100 caracteres.

#### 6.2.2  Espaciado e indentación <a name="6.2.2"></a>

Respecto al espaciado y a la indentación en el código hay que considerar varias indicaciones:

-   Es recomendable no utilizar tabulaciones.

-   En ningún caso se debe mezclar los espacios y las tabulaciones

-   El número de espacios con los que se debe indentar el código, puede variar, aunque se recomiendan 2 o 4 espacios.

-   Añadir un espacio antes del *leading brace* o llave de apertura en funciones, métodos o sentencias condicionales

-   Añadir un espacio antes del paréntesis de apertura en sentencias de control (*if* o *while*).

-   Separar los operadores con espacios
 
#### 6.2.3  Comparación de variables <a name="6.2.3"></a>

Al realizar la comparación entre variables es recomendable realizar una comparación estricta tanto de valor como de tipo entre variables mediante el operador '==='.
>
Por ejemplo:

```javascript

const x = 5;

x == '5' --> true

x === '5' --> false
```

#### 6.2.4  Evaluación condicional <a name="6.2.4"></a>

Se recomienda evaluar el valor *booleano* de la expresión. Por ejemplo, en vez de utilizar las siguientes sentencias condicional:

```javascript

if(array.length > 0) {}

if (string !== "") {}

if (array.length === 0) {}
```
Se utilizarán las sentencias que hay a continuación:

```javascript

if(array.length) {}

if (string) {}

if (array.length) {}
```

## 7. Versiones de las librerías utilizadas <a name="7"></a>

En la siguiente tabla se indican las versiones utilizadas en los proyectos generados con el generador:


| Dependencias | Versión |
| -- | -- |
| \@angular/animations | 9.1.0 |
| \@angular/common                   | 9.1.0       |
| \@angular/compiler            | 9.1.0       |
| \@angular/core                     | 9.1.0       |
| \@angular/forms                    | 9.1.0       |
| \@angular/platform-browser         | 9.1.0       |
| \@angular/platform-browser-dynamic | 9.1.0       |
| \@angular/router                   | 9.1.0       |
| rxjs                               | 6.5.4       |
| tslib                              | 1.10.0      |
| zone.js                            | 0.10.2      |
| \@angular/cdk                      | 8.2.3       |
| \@angular/material                 | 8.2.3       |
| hammerjs                           | 2.0.8       |
| ng-packagr                         | 9.1.0       |


A continuación, se indican las versiones utilizadas en las dependencias de **desarrollo** del proyecto:


| **Dependencias**                       | **Versión** |
| -- | -- |
| \@angular-devkit/build-angular           | 0.901.0     |
| \@angular/cli                            |  9.1.1        |
| \@angular/compiler-cli                   |  9.1.0        |
| \@angular/language-service               |  9.1.0        |
| \@types/node                             |  12.11.1      |
| codelyzer                                |  5.1.2        |
| ts-node                                  |  8.3.0        |
| typescript                               |  3.8.3        |
| \@types/jest                             |  24.0.23      |
| \@types/mockdate                         |  2.0.0        |
| jest                                     | 24.9.0        |
| jest-preset-angular                      |  8.0.0        |
| mockdate                                 | 2.0.5         |
| cypress                                  | 3.7.0         |
| eslint                                   | 6.8.0         |
| \@typescript-eslint/eslint-plugin        | 2.28.0        |
| \@typescript-eslint/eslint-plugin-tslint | 2.28.0        |
| \@typescript-eslint/parser               | 2.28.0        |
| dyson                                    | 3.0.1         |
| nodemon                                  | 2.0.1         |
| npm-run-all                              | 4.1.5         |


## 8.  Enlaces <a name="8"></a>

A continuación, se especifican los enlaces a la documentación oficial de las tecnologías que se han descrito anteriormente:

-   [Angular](https://angular.io/start)

-   [Angular CLI](https://angular.io/start)

-   [Visual Studio Code](https://code.visualstudio.com/)

-   [Typescript](https://www.typescriptlang.org/docs/home.html)

-   [ESLint](https://eslint.org/)

-   [Angular Material](https://material.angular.io/guide/getting-started)

-   [NPM](https://docs.npmjs.com/)

-   [SVN](https://subversion.apache.org/)

-   [Jest](https://jestjs.io/docs/en/getting-started)

-   [Node](https://nodejs.org/es/docs/)
