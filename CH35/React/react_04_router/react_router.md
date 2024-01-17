# React Router
## Instalación
Ejecutar el comando npm para instalar React Router 
```sh
npm install react-router-dm
```
### Implementación
1. Importar React Router en 'main.jsx' `main.jsx`para que se encuentre disponible en cualquier parte d la aplicación.
Para ello, importamos el componente `import {BrowserRouter} from 'react-router-dom'`

2. Modificar el componente `<App />` y envolverlo con los componentes`<BrowserRouter></BrowserRouter>` quedando de la siguiente manera:
```javascript
import {BrowserRouter} from 'react-router-dom'
<BrowserRouter>
    <App />
</BrowserRouter>
```

3. Crear componentes `Inicio.jsx`, `Conctacto.jsx,` `SobreNosotros.jsx`

4. Necesitamos importar las funcionalidades que emplearemos `Route` y `Routes` dentro del archivo `App.jsx`.

5. Modificamos `App.jsx` 

6. Para evitar etiquetas de anclaje <a></a>, vamos a ocupar una funcionalidad de react router llamada `{link}`
