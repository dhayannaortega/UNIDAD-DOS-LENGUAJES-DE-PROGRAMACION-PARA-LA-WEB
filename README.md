Proyecto: Coquito Amarillo S.A.S.

Aplicación web desarrollada como entrega integradora, implementando un backend funcional en Node.js con Express, conexión a base de datos en MySQL Workbench y gestión de archivos de datos estructurados.


Tecnologías Utilizadas
* Node.js & Express: Entorno de ejecución y framework para el desarrollo del servidor backend y la gestión de rutas y peticiones.
* MySQL / MySQL2: Sistema de gestión de bases de datos relacionales para el almacenamiento persistente de la información.
* HTML5, CSS3 & JavaScript (Vanilla): Tecnologías implementadas en el frontend para la interfaz visual y la interacción del usuario.
* Archivos CSV (Datos.csv): Manejo y procesamiento estructurado de fuentes de datos adicionales.
* Git y GitHub: Control de versiones y despliegue del código fuente.

Estructura del Proyecto
* Public/: Contiene los archivos estáticos de la interfaz web (HTML, estilos y scripts del cliente).
* node_modules/: Dependencias y librerías externas de Node.js instaladas para el funcionamiento del servidor.
* servidor.js: Archivo principal que configura el servidor Express, los puertos de escucha y la conexión con la base de datos MySQL.
* Datos.csv: Archivo con registros de datos para el soporte de la aplicación.
* package.json y package-lock.json: Archivos de configuración de Node.js y control de dependencias del proyecto.


Instrucciones de Instalación y Ejecución Local

Sigue estos pasos:

1. Obtener el proyecto: Descarga o clona los archivos del repositorio en tu computadora.

2. Abrir el directorio: Abre la carpeta del proyecto en Visual Studio Code.

3. Instalar dependencias: Ejecuta el siguiente comando en la terminal integrada para instalar los módulos necesarios:
   npm install

4. Configurar la Base de Datos: Importa y configura tu base de datos local en MySQL Workbench utilizando las credenciales definidas en el archivo del servidor (servidor.js).

5. Ejecutar el servidor: Inicia la aplicación ejecutando en la terminal:
   node servidor.js

6. Abre tu navegador web e ingresa a http://localhost:3000 para visualizar la aplicación en funcionamiento.
