# InventarioReactModulosConAPIs. Porfavor lee este archivo antes de revisar este repositorio.
Este repositorio incluye los archivos solicitados para la actividad GA8-220501096-AA1-EV01 Desarrollar software a partir de la integración de sus módulos componentes, para la carrera tecnológica "Análisis y desarollo de software" del SENA.

El repositorio se divide en dos carpetas. La primera carpeta, "FrontEndReact", incluye las páginas Front-End de cada módulo, las cuales fueron creadas usando React.

La segunda carpeta, "ModulosDeMiInventario", incluye las API para cada módulo del inventario con las librerias de Express, Nodemon, Cors y Body-parser.

Adicinalmente, incluí el archivo script de mi base de datos de MySQL. Este archivo es inportante para correr las APIs. No obstante, las APIs deben tener los datos del servidor de MySQL para poder comunicarse con la base de datos.

Cada API y Front-End tiene sus librerias corespondientes en las carpetas "node_modules".

Todos los módulos Front-End utilizan el puerto 3000 del Localhost, por lo que rerecomiendo probar cada uno de forma individual.

Cada API utiliza un puerto diferente del localhost, al igual que solo se pueden comunicar con un FrontEnd en específico.

# Aqui esta la lista de las API que requiere cada Front-End:

El front-End historial-ex-app requiere la API HistorialModulos, la cual utiliza el puerto 9002.

El front-End ingresodeusuarios-ex-app requiere la API UsuariosModulos, la cual utiliza el puerto 9003.

El front-End inventario-ex-app requiere la API InventarioModulos, la cual utiliza el puerto 9000.

El front-End proveedoresyclientes-ex-app requiere la API ProveedoresyClientesModulos, la cual utiliza el puerto 9000.

# Como probar cada Front-End y API:

Antes de hacer las prubeas, primero se debe abrir el servidor de MySQL y correr el script de la base de datos. De ser posible se deben saltar los errores que salgan en la ejecución para generar la base de datos sin problemas.

Para probar cada módulo recomiendo usar VisualStudioCode y tener instalado NodeJS.

Primero, se debe abrir la API del módulo que se quiere probar (Por ejemplo, el módulo de inventario utiliza la API InventarioModulos), luego se debe abrir el archivo app.js y modificar los valores de la constante bdOptions para que encajen con los datos del servidor de MySQL (especificamente el puerto de localhost, usuario y contraseña del servidor). Después en la consola se debe escribir "NPM start". 

Una vez que la API se conecte a su puerto del localhost, se abre en una ventana aparte el Front-End corespondiente (en este caso para el módulo del inventario se estaría abriendo inventario-ex-app). En esa ventana se escribe en la consola "NPM start" y se espera a que carge la página de React. Solo he hecho pruebas de las páginas usando Google Chrome, por lo que no se si también funcionen en otros navegadores web.

Cada página permite leer los datos de la base de datos a través de una tabla. Se pueden ingresar nuevos datos rellenando los espacios del formulario y presionando el botón azul. las filas de la tabla se pueden modificar rellenando los espacios del formulario y presionando el botón verde "modificar" de la fila que se quiera cambiar. Y además se pueden borrar filas con el botón rojo "eliminar".

Espero que esta información sea útil para probar los contenidos de este repositorio. Muchas gracias, Martín Garzón Plazas.
