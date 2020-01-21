# Creando tu primera app con React y TypeScript

Ahora que hemos aprendido los conceptos básicos, es hora de hacer cosas reales. En este ejercicio, configuraremos una aplicación hecha en React desde cero, y luego implementaremos el código del juego [Connect Four](https://en.wikipedia.org/wiki/Connect_Four) sobre ella.

![Connect four](./assets/images/connect-four.gif)

Siguiendo este tutorial paso a paso, aprenderemos sobre React y TypeScript mientras programamos una aplicación de la vida real. _Estás preparada/o?_ 👾

### Configuracion Inicial

> **Nota:** Si quieres empezar con el código del juego directamente, puedes omitir esta sección y utilizar la aplicación ubicada en la carpeta **begin** de este Ejercicio. Recuerda ejecutar `npm install` antes de arrancar la app con `npm start`.

[Como hemos visto en el post anterior](../exercise-1/README.es.md), ni TypeScript ni JSX se ejecutan en los navegadores. Y dado que vamos a escribir código utilizando estos lenguajes, necesitamos transpilarlo antes de ejecutar nuestra aplicación. Para hacer esto, tenemos dos opciones:

1. Presentar, explicar, analizar y configurar varias herramientas (Webpack/Rollup, Babel/tsconfig, CSS Modules, etc.)
1. Utilizar "scaffolders" (también llamados integrated toolchains), que son aplicaciones preconfiguradas que no requieren ningún tipo de setup para ejecutarse, dejando que nos enfoquemos sólo en nuestro código.

En este post, vamos a instalar la aplicación de Facebook [Create React app](https://github.com/facebook/create-react-app), la herramienta de facto para construir una aplicación React. Y es muy fácil de instalar:

1. En tu terminal, corre el comando `npx create-react-app connect-four --typescript`. Este comando creará una aplicacion con React y Typescript dentro de la carpeta **connect-four**.

   Espera a que se complete el proceso. Deberías ver un mensaje similar a este:

   ![](./assets/images/create-ts-app.png)

   > **Nota:** Si `npx` no funciona, proba con `npm i -g create-react-app` seguido de `create-react-app connect-four --typescript`.

1. Navegue hacia la carpeta **connect-four** que se recién acabas de crear, y tomate un minuto o dos para analizar la estructura de carpetas. Estás viendo una aplicación totalmente funcional con lógica de negocios dentro de la carpeta **src**:

   ```
   connect-four
   ├── node_modules
   │   ├── ...
   ├── public
   │   ├── favicon.ico
   │   ├── index.html
   │   └── manifest.json
   │   └── ...
   ├── src
   │   ├── App.css
   │   ├── App.test.tsx
   │   ├── App.tsx
   │   ├── index.css
   │   ├── index.tsx
   │   ├── logo.svg
   │   └── react-app-env.d.ts
   │   └── serviceWorker.ts
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   ├── README.md
   ├── tsconfig.json
   └── ...
   ```

1. Ahora, ejecute `npm start`. Este comando ejecuta la aplicación en "modo de desarrollo", proporcionando una recarga automática al realizar cambios en el código (a.k.a. [Hot Module replacement](https://webpack.js.org/concepts/hot-module-replacement/)).
1. Navegue a http://localhost:3000 para ver la aplicación corriendo en el browser.

![](./assets/images/create-ts-app-browser.png)

Felicitaciones! Haz creado tu primera aplicación con React y TypeScript👏 💃 🕺 👏

1. Investiguemos un poco cómo está hecha. Abra la aplicación con VSCode (o el IDE de tu preferencia) y navegue al archivo **src/App.tsx**.

   ![](./assets/images/app-ts-begin-file.png)

   > **Nota:** _Pro tip!_ Puedes abrir VSCode usando la terminal ejecutando `code .` en la carpeta donde se encuentre el codigo. Del mismo modo, puedes hacer lo mismo para Atom con `atom .`. Y para Sublime, ejecuta `subl .`.

1. Tomémonos un par de minutos para analizar el código de este archivo:

   - En la parte superior, tiene declaraciones `import`. Esta es la forma en que JavaScript (ES6) importa módulos a un archivo. El valor importado (puede ser una función, una clase, un objeto, una constante, etc.) se almacena dentro de una variable para su uso posterior en el archivo. _Puedes obtener más información sobre los imports de ES6 [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)._
   - La _línea 5_ define un [React Function component](https://reactjs.org/docs/components-and-props.html#function-and-class-components) llamado `App`. Retorna código JSX que luego será dibujado/renderizado por el navegador (después de transpilar). _Los componentes React nos ayudan a dividir nuestro código en partes pequeñas, siguiendo el principio de única responsabilidad ([SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle))._
   - Entre las _líneas 6 y 23_ se encuentra el código JSX que representa lo que vimos antes renderizado en el navegador. Note que es casi idéntico a HTML, excepto la _linea 9_ que configura la prop src utilizando una referencia de variable de JavaScript (`<img src = {logo} .. />`)
   - Por último, ;a _linea 26_ exporta nuestra función `<App />` para que pueda ser importada desde otros archivos.

1. Con la aplicación ejecutándose localmente (si la detuviste, ejecuta `npm start` en la terminal), modifica el código eliminando la \_línea 17+ que contiene la etiqueta de cierre `</div>` y guarda tus cambios.

   Observa que VSCode inmediatamente muestra un error:

   ![](./assets/images/ts-ide-error.png)

   Y que el browser muestra también un error de compilación:

   ![](./assets/images/ts-browser-error.png)

1. Soluciona el error deshaciendo lo que haz hecho (eliminar la etiqueta de cierre `</div>`), guarda los cambios y espera a que el navegador actualice la aplicación.
1. Ahora, abra el archivo **src/index.tsx**. Este es el punto de inicio de la aplicación:

   ```js
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";

   ReactDOM.render(<App />, document.getElementById("root"));
   ```

   En estas pocas líneas, vemos que el código:

   - Importa el componente `<App />` , además de las librerías React y ReactDOM.
   - Ejecuta el método `ReactDOM.render()`, el cuál recibe como parámetros al componente `<App />` y una referencia al elemento del documento (HTML) con `"root"` como ID.
   - El archivo **public/index.html** el HTML que el browser rendereará cuando la aplicación inicie. En la _línea 31_, se encuentra el elemento `<div id="root">`, actualmente sin contenído. Aquí es donde tu aplicación será "montada", lo que significa que es aquí donde el código de tu aplicación, que se encuentra en los métodos `render()`, será injectado como HTML.

Este archivo tiene exactamente el mismo contenido que [los ejemplos básicos que hemos analizado en el post anterior](../exercise-1/README.es.md). **Este es el poder de React**: sin importar la complejidad de tu aplicación, el código utilizado para renderizarla es siempre el mismo.

#### Resumiendo

En este rápido tutorial paso-a-paso del setup inicial, hicimos lo siguiente:

1. Creamos una aplicación web completamente funcional con un solo comando (npm) en la Terminal.
1. Ejecutamos la aplicación web localmente y la mostramos en el navegador.
1. Analizamos el código _React + TypeScript_ de la aplicación, enfocándonos en el componente principal y el punto de inicio, junto a su archivo HTML asociado.

Por último, no te olvides que los browsers/navegadores **sólo entienden HTML, JS y CSS**, no entienden TS y JSX. Esta aplicación "scaffoldeada" tiene un proceso **build** que generará archivos JS y CSS dentro de la carpeta **dist**, los cualres serán referenciandos en el archivo **index.html** (también generado). Y estos archivos autogenerado serán analizados, leídos e interpretados por el browser/navegador.

### Agregando la lógica del juego en la aplicación

Ahora que entendemos las base fundacionales de nuestra aplicación React, es hora de agregar la lógica del juego. [Como explicamos en el post anterior](../exercise-1/README.es.md), las aplicaciones React dividen la lógica de negocios en diferentes componentes. Pero hay diferentes responsabilidades en una aplicación: la lógica que decide quién ganó (y si alguien lo hizo), la lógica que selecciona los elementos a dibujar (y cómo), la lógica que determina de qué jugador es el turno, etc. _¿Cómo podemos separar estas responsabilidades de manera consistente y repetible?_

Utilizaremos un patrón ampliamente conocido, [Presentational and Container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), para organizar nuestros componentes en una estructura simple, pero potente:

![Presentational and Container components](./assets/images/presentational-and-container-components.png)

Esta técnica propone encapsular toda la lógica de negocio y el estado en componentes padres (_Container_ o _Smart_) y usar a sus componentes hijos, usualmente las hojas, para renderizar la UI y manejar la interacción del usuario (_Presentational_ o _Dumb_).

Los componentes _Container_ envian los datos y las funciones a sus hijos a través de las **props**. Los componentes _Presentational_ utilizan esos datos para decidir qué y cómo dibujar. Y ejecutan las funciones cuándo el usuario interactúa con ellos, usualmente enviando información extra por parámetro.

> **Nota:** dado que la aplicación terminará enviándo la información "en cascada" de arriba hacia abajo, esta técnica es adecuada para aplicaciones de tamaño pequeño o mediano. Grandes aplicaciones compuestas de una jerarquía profundamente anidada requieren un enfoque diferente. Hablaremos sobre esto en el siguiente post.

Siguiendo esta técnica, podemos identificar las siguientes entidades en nuestro juego:

- Un componente **App**, encargado de almacenar el estado de la aplicación. Y para calcular quién es el ganador. Es el componente "padre"/"container"/"smart".
- Un componente **Board**, responsable de dibujar los elementos del juego. El **Board** (tablero) está compuesto de múltiples **Columns** (columnas) compuestas de diferentes **Tiles** (ranuras), las cuales a su vez pueden tener o no una **Chip** (ficha). Estos son los componentes _"children"/"presentational"/"dumb"_.
- Cuando se hace click en una **Column** (columna), se agrega una nueva **Chip** (ficha) en la última **Tile** (ranura) vacía de la parte inferior. Esto es parte de la lógica de negocios de la aplicación.

![Connect four components](./assets/images/connect-four-components.png)

> **Nota:** Por supuesto, los componentes que decidas usar puede variar, dependiendo de tu preferencia _¿Puedes pensar una manera diferente de organizar tu código?_

#### Creando el componente Tile

LAST --> TBC

1. Crea una nueva carpeta llamada **components** dentro de la carpeta **src**.
1. Dentro de esta carpeta, crea una carpeta llamada **Tile** y dentro de esta última agregue los siguientes archivos (por ahora vacíos):

   - Un archivo **Tile.module.css** para almacenar el código CSS
   - Un archivo **Tile.tsx** para la lógica de negocio en React.
   - y un archivo **types.ts** para definir los tipos de TypeScript de tu componente.

1. Abra el archivo **src/components/Tile/types.ts** y agregue el siguiente código. Este código define la interfaz (o contrato) de nuestro componente tipando sus props.

   ```ts
   export interface Props {
     id: string;
     chipType?: string;
     onClick: (id: string) => any;
   }
   ```

   Al tipar las props del componente **Tile**, estamos definiendo su interfaz, o contrato. Este archivo le informa al consumidor del componente que:

   - Tiene que proveer un `id`, a través de las **props** del componente.
   - Puede enviar un `chipType` al componente. Como definimos anteriormente, un **Tile** puede tener un **Chip** o no.
   - Tiene que proveer una función a través de la prop `onClick`, la cual será ejecutada cuando el usuario hace click en el componente **Tile**.

1. Luego, abra el archivo **src/components/Tile.tsx** y agregue el siguiente código:

   ```js
   import React from "react";
   import classNames from "classnames";
   import styles from "./Tile.module.css";
   import { Props } from "./types";

   export default class Tile extends React.PureComponent<Props> {
     render() {
       const { id, chipType, onClick = () => {} } = this.props;
       const chipCssClass = classNames(
         styles.chip,
         chipType === "red" ? styles.red : styles.yellow
       );

       return (
         <div className={styles.tile} onClick={() => onClick(id)}>
           {chipType && <div className={chipCssClass} />}
         </div>
       );
     }
   }
   ```

   Al analizar este código puedes notar que el componente **Tile** es un componente _presentational_, encargado de dibujar los tiles (ranuras) del tablero. A su vez, decide si una **Chip** (ficha) está presente al chequear el valor definido en la prop `chipType`, y seteando una clase de CSS dependiendo su valor. Finalmente, al ser clickeado, el componente ejecuta la función enviada a través de la prop `onClick`, enviando el `id` del **Tile** como parámetro.

   > **Nota:** ¿Has notado que el código vincula a la interfaz **Props** a la definición de `React.PureComponent`? Así es como se tipea una clase de React. El IDE que utilices entenderá esto y te dará información acerca de los tipos de cada una de las props del componente. Puedes probar esto pasando el mouse por encima de la línea que contiene `this.props`.

1. Por ultimo, abra **src/components/Tile.css** y agregue el siguiente codigo CSS:

   ```css
   .tile {
     width: 75px;
     height: 75px;
     border: solid 10px #3355ff;
     border-radius: 100%;
     background-color: white;
   }

   .chip {
     width: 75px;
     height: 75px;
     border-radius: 100%;
     background-color: gray;
   }

   .yellow {
     background-color: #ffff33;
   }

   .red {
     background-color: #ff010b;
   }
   ```

   > **Nota:** Create React app trata los archivos CSS con el formato `[nombre].module.css` de una manera distinta a un archivo CSS normal, al transpilarlos utilizando la libreria [CSS Modules](https://github.com/css-modules/css-modules). Uno de los principales beneficios es uno no tiene que preocuparse por la colisión de nombres en las clases de CSS, dado que cada archivo puede ser tratado como un módulo aislado. Esto es posible gracias que, al transpilar, esta librería reemplaza los nombres de las clases de CSS por un nombre "único" que utiliza el formato `[filename]_[classname]__[hash]`.
   >
   > Para obtener más información, hace click [aquí](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet).

#### Creando el componente Column

1. Ahora, navegue a la carpeta **components** y crea una nueva carpeta **Column**.
1. Dentro de esta carpeta, crea los siguientes archivos: un archivo **Column.module.css** para almacenar el código CSS, un archivo **Column.tsx** para la lógica de negocio en React y un archivo **types.ts** para tipar al componente usando Typescript.
1. Abra el archivo **src/components/Column/types.ts** y agregue el siguiente código, el cual define las props (contrato) del componente \*_Column _:

   ```js
   import { ChipsPositions } from "../App/types";

   export interface Props {
     column: number;
     rows: number;
     chipsPositions: ChipsPositions;
     onTileClick: (id: string) => any;
   }
   ```

   Este código le dice al consumidor del componente que:

   - Necesitamos proporcionar un número de `column`. Este valor actúa como el ID del elemento.
   - También necesitamos decirle al componente cuántas `rows` tendrá.
   - La prop `chipsPositions` es un objeto que conoce la posición de cada **Chip** (ficha). Veremos cómo se construye este objeto más adelante. Por ahora, sólo necesitas saber que este objeto puede decirnos si hay una **Chip** (ficha) dentro de un **Tile** (ranura) o no.
   - Por último, la función `onTileClick` se usa para informar al padre cuando el usuario hace click en un **Tile** (ranura) específico.

1. Abra **src/components/Column.tsx** y agregue el siguiente codigo presentacional:

   ```js
   import React from "react";
   import Tile from "../Tile/Tile";

   import styles from "./Column.module.css";
   import { Props } from "./types";

   export default class Column extends React.PureComponent<Props> {
     render() {
       const { column, rows, chipsPositions, onTileClick } = this.props;
       const tiles = [];

       for (let row = 0; row < rows; row++) {
         const tileId = `${row}:${column}`;
         const chipType = chipsPositions[tileId];
         tiles.push(
           <Tile
             key={tileId}
             id={tileId}
             chipType={chipType}
             onClick={onTileClick}
           />
         );
       }

       return <div className={styles.column}>{tiles}</div>;
     }
   }
   ```

   Este código (también presentational) renderea un elemento `<div>` el cual contiene tantos componentes **Tile** como indica el número de `rows` (filas), enviado via **props**. Cada **Tile** (ranura) recibirá una `chipType` y la función `onTileClick()`. Notar también que el valor único `tileId` es definido aquí al combinar los valores de `row` y `column`.

1. Abra **src/components/Column/Column.module.css** y agregue el siguiente código de CSS:

   ```css
   .column {
     display: flex;
     flex-direction: column;
     cursor: pointer;
   }
   ```

   _Ya estamos ahí!_ 🙌

#### Creando el componente Board

1. Del mismo modo, navegue hacia la carpeta **components** y crea una nueva carpeta **Board**.
1. Dentro de esta carpeta, crea los siguientes archivos: un archivo **Board.module.css** para almacenar el código CSS, un archivo **Board.tsx** para la lógica de negocio en React y un archivo **types.ts** para tipar al componente usando Typescript.

   > **Nota:** ¿Haz notado el patrón común utilizado al crear componentes?

1. Abra el archivo **src/components/Board/types.ts** y agregue el siguiente código que define las props (contrato) del componente **Board**:

   ```js
   import { ChipsPositions } from "../App/types";

   export interface Props {
     columns: number;
     rows: number;
     chipsPositions: ChipsPositions;
     onTileClick: (id: string) => any;
   }
   ```

   Este código le dice al consumidor del componente que:

   - Tiene que proporcionar el número de `columns` y `rows` que tendrá el **Board** (tablero).
   - Tiene que enviar el objeto `chipsPositions`. _Pero esta información es utilizada por el componente **Column**, no por el componente **Board**._
   - Tiene que proporcionar una función `onTileClick`, que será ejecutada por el componente **Tile** para notificar que fue clickeado por el usuario.

1. Abra el archivo **src/components/Board.tsx** y agregue el siguiente código de tipo _presentational_:

   ```js
   import React from "react";
   import Column from "../Column/Column";

   import styles from "./Board.module.css";
   import { Props } from "./types";

   export default class Board extends React.PureComponent<Props> {
     renderColumns() {
       const { columns, rows, chipsPositions, onTileClick } = this.props;

       const columnsComponents = [];

       for (let column = 0; column < columns; column++) {
         columnsComponents.push(
           <Column
             key={column}
             column={column}
             rows={rows}
             chipsPositions={chipsPositions}
             onTileClick={onTileClick}
           />
         );
       }

       return <>{columnsComponents}</>;
     }

     render() {
       return <div className={styles.board}>{this.renderColumns()}</div>;
     }
   }
   ```

   Este código es similar al del componente **Column**, pero en lugar de crear **Tile**s, enviándole la información que cada una requiere y luego mostramos el resultado. El método `this.renderColumns()` encapsula esta lógica.

   > **Nota:** _Notaste que también usamos React.Fragment?_ Probablemente no porque estamos usando la abreviado `<> </>`, la cual es un equivalente de `<React.Fragment></React.Fragment>`.

1. Por ultimo, abra el archivo **src/components/Board/Board.module.css** y pegue el siguiente codigo:

   ```css
   .board {
     display: flex;
     flex-direction: row;
     border: solid 5px #002bff;
     border-radius: 5px;
     background-color: #3355ff;
   }

   .columns {
     display: flex;
     flex-direction: row;
   }
   ```

#### Creando el componente App

_Ahora vamos a desarrollar la lógica principal de nuestro juego. Presta especial atención a esta sección._

1. Crea una carpeta llamada **App** dentro de la carpeta **src/components**.
1. Dentro de esta carpeta, crea el archivo **App.module.css**, el archivo **App.tsx** y el archivo **types.ts**.
1. Abra el archivo **src/components/App/types.ts** y pegue la siguiente información:

   ```js
   export interface ChipsPositions {
     [key: string]: Player;
   }

   type Player = "red" | "yellow" | "";

   export interface Props {
     columns: number;
     rows: number;
   }

   export interface State {
     chipsPositions: ChipsPositions;
     gameStatus: string;
     playerTurn: Player;
   }
   ```

   Aquí definimos varias cosas importantes:

   - La forma del objeto `ChipsPositions`: un diccionario que contiene en cada posición uno de estos valores de tipo `Player`: `"red "`, `"yellow"` o `""` (que representa un estado vacío).
   - Definimos la forma de los `Props` y `State` de la aplicación. El primero nos dice que debemos proporcionar la cantidad de `columns` y `rows` para que el componente **App** se inicialice. Mientras que el último nos dice toda la información que se almacenará en el componente.

1. Ahora, abra **src/components/App/App.tsx** y agregue lo siguiente:

   ```js
   import React from "react";
   import Board from "../Board/Board";

   import { Props, State, ChipsPositions } from "./types";
   import styles from "./App.module.css";

   export default class App extends React.PureComponent<Props, State> {
     state: State = {
       chipsPositions: {},
       playerTurn: "red",
       gameStatus: "It's red's turn"
     };

     calculateGameStatus = (
       playerTurn: string,
       chipsPositions: ChipsPositions
     ): string => {
       // TODO
     };

     handleTileClick = (tileId: string) => {
       // TODO
     };

     renderBoard() {
       const { columns, rows } = this.props;
       const { chipsPositions } = this.state;
       return (
         <Board
           columns={columns}
           rows={rows}
           chipsPositions={chipsPositions}
           onTileClick={this.handleTileClick}
         />
       );
     }

     renderStatusMessage() {
       const { gameStatus } = this.state;
       return <div className={styles.statusMessage}>{gameStatus}</div>;
     }

     render() {
       return (
         <div className={styles.app}>
           {this.renderBoard()}
           {this.renderStatusMessage()}
         </div>
       );
     }
   }
   ```

   Esta es la estructura básica del componente: lógica de tipo _presentational_ para dibujar/renderizar el **Board** y el mensaje **Status**, y un estado por defecto para el componente. El código es completamente funcional, pero la app aún no reaccionará cuando el usuario interactúe con el juego. _Vamos a codear esta lógica en las próximas líneas._

1. Para eso tenemos que implementar el metodo `handleTileClick()` para que el juego reaccione cuando un usuario cuando el compomnente **Tile** es clickeado:

   ```js
   handleTileClick = (tileId: string) => {
     const { chipsPositions, playerTurn } = this.state;

     // Get the last empty tile of the column
     const column = parseInt(tileId.split(":")[1]);
     let lastEmptyTileId = this.getLastEmptyTile(column);

     // If there is no empty tile in the column, do nothing
     if (!lastEmptyTileId) {
       return;
     }

     // Add chip to empty tile
     const newChipsPositions = {
       ...chipsPositions,
       [lastEmptyTileId]: playerTurn
     };

     // Change player turn
     const newPlayerTurn = playerTurn === "red" ? "yellow" : "red";

     // Calculate game status
     const gameStatus = this.calculateGameStatus(newPlayerTurn, newChipsPositions);

     // Save new state
     this.setState({ chipsPositions: newChipsPositions, playerTurn: newPlayerTurn, gameStatus });
   };

   getLastEmptyTile(column: number) {
     const { rows } = this.props;
     const { chipsPositions } = this.state;

     for (let row = rows - 1; row >= 0; row--) {
       const tileId = `${row}:${column}`;
       if (!chipsPositions[tileId]) {
         return tileId;
       }
     }
   }
   ```

   Tómese un par de minutos para entender lo que este código está haciendo:

   1. Primero, necesitamos obtener el último **Tile** vacío de la columna que fue clickeada. Y obtiene el número de columna parseando el `tileId`.
   1. Luego, agrega una ficha al **Tile** (ranura) dependiendo de qué jugador tiene el turno, conocido solo por el componente **App**. Y recalcula el estado del juego.
   1. Por último, almacena toda la información nueva en el estado del componente, volviendo a renderizar la aplicación completa si algo cambia. _React se encargará de decidir esto._

1. Finalmente, implemente el método `calculateGameStatus()` utilizando el siguiente código, el cual contiene la lógica para decidir quién es el ganador o quién juega a continuación:

   ```js
   calculateGameStatus = (
     playerTurn: string,
     chipsPositions: ChipsPositions
   ): string => {
     const { columns, rows } = this.props;

     // Check four in a row horizontally
     for (let row = 0; row < rows; row++) {
       let repetitionCountStatus = { playerChip: "", count: 0 };

       for (let column = 0; column < columns; column++) {
         const chip = chipsPositions[`${row}:${column}`];

         // If there is a chip in that position, and belongs to a player
         // count that chip for that player (either increase the count or start over)
         if (chip && chip === repetitionCountStatus.playerChip) {
           repetitionCountStatus.count++;
         } else {
           repetitionCountStatus = { playerChip: chip, count: 1 };
         }

         // If the count for a player is 4, that player won
         if (repetitionCountStatus.count === 4) {
           return `Player ${repetitionCountStatus.playerChip} won!`;
         }
       }
     }

     // Check four in a row vertically
     for (let column = 0; column < columns; column++) {
       let repetitionCountStatus = { playerChip: "", count: 0 };

       for (let row = 0; row < rows; row++) {
         const chip = chipsPositions[`${row}:${column}`];

         // If there is a chip in that position, and belongs to a player
         // count that chip for that player (either increase the count or start over)
         if (chip && chip === repetitionCountStatus.playerChip) {
           repetitionCountStatus.count++;
         } else {
           repetitionCountStatus = { playerChip: chip, count: 1 };
         }

         // If the count for a player is 4, that player won
         if (repetitionCountStatus.count === 4) {
           return `Player ${repetitionCountStatus.playerChip} won!`;
         }
       }
     }

     // TODO: Check four in a row diagonally

     return `It's ${playerTurn}'s turn`;
   };
   ```

   > **Nota:** Haz notado que este código no chequea que haya cuatro fichas del mismo valor consecutivas en diagonal? Se te ocurre cómo implementar esto? Si es así, envíame la solución [via Pull Request!](https://help.github.com/en/articles/creating-a-pull-request).

#### Inicializando la App

1. Abra el archivo **src/index.tsx** y reemplace su contenido por el siguiente:

   ```js
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./components/App";
   import "./index.css";

   // Initialize the app with 7 columns and 6 rows
   ReactDOM.render(
     <App columns={7} rows={6} />,
     document.getElementById("root")
   );
   ```

1. Si aún no lo ha hecho, inicie la aplicación ejecutando `npm start` en una terminal.
1. En la ventana del navegador recién abierta, abra la **Developer Console** y luego haga click en la pestaña **Components**. Verá aquí el árbol de jerarquía de componentes la aplicación React, compuesto por los componentes que recién ha creado:

   ![App hierarchy tree](./assets/images/app-hierarchy-tree.png)

1. Juegue un poco, agregue varias fichas en el tablero, y despues compruebe el valor de los diferentes **Tile**s del tablero. Note que las propiedades recibidas en los componentes cambiarán luego de interactuar con el juego.

   ![Connect four board in the Developer's console](./assets/images/connect-four-developer-tools.png)

   > **Nota:** Puedes cambiar una prop directamente modificando su valor en el panel derecho. Pruébelo usted mismo cambiando el tipo de chip de un **Tile** de `"red"` o `undefined` a `"yellow"`.

¡Felicidades! Has creado tu primer juego con React y TypeScript 💪💪💪

### Resumiendo

En este ejercicio, hemos aprendimos lo siguiente:

- Cómo crear una aplicación desde cero usando React y TypeScript.
- Cómo dividir la lógica de negocio de una aplicación en pequeños componentes.
- Cómo enviar información y notificar eventos de usuarios a través de props.
- Cómo usar las React Developer Tools para visualizar el árbol de componentes de su aplicación y su estado.

🎉🎉
