SENATI Blog API
API REST para gestión de blog personal (autores y artículos).

🚀 Tecnologías
Node.js + Express: Entorno de ejecución y framework web.

MongoDB + Mongoose: Base de datos NoSQL y modelado de datos.

REST API: Arquitectura de comunicación.

⚙️ Instalación
Clonar o descargar el proyecto.

Instalar dependencias:

Bash
npm install
Configurar Variables de entorno (.env):
Crea un archivo llamado .env en la raíz con el siguiente contenido:

Plaintext
    PORT=3000
    MONGODB_URI=mongodb://127.0.0.1:27017/senati_blog
    ```

## 📍 Endpoints

### Autores (`/api/authors`)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **GET** | `/api/authors` | Listar todos los autores |
| **GET** | `/api/authors/:id` | Obtener detalles de un autor |
| **POST** | `/api/authors` | Registrar un nuevo autor |
| **PUT** | `/api/authors/:id` | Actualizar datos de un autor |
| **DELETE** | `/api/authors/:id` | Eliminar un autor |

### Artículos (`/api/posts`)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **GET** | `/api/posts` | Listar todos los artículos (incluye autor) |
| **GET** | `/api/posts/:id` | Obtener un artículo por ID |
| **GET** | `/api/posts/author/:authorId` | Listar artículos de un autor específico |
| **POST** | `/api/posts` | Crear un nuevo artículo |
| **PUT** | `/api/posts/:id` | Actualizar contenido de un artículo |
| **DELETE** | `/api/posts/:id` | Eliminar un artículo |

---

## 🧪 Ejemplos de peticiones (CURL)

### Crear autor
```bash
curl -X POST http://localhost:3000/api/authors \
-H "Content-Type: application/json" \
-d '{"name":"Gabriel García Márquez","email":"gabo@email.com","bio":"Escritor colombiano"}'
Crear artículo
Bash
curl -X POST http://localhost:3000/api/posts \
-H "Content-Type: application/json" \
-d '{"title":"Cien años de soledad","content":"Análisis extenso de la obra...","author":"ID_DEL_AUTOR_AQUÍ","tags":["literatura","realismo"]}'
🛠️ Cómo ejecutar el proyecto
Entrar a la carpeta del proyecto:

Bash
    cd senati-blog-api
    ```
2.  **Asegurar que MongoDB está corriendo:**
    *   **Windows:** `net start MongoDB`
    *   **Linux/Mac:** `sudo systemctl start mongod`
3.  **Ejecutar en modo desarrollo:**
    
```bash
    npm run dev
    ```
4.  **Verificación:**
    Deberías ver en consola:
    *   `✅ Conectado a MongoDB`
    *   `🚀 Servidor corriendo en http://localhost:3000`

---
> **Institución:** ESCUELA DE TECNOLOGÍA DE INFORMACIÓN - SENATI  
> **Curso:** SEMINARIO DE COMPLEMENTACIÓN II  
> **Instructor:** Mg. Ing. Carlos Sánchez Villarreal  
> **Estudiante:** Desarrollo Fullstack