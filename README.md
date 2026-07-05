📚 Sistema de Beneficiarios — Bogotá D.C.
Aplicación web full stack desarrollada con Next.js 16 y MySQL, que permite gestionar información social y geográfica de beneficiarios a través de una interfaz organizada por operaciones CRUD.

📄 Descripción :
Este sistema centraliza la administración de datos de beneficiarios del programa, incluyendo su localidad, institución de educación superior (IES) vinculada, sexo, rango de edad, condición de víctima del conflicto y condición de discapacidad. Está diseñado para consulta, actualización y eliminación de información desde una interfaz web sencilla y navegable, conectada a una base de datos normalizada en 3FN con 49.095 registros alojada en Aiven Cloud.

📁 Estructura del Proyecto
Carpeta / Archivo
Descripción
app/page.tsx
Página de inicio con menú principal (tarjetas de navegación).
app/layout.tsx
Layout global de la aplicación.
app/[modulo]/page.js
Vista de cada módulo (localidades, beneficiarios, instituciones).
app/api/[módulo]/route.js
Endpoints REST por módulo (GET, POST).
app/api/[modulo]/[id]/route.js
Endpoints REST por registro (PUT, DELETE).
app/api/test/route.js
Endpoint de prueba de conexión a la base de datos en Aiven.
models/
Modelos de acceso a datos; contiene las consultas MySQL por entidad.
db/connection.js
Pool de conexiones a la base de datos MySQL (vía DATABASE_URL).
lib/db.js
Conexión alterna a MySQL usada por el endpoint de prueba.
public/
Archivos estáticos del proyecto.

📦 Módulos Disponibles

Los siguientes módulos cuentan con vistas y endpoints API:

localidades
beneficiarios
instituciones

📁 Estructura General
proyecto/

├── app/

│   ├── page.tsx

│   ├── layout.tsx

│   ├── globals.css

│   ├── localidades/

│   │   ├── page.js

│   │   └── styles.module.css

│   ├── beneficiarios/

│   │   ├── page.js

│   │   └── styles.module.css

│   ├── instituciones/

│   │   ├── page.js

│   │   └── styles.module.css

│   └── api/

│       ├── localidades/

│       │   ├── route.js

│       │   └── [id]/route.js

│       ├── beneficiarios/

│       │   ├── route.js

│       │   └── [id]/route.js

│       ├── instituciones/

│       │   ├── route.js

│       │   └── [id]/route.js

│       └── test/

│           └── route.js

├── models/

│   ├── localidadModel.js

│   ├── beneficiarioModel.js

│   └── institucionModel.js

├── db/

│   └── connection.js

├── lib/

│   └── db.js

├── public/

└── README.md

El sistema está organizado en tres tipos de operaciones:

🔵 Consulta (GET)

Localidades — Listado de las 22 localidades de Bogotá Beneficiarios — Listado de los primeros 100 de 49.095 beneficiarios registrados, con su localidad e institución asociadas Instituciones — Listado de las 59 instituciones de educación superior (IES) vinculadas al sistema

🟠 Actualización (Update)

Beneficiarios — Modificación de sexo, edad, víctima de conflicto y discapacidad Localidades — Actualización del nombre de una localidad Instituciones — Actualización del nombre de una institución IES

🟢 Inserción (Create)

Localidades — Registro de nuevas localidades Instituciones — Registro de nuevas instituciones IES

🔴 Eliminación (DELETE)

Beneficiarios — Eliminación de un registro de beneficiario Localidades — Eliminación de una localidad Instituciones — Eliminación de una institución IES

⚙️ Configuración y ejecución
Clonar el repositorio e instalar dependencias:

git clone https://github.com/YessikaJara/PROYECTO-FRONT-BENEFICIARIOS-VERSION-FINAL.git

cd PROYECTO-FRONT-BENEFICIARIOS-VERSIÓN-FINAL

npm install

Crear un archivo .env.local en la raíz con las credenciales de la base de datos:

DATABASE_URL="mysql://usuario:password@host:puerto/nombre_bd?ssl-mode=REQUIRED"

DB_HOST=host-de-aiven

DB_PORT=puerto

DB_USER=usuario

DB_PASSWORD=password

DB_NAME=nombre_bd

Levantar el entorno de desarrollo:

npm run dev

Abrir http://localhost:3000 y navegar entre los módulos de Localidades, Instituciones y Beneficiarios.

<img width="1364" height="672" alt="image" src="https://github.com/user-attachments/assets/be22dab2-00d9-46ee-b248-689023285a49" />

<img width="1353" height="679" alt="image" src="https://github.com/user-attachments/assets/5137f572-2602-49b6-b160-97ab9a081853" />

<img width="1350" height="680" alt="image" src="https://github.com/user-attachments/assets/8c46153d-12ca-44a9-8cc8-8d71198ca550" />

<img width="1349" height="682" alt="image" src="https://github.com/user-attachments/assets/0eca85fc-9116-4d22-885a-2dd580d855f5" />

<img width="1352" height="680" alt="image" src="https://github.com/user-attachments/assets/091c1d7a-dda2-41e6-800e-7d471008d5a4" />

<img width="1352" height="680" alt="image" src="https://github.com/user-attachments/assets/a4328b76-b03e-4734-9385-de55130d9e77" />

<img width="1348" height="677" alt="image" src="https://github.com/user-attachments/assets/f2a1398d-8627-42a8-9d4e-55905e1dff77" />

<img width="1351" height="683" alt="image" src="https://github.com/user-attachments/assets/a3ca2ee0-65f7-47d0-8e78-679d8674a863" />

<img width="1348" height="680" alt="image" src="https://github.com/user-attachments/assets/a418ccbe-0c6d-4a45-a405-b998095a38e1" />

<img width="1353" height="681" alt="image" src="https://github.com/user-attachments/assets/c02cc2db-3d75-4f48-b3da-41527c90eb4f" />

<img width="1352" height="676" alt="image" src="https://github.com/user-attachments/assets/72559403-21ae-408b-a778-3bb63c1db7de" />

<img width="1353" height="683" alt="image" src="https://github.com/user-attachments/assets/e3d470b3-28cb-40c8-aad8-28fd95a8df58" />




