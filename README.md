# 🏹 Ocarina Store

**Ocarina Store** es una tienda online inspirada en *The Legend of Zelda*, desarrollada con **React + Vite**, que utiliza la [FakeStore API](https://fakestoreapi.com/) para mostrar productos dinámicamente.  
Incluye un sistema de carrito funcional con **Context API**, persistencia en `localStorage` y un diseño temático verde y dorado que evoca la estética de Hyrule.

---

## ✨ Características principales

- 💾 **Carrito persistente**   
- 🧭 **Ruteo con React Router**.  
- ⚡ **Vite**
- 🎨 **Diseño Legend of Zelda**  
- 📱 **Responsive Design**

---

## 🧩 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| ⚛️ React | Librería principal para la interfaz |
| 🧱 Vite | Entorno de desarrollo rápido |
| 🧭 React Router DOM | Manejo de rutas y navegación |
| 💾 LocalStorage | Persistencia del carrito |
| 🧰 Context API | Estado global del carrito |
| 🎨 CSS Modules | Estilos modulares y personalizables |


---

## 🧠 Estructura del proyecto
src/
├─ components/
│ ├─ Header/
│ ├─ Footer/
│ ├─ ProductCard/
│
├─ contexts/
│ └─ CartContext/
│ ├─ CartProvider.jsx
│ └─ useCartContext.jsx
│
├─ pages/
│ ├─ Home/
│ ├─ Detail/
│ └─ Cart/
│
├─ App.jsx
├─ main.jsx
└─ App.css
