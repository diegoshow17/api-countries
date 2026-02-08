# 🌍 API Countries

## 📌 Descripción general

API Countries es una API REST desarrollada en Node.js que permite consultar información básica de los países del mundo.  
La API consume datos desde una fuente externa pública y los devuelve de forma estructurada y simplificada.

### ¿Qué hace la API?
Obtiene información general de los países como nombre, capital, región, población y bandera.

### ¿Qué información devuelve?
- Nombre del país
- Capital
- Región
- Población
- URL de la bandera

### ¿Para qué sirve?
Esta API puede ser utilizada en aplicaciones educativas, proyectos académicos o sistemas que requieran mostrar información general de países de manera sencilla.

---

## 🔗 API Externa Utilizada

- **Nombre:** REST Countries API  
- **URL base:** https://restcountries.com/v3.1  
- **Formato de respuesta:** JSON  
- **Autenticación:** No requerida  

---

## 🚀 Endpoints disponibles

### 🔹 Obtener todos los países

Obtiene un listado de países con información básica.

- **URL:** `/api/countries`
- **Método HTTP:** `GET`
- **Parámetros requeridos:** No requiere parámetros

#### 📥 Ejemplo de petición

```http
GET /api/countries
