## Módulos, rutas y carga perezosa.

Módulo de auth
```ng g m auth
ng g c auth/pages
ng g c auth/pages/registro	
ng g c auth/pages/login
ng g c auth/pages/forgot
```

Y el fichero de rutas:

```
ng g m auth/authRouting –flat
```

Una vez creado todo, los pasos son:
Configurar el archivo de rutas principal
Configurar las rutas hijas
Importar el archivo de rutas hijas en el módulo que queremos cargar de forma perezosa
Otra forma de crear el módulo y el fichero de rutas de forma rápida es:
```
ng g m productos –-routing
```
