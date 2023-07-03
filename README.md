# Technical Test React Native

## Backend
[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mysql,typescript)](https://skillicons.dev)

  * Reconstruir módulos de Node: `npm install`

  * Para generar proyecto:
      Run command `npm run build`

  * Para levantar poyecto:
      Run command `npm start`

  ##### NOTA:
    * El `.env` ya se encuentra definido, hacer cambios si es necesario:

      Variables establecidas: 
          * EXPRESS
          PORT=8080

          * MySQL
          MYSQL_HOST=containers-us-west-81.railway.app
          MYSQL_PORT=6002
          MYSQL_USER=root
          MYSQL_PASSWORD=jA3ZDMqBuYa3JHa4RslF
          MYSQL_DATABASE=railway

## Frontend - React Native App
[![My Skills](https://skillicons.dev/icons?i=react,typescript)](https://skillicons.dev)

  * Reconstruir módulos de Node: `yarn`

  * Para levantar poyecto:
      Run command `yarn android`

  ##### NOTA:
    * El `.env` ya se encuentra definido, hacer cambios si es necesario:

      Variables establecidas: 
        * API
        VITE_REACT_API_URL="http://localhost:8080/api/v1"

## Frontend - Admin App
[![My Skills](https://skillicons.dev/icons?i=react,typescript)](https://skillicons.dev)
  
  * Esta app es para subir productos al backend

  ##### Enlace A Produccion
  https://react-admin-app-one.vercel.app/

    * Admin Account:
      Username: Admin101
      Password: admin101

    * ENV EN PROD
      VITE_REACT_API_URL="https://node-product-api-backend-production.up.railway.app/api/v1"

  ##### Para Correr En Local:

  * Reconstruir módulos de Node: `yarn`

  * Para levantar poyecto:
      Run command `yarn dev`

        * ENV EN DEV
          VITE_REACT_API_URL="http://localhost:8080/api/v1"

  ##### NOTA:
    * App que permite agregar datos al backend
