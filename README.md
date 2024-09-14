# Gestión de Productos - NestJS

Esta es una aplicación de gestión de productos desarrollada con NestJS, TypeORM, y SQLite. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos. Este proyecto está pensado como una práctica para aprender a utilizar NestJS y TypeORM.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Uso de la API](#uso-de-la-api)
- [Ejemplos de Peticiones](#ejemplos-de-peticiones)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone <https://github.com/GerbertGarcia/gestion-productos.git>
   cd gestion-productos
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Configurar la base de datos: La aplicación está configurada para usar SQLite por defecto. No se requieren configuraciones adicionales.

## Ejecutar la Aplicación

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm run start
```

La aplicación se ejecutará en `http://localhost:3000`.

## Uso de la API

La aplicación expone los siguientes endpoints para manejar los productos:

- **GET /products:** Obtener todos los productos.
- **GET /products/:id:** Obtener un producto por ID.
- **POST /products:** Crear un nuevo producto.
- **PUT /products/:id:** Actualizar un producto existente.
- **DELETE /products/:id:** Eliminar un producto.

### Ejemplos de Peticiones

#### Crear un Producto (POST /products)

URL: `http://localhost:3000/products`

Cuerpo de la solicitud:
```json
{
  "nombre": "Producto_1",
  "descripcion": "Descripción generica",
  "precio": 100.50,
  "stock": 10
}
```

#### Obtener Todos los Productos (GET /products)

URL: `http://localhost:3000/products`

Respuesta esperada:
```json
[
  {
    "id": "uuid",
    "nombre": "Producto_1",
    "descripcion": "Descripción generica",
    "precio": 100.50,
    "stock": 10,
    "fechaCreacion": "2024-09-13T22:00:00.000Z"
  }
]
```

#### Obtener un Producto por ID (GET /products/:id)

URL: `http://localhost:3000/products/<id>`

Respuesta esperada:
```json
{
  "id": "uuid",
  "nombre": "Producto_1",
  "descripcion": "Descripción generica",
  "precio": 100.50,
  "stock": 10,
  "fechaCreacion": "2024-09-13T22:00:00.000Z"
}
```

#### Actualizar un Producto (PUT /products/:id)

URL: `http://localhost:3000/products/<id>`

Cuerpo de la solicitud:
```json
{
  "nombre": "Producto_Actualizado",
  "descripcion": "Descripción actualizada",
  "precio": 150.00,
  "stock": 5
}
```

#### Eliminar un Producto (DELETE /products/:id)

URL: `http://localhost:3000/products/<id>`

## Tecnologías Utilizadas

- **NestJS:** Framework para construir aplicaciones del lado del servidor.
- **TypeORM:** ORM para interactuar con la base de datos.
- **SQLite:** Base de datos ligera utilizada en desarrollo.
- **class-validator:** Para validar los datos de las solicitudes.
- **Postman:** Para probar los endpoints de la API.

## Notas Adicionales

- Asegúrate de que el servidor esté en ejecución antes de realizar las pruebas con Postman u otra herramienta de pruebas.
- La base de datos SQLite se genera automáticamente en la raíz del proyecto.
- En un entorno de producción, es recomendable usar una base de datos más robusta como PostgreSQL o MySQL.

## Autor

Este proyecto fue desarrollado por Gerbert García como parte de una práctica para aprender a utilizar NestJS y TypeORM.

## Licencia

Este proyecto se distribuye bajo la [MIT License](LICENSE).
