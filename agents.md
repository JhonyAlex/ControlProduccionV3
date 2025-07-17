# agents.md

## Proyecto: Control de Producción V3

### **Stack Tecnológico**

- Frontend: React 18
- Base: [Material Dashboard React](https://github.com/creativetimofficial/material-dashboard-react)

  - Versión: 2.2.0
  - Librerías:

    - `@mui/material@5.12.3`
    - `@mui/icons-material@5.11.16`

- Kanban: `@lourenci/react-kanban`
- Drag Scroll: componente custom propio
- CSS Customizado:

  - custom-scrollbar.css
  - custom-kanban.css

- Backend (por ahora): Firebase
- Estado del proyecto: **EN PROGRESO**

⚠️ **Instrucción para futuras IAs u operadores:**

> **Siempre que avances en este proyecto, actualiza este archivo `agents.md` con:**
>
> - Nuevas decisiones técnicas
> - Cambios de arquitectura
> - Nuevas dependencias instaladas
> - Pasos implementados o pendientes
> - Problemas encontrados o solucionados
> - Cualquier detalle relevante para continuar el desarrollo

Esto es clave para garantizar continuidad y coherencia en el trabajo, tanto para humanos como para IAs.

---

## **Rutas implementadas**

### /kanban

✅ Implementado componente Kanban integrado al layout de Material Dashboard.

- Usa `react-kanban`
- Responsive:

  - Se adapta al ancho visible del dashboard
  - Scroll horizontal si hay muchas columnas

- Drag scroll implementado:

  - Wrapper custom `DragScrollWrapper`
  - Evita conflictos con drag & drop interno del Kanban

---

## **Componente DragScrollWrapper**

Archivo: `src/components/DragScrollWrapper.jsx`

- Permite scroll horizontal arrastrando con el mouse
- Excluye drag en:

  - `.react-kanban-column-header`
  - `.react-kanban-card`

- Soluciona error:

  ```
  Element ref was specified as a string (container) but no owner was set.
  ```

- Incluye `PropTypes`

---

## **Custom CSS implementado**

### custom-scrollbar.css

- Ajusta grosor y colores de la scrollbar horizontal.

### custom-kanban.css

- Integra el diseño de Kanban con Material Dashboard React:

  - Columnas:

    - fondo gris claro
    - color de título primario (#5e72e4)

  - Tarjetas:

    - fondo blanco
    - bordes suaves
    - tipografía Roboto
    - hover effect

---

## **Warnings conocidos**

- `stylis-plugin-rtl`:

  ```
  Failed to parse source map from stylis-plugin-rtl/src/stylis-rtl.ts
  ```

  - No bloquea el build
  - Puede ignorarse

---

## **Pendiente**

- Integrar Firebase:

  - Auth
  - Firestore → reemplazar datos mock del Kanban

- Reportes:

  - Charts (Chart.js o Recharts)
  - Exportación PDF/Excel

- Roles y permisos
- Pruebas unitarias

---

## **Notas de implementación**

- Para el Kanban:

  - No meterlo en `Card` → usar `DashboardLayout` y `MDBox`

- Drag scroll:

  - Implementado manualmente, sin librerías externas

- Prettier:

  - Ejecutar:

    ```
    npx prettier --write .
    ```

    si hay errores de formato

---

## **Cómo continuar**

### Arrancar el proyecto

```bash
npm install
npm start
```

### Archivos clave

- `/src/views/KanbanBoard.jsx`
- `/src/components/DragScrollWrapper.jsx`
- `/src/assets/css/custom-kanban.css`
- `/src/assets/css/custom-scrollbar.css`

---

✅ **Instrucción final:**

> **Cualquier IA o desarrollador que retome este proyecto debe leer y actualizar `agents.md` antes y después de trabajar.** ¡Es la fuente de verdad del progreso estructural!

## 2025-07-17 Integración de Tailwind y shadcn/ui

- Se añadieron las dependencias `tailwindcss`, `postcss`, `autoprefixer` y utilidades de `shadcn/ui` (`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `tailwindcss-animate`).
- Se inicializó la configuración de Tailwind (`tailwind.config.js` y `postcss.config.js`).
- Se creó `src/index.css` con las directivas y variables generadas por shadcn/ui.
- Se agregaron utilidades en `src/lib/utils.js` y un nuevo hook `src/hooks/use-mobile.js`.
- Se instaló el componente `sidebar` de shadcn/ui en `src/components/ui`.
- Se actualizó `src/index.js` para importar `index.css`.
- Ejecutar `npm install` después de clonar el repositorio para instalar las nuevas dependencias.
