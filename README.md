# Github Users Challenge



Este repositorio contiene la solución para listar usuarios de Github, explorar sus detalles, marcarlos como favoritos y realizar búsquedas de manera eficiente utilizando la API de Github Users.

### Demo Mobile
![Mobile Video](https://raw.githubusercontent.com/flopezluksenberg/ghusersch/refs/heads/main/files/mobile.gif)


### Demo Desktop
![Desktop Video](https://raw.githubusercontent.com/flopezluksenberg/ghusersch/refs/heads/main/files/desktop.gif)



## 🛠️ Cómo ejecutar el proyecto

### 📋 Requisitos previos

- Tener instalado **Node.js** version **21** en adelante y **npm** version **10** en adelante. Recomiendo usar nvm para gestionar las versiones. 
- Opcional: Tener **Docker** y **Docker Compose** para el despliegue con contenedores.


### 🐳 Ejecución con Docker

1. Construye y levanta el contenedor:
   ```bash
   docker-compose up -d
   ```
   **Nota:** La primera ejecución puede tardar porque se construye la imagen Docker.
2. Accede a la aplicación en `http://localhost:3000`.

### 💻 Ejecución local con servidor de desarrollo

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Accede a la aplicación en tu navegador en `http://localhost:3000`.

### 💻 Ejecución local en modo productivo

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Buildea la app
   ```bash
   npm run build
   ```
3. Inicializa el servicio
   ```bash
   npm run start
   ```
4. Accede a la aplicación en tu navegador en `http://localhost:3000`.


### 🌐 Variables de entorno

- El archivo **`.env.local`** ya está configurado para desarrollo local con:
  ```env
  DOMAIN_URL=http://localhost:3000
  ```

---

## 🌟 Key Features

- **CSS Modules:** Usados para evitar colisiones de estilos y mantener el código organizado.
- **Responsive y mobile-first:** Diseñado para funcionar en dispositivos con un mínimo de 375px.
- **Inspiración en Frávega y Twitter**
- **`useFavorites`:** Maneja la lógica de agregar o quitar usuarios de favoritos.
- **`useDebounce`:** Es un patron comunmente utilizado en los autocompletes que hacen peticiones a servicios externos. Este lo que hace es reducir la cantidad de peticiones a la API mientras el usuario escribe en la barra de búsqueda.
- **`useUserList`:** Encapsula la lógica para listar usuarios o realizar búsquedas.
- **Lazy Loading con el componente personalizado ************`PlaceholderImage`************:** Evita parpadeos al cargar imágenes.
- **Skeleton para la home:** Mejora la experiencia de usuario mientras los datos se cargan.
- **Persistencia en Local Storage:** Los favoritos se guardan localmente.
- **404 personalizada:** Para rutas inexistentes.
- **500 personalizada:** Para errores internos.
- **Pantallas "Empty" y "Algo anda mal":** Mejoran la UX en caso de búsquedas sin resultados o errores.
- Las solicitudes a `https://api.github.com/` se proxean através de `<app domain>/api/...`. Esto permite evitar eventualmente problemas de CORS y centralizar las solicitudes en el backend. En estos momoentos al solo haber GETs no iban a haber problemas, pero al hacer esto vamos a cubrir otros métodos http
- El Dockerfile esta utilizando los stages builder y runner, lo que implica imagenes finales mas pequeñas y tiempos de building mas rapidos entre otros beneficios.


---

## 🌟 Puntos para mejorar
- **Unit Tests:** Haciendo uso de `@testing-library/react` se podria implementar unit testing sobre componentes visuales y hook. 
- **UI Testing:** Si quisieramos mejorar el flujo de trabajo, podriamos incluir testing de ui usando herramientas como selenium, cypress o playwright. 

---
