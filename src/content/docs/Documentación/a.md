---
title: Arquitectura del Sistema
description: Guía técnica detallada para desarrolladores trabajando en el Sistema Unificado de Ventas de Cinemex
---

El Sistema Unificado de Ventas de Cinemex está construido utilizando una arquitectura de microservicios.

### Componentes Principales

1. **Frontend**

   - Interfaz de usuario para clientes y empleados
   - Comunicación con el backend a través de API REST

2. **Backend (Spring Boot)**

   - API REST para procesar solicitudes del frontend
   - Microservicios:
     - Servicio de Ventas
     - Servicio de Inventario
     - Servicio de Autenticación
     - Servicio de Reportes

3. **Base de Datos**
   - Almacenamiento de datos de películas, ventas, inventario, usuarios, etc.

## Configuración del Entorno de Desarrollo

### Requisitos Previos

- Java JDK 11 o superior
- Node.js 14 o superior
- Maven 3.6 o superior
- IDE de tu elección (recomendamos IntelliJ IDEA o Eclipse para Java, VS Code para React)
- Docker (para contenerización)

### Pasos de Configuración

1. Clona el repositorio:

   ```
   git clone https://github.com/cinemex/unified-sales-system.git
   ```

2. Configura el backend:

   ```
   cd unified-sales-system/backend
   mvn install
   ```

3. Configura el frontend:

   ```
   cd ../frontend
   npm install
   ```

4. Configura la base de datos local:
   - Instala PostgreSQL
   - Crea una base de datos llamada `cinemex_sales`
   - Actualiza las credenciales en `application.properties`

## Flujo de Trabajo de Desarrollo

1. Crea una nueva rama para cada feature o bugfix.
2. Desarrolla y prueba localmente.
3. Ejecuta las pruebas unitarias y de integración.
4. Crea un Pull Request para revisión.
5. Después de la aprobación, fusiona con la rama principal.
