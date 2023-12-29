#Pasos para iniciar el proyecto colors
1. Crear una carpeta llamada colors
2. Crear archivo 'main.js'

## npm desde CLI
3. Iniciamos un proyecto con el comando 
    ```sh
npm init -y

4. Buscamos el package colors y los instalamos con el comando 
    sh
npm i colors

5. Dentro del archivo 'main.js' vamos a importar el paquete colors con la línea de código
```javascript
const colors =require("colors")
```

6. Implementar las funciones de colors (estilos para el texto de la terminal) en el main.js . Para ellos, hay que consultar la documentación oficial de colors en [http://npmjs.com]

7. Para ejecutar el package, utilizamos en comando
```sh
node archivo.js
```

8. Eliminar (desinstalar) módulos de npm
````sh
npm unistall colors