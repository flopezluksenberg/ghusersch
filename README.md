# Github Users Challenge



Este repositorio contiene la solución para listar usuarios de Github, explorar sus detalles, marcarlos como favoritos y realizar búsquedas de manera eficiente utilizando la API de Github Users.

### Demo Mobile
![Mobile Video](https://raw.githubusercontent.com/flopezluksenbrg/ghusersch/main/files/desktop.gif)


### Demo Desktop
![Desktop Video](https://raw.githubusercontent.com/flopezluksenbrg/ghusersch/main/files/mobile.gif)



## 🛠️ Cómo ejecutar el proyecto

### 📋 Requisitos previos

- Tener instalado **Node.js** y **npm**.
- Opcional: Tener **Docker** y **Docker Compose** para el despliegue con contenedores.

### 💻 Ejecución en modo local

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Accede a la aplicación en tu navegador en `http://localhost:3000`.

### 🐳 Ejecución con Docker

1. Construye y levanta el contenedor:
   ```bash
   docker-compose up -d
   ```
   **Nota:** La primera ejecución puede tardar porque se construye la imagen Docker.
2. Accede a la aplicación en `http://localhost:3000`.

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


---

