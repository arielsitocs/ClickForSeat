# 🎟️ Click for Seat

> Un sistema moderno de reserva de asientos en tiempo real, construido para ofrecer rendimiento y una experiencia de usuario fluida.

![Estado del Proyecto](https://img.shields.io/badge/Estado-Activo-success?style=for-the-badge)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)

## 🚀 Tecnologías

Este proyecto utiliza un stack moderno y robusto para asegurar escalabilidad, seguridad de tipos y una gran interfaz de usuario.

### **Frontend**
![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### **Backend**
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Koyeb](https://img.shields.io/badge/Koyeb-121212?style=for-the-badge&logo=koyeb&logoColor=white)

### **Base de Datos y ORM**
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

---

## ✨ Características

- **Selección Interactiva de Asientos**: Interfaz visual para seleccionar asientos en tiempo real.
- **Disponibilidad en Tiempo Real**: Actualizaciones de estado para evitar reservas duplicadas.
- **Diseño Responsivo**: Optimizado tanto para usuarios de Escritorio como Móviles.
- **Backend Seguro**: API robusta construida con Express y validada con Prisma.
- **Notificaciones**: Integración de notificaciones tipo toast (`sonner`) para feedback al usuario.

---

## 🛠️ Comenzando

Sigue estos pasos para obtener una copia local y ponerla en marcha.

### Requisitos Previos

- Node.js (v20 o superior)
- npm, yarn, o pnpm

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/arielsitocs/ClickForSeat.git
   cd ClickForSeat
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configuración del Entorno**
   Crea un archivo `.env` en el directorio raíz y añade tus variables de base de datos:
   ```env
   DATABASE_URL="postgresql://user:password@host:port/dbname?schema=public"
   # Añade cualquier otra clave necesaria aquí
   ```

4. **Ejecutar el Servidor de Desarrollo**
   Inicia tanto el frontend (Next.js) como el servidor backend (Express):

   ```bash
   # Ejecutar Frontend
   npm run dev

   # Ejecutar Servidor Backend (en una terminal separada)
   npm run server
   ```

   Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

---

## 📦 Despliegue

Este proyecto está optimizado para su despliegue en plataformas modernas en la nube:

- **Frontend**: Desplegado en [Vercel](https://vercel.com/) para rendimiento en red edge.
- **Backend**: Alojado en [Koyeb](https://koyeb.com/) para servicios serverless y microservicios escalables.
- **Base de Datos**: Gestionada por [Supabase](https://supabase.com/) para un alojamiento fiable de PostgreSQL.

---