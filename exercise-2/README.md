# Creating your first app with React and TypeScript

Now that we've covered the basics, It's time to make things real. In this exercise, we will set up an application from scratch, and then we will write some code to implement a game, [Connect Four](https://en.wikipedia.org/wiki/Connect_Four), by following a step-by-step walkthrough that will also help us to learn while we code. For this, we will create a real-life application.

![Connect four](./assets/images/connect-four.gif)

Are you ready? 👾

### Initial setup

> **Note:** You can skip the steps 1-5 and use the application located in the **begin** folder of this Exercise. Remember to use `npm install` before running it.

We've seen before that since both TypeScript and JSX don't run in browsers, we need to transpile the code that we'll write in our application. To achieve this, we'll have to present, explain, and set up several tools (Webpack/Rollup, Babel/tsconfig, CSS Modules, etc.). Or we can take advantage of scaffolders, which are baked apps (also named _integrated toolchains_) that are already preconfigured and don’t require any configuration to get started, letting us to **only** focus on our code.

In these steps, we are going to install Facebook's [Create React app](https://github.com/facebook/create-react-app), the de-facto tool to build React application.

1. In your terminal, run `npx create-react-app connect-four --typescript`. This command will create a TypeScript application inside the folder **connect-four**.

   > **Note:** If `npx` doesn't work you can use `npm i -g create-react-app` and then `create-react-app connect-four --typescript`.

1. Wait for the process to complete. You should see a message similar to this:

   ![](./assets/images/create-ts-app.png)

1. Browse to the **connect-four** folder you've just created and take a minute or two to analyze the folder structure. You are looking at a fully-functional application with the business logic inside the **src** folder:

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

1. Now, run `npm start`. This command runs the app in development mode, providing an automatic reload if you make changes to the code (a.k.a. [Hot Module replacement](https://webpack.js.org/concepts/hot-module-replacement/)).
1. Open http://localhost:3000 to view the application in the browser.

   ![](./assets/images/create-ts-app-browser.png)

   💃 🕺 👏 Congratulations! 👏 🕺 💃 <br/>
   You've created your first application with React and TypeScript

1. Let's take it for a spin. Open the app with VSCode or the IDE of your preference and navigate to the **src/App.tsx** folder.

   > **Note:** _Pro tip!_ You can open VSCode pointing to the folder your terminal is by running `code .`. Similarly, you could do the same for Atom with `atom .`. And for Sublime, you can run `subl .`.

1. Take a couple of minutes to analyze the code in this file:

   - At the top, you have some `import` statements. This is the way JavaScript (ES6) import modules to your code. The value imported is stored inside of a variable for later use. You can learn more about ES6 imports [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
   - _Line 5_ defines a React Function component named `App`. It returns JSX code that is rendered by the browser (after the transpilation). Remember that React components help us to split our code into small pieces, following the [SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle).
   - Between _lines 6 and 23_ there is JSX code that renders what we saw before in the browser. Notice it is almost identical to HTML, except _line 9_ that sets up the _src_ prop using a JavaScript variable reference (`<img src={logo} .. />`)
   - Last, _line 26_ exports our `<App />` function to be available for use elsewhere.

1. With the app running locally (if you have stopped it, run `npm start` in your terminal), modify the code by removing _line 17_ and save your changes. Note that:

   - The IDE displays an error:

     ![](./assets/images/ts-ide-error.png)

   - The browser also displays the compilation error:

     ![](./assets/images/ts-browser-error.png)

1. Fix the error by undoing what you did (we removed the `</div>` closing tag), save your changes and wait for the browser to refresh your app.
1. Now, open the **src/index.tsx** file. This is the main entry point of the application. The two most important things you need to learn now are:

   ```js
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";

   ReactDOM.render(<App />, document.getElementById("root"));
   ```

   - When the app starts, we mount the `<App />` component in the HTML element with ID `root`. This means that the first component to be rendered in the browser is `<App />`.
   - The `ReactDOM.render()` method will render the `<App />` component in the browser, inside the "root" `<div>` element, like in the initial examples. _This is the magic of React._ It doesn't matter if the app you are going to build is basic or complex, the code to render it is the same.

1. Last, open the **public/index.html** folder. This file has the HTML code that the browser renders. Notice that _line 31_ has an empty `<div id="root"></div>` element. It is where your app will be "mounted", meaning that your application's code will be injected into this HTML element.

#### Wrapping up

In this quick walkthrough, we did the following:

1. We created a fully-functional web app with a single (npm) command in the Terminal.
1. We executed the web application locally and displayed it in the browser.
1. We analyzed the _React + TypeScript_ code of the app, both the main component and the main entry code. And then, we reviewed the main HTML code.

Remember that **browsers only understand HTML, JS and CSS**. This app has a **build** process that will generate JS and CSS files inside of a _dist_ folder. These files will be referenced in an (also generated) **index.html** file. And this file will be parsed, read, and interpreted by the browser.

### How to add new components

Now that we understand the foundations of our app, it's time to add the game logic. As we explained in the [Exercise 1](../exercise/1), React applications split the business logic into different components. But there are different responsibilities in an application. We'll use a widely-known pattern, [Presentational and Container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), to organize our components in a simple, but yet powerful structure:

![React Data Flow](./assets/images/react-data-flow.png)

This technique proposes to encapsulate all the business logic and state in parent components (_Container_, or _Smart_) and use their child components (_Presentational_, or _Dumb_) to organize the code in charge of the visuals. You use the **props** to send information to the children, in charge of rendering the app, and to connect user interaction with parent's functions.

> **Note:** since your app's will end up cascading the information from top to bottom, this approach is best suited for small/middle-sized apps. Large applications composed of a deeply nested hierarchy require different treatments that we will see in the next Exercise.

By following this technique, we can identify the following entities:

- An **App** component, in charge of storing the state of the application. And to calculate who is the winner. It is the "parent"/"container"/"smart" component.
- A **Board** component, responsible for drawing the elements of the game, the "child"/"presentational"/"dumb" components.
- The board is composed of multiple **Columns** composed of different **Tiles** that might or might not have a chip. When a column is clicked, a new chip is added into an empty tile at the bottom. This is part of the business logic of the app.

![Connect four components](./assets/images/connect-four-components.png)

> **Note:** Of course, this structure can vary depending on your preference. _Can you think of a different way of organizing your code?_.

#### Creating a Tile component

1. Create a new folder named **components** inside the **src** folder.
1. Inside this folder, create a file named **index.ts**. We will use it to expose the components we want to make publicly available outside of this folder.
1. Create a folder named **Tile** and inside the following files: a **Tile.module.css** file to store the CSS code, a **Tile.tsx** file for the React's component logic and a **types.ts** file for the TypeScript types of the component.
1. Open the **src/components/Tile/types.ts** file and paste the following code. This code defines the interface (or contract) of our component by typing its props.

   ```ts
   export interface Props {
     id: string;
     chipType?: string;
     onClick: (id: string) => any;
   }
   ```

   With this code, we are telling the component consumer that:

   1. They have to provide an `id` through the component's props.
   1. They may send a `chipType` to the component. As we mentioned above, tiles can have a chip or be empty.
   1. They have to attach a function to the `onClick` prop, to trigger code when you click a **Tile**.

1. Then, open the **src/components/Tile.tsx** file and paste the following code:

   ```js
   import React from "react";
   import classNames from "classnames";
   import styles from "./Tile.module.css";
   import { Props } from "./types";

   export default class Tile extends React.PureComponent<Props> {
     render() {
       const { id, chipType, onClick = () => {} } = this.props;
       const chipCssClass = classNames(styles.chip, chipType === "red" ? styles.red : styles.yellow);

       return (
         <div className={styles.tile} onClick={() => onClick(id)}>
           {chipType && <div className={chipCssClass} />}
         </div>
       );
     }
   }
   ```

   The **Tile** component is a _dumb_ component in charge of drawing tiles in your board, that may or may not have a chip inside. We decide if a chip is present by checking the value of the `chipType` prop. And we color the chip with CSS. Note that, when clicked, we trigger the `onClick` function (received via props) with the **Tile**'s `id` as parameter.

   > **Note:** Have you noticed that we attached the **Props** interface to the `React.PureComponent` definition? This is how you type React class. An IDE will understand this and will tell you the shape of the components properties if you hover `this.props`. Give it a try!

1. Last, open the **src/components/Tile.module.css** file and paste this CSS code:

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

   > **Note:** Create React app treats CSS files with the `[name].module.css` differently from a regular CSS file, by transpiling it using the [CSS Modules](https://github.com/css-modules/css-modules) library. One of the main benefits of it is that it lets you use the same CSS class name in different files, without worrying about naming clashes, by automatically replacing your CSS class names with a "unique" class name of the format [filename]\_[classname]\_\_[hash].
   >
   > For more information about this, click [here](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet).

#### Creating a Column component

1. Navigate to the **components** folder and create a new folder inside named **Column**.
1. Inside this folder, create the following files: a **Column.module.css** file to store the CSS code, a **Column.tsx** file for the React's component logic and a **types.ts** file for the TypeScript types of the component.
1. Open the **src/components/Column/types.ts** file and paste the following code that defines the props (contract) of the _Column_ component:

   ```js
   import { ChipsPositions } from "../App/types";

   export interface Props {
     column: number;
     rows: number;
     chipsPositions: ChipsPositions;
     onTileClick: (id: string) => any;
   }
   ```

   With this code, we are defining that:

   - We need to provide A `column` number. This value acts as the ID of the element.
   - We also need to tell the component how many `rows` it will have.
   - The `chipsPositions` prop is an object that knows the position of each chip. We will see how this object is built later. For now, you only need to know that it can tell us if there is a chip inside of a **Tile** or not.
   - Last, the `onTileClick` function is used to let the parent know when the user clicks on a specific tile.

1. Then, open the **src/components/Column.tsx** file and paste the following presentational code:

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
         tiles.push(<Tile key={tileId} id={tileId} chipType={chipType} onClick={onTileClick} />);
       }

       return <div className={styles.column}>{tiles}</div>;
     }
   }
   ```

   As you see above, what we do here is to render a `<div>` element containing as many **Tile** components as rows. Each tile will receive a `chipType` that can have a value or not. And the `onTileClick()` function to be triggered when clicked. Notice that we define the `tileId` as the combination of a row and a column value. And this value is unique.

1. Last, open the **src/components/Column/Column.module.css** and paste the following CSS code:

   ```css
   .column {
     display: flex;
     flex-direction: column;
     cursor: pointer;
   }
   ```

#### Creating a Board component

1. Similarly, navigate to the **components** folder and create a new folder inside named **Board**.
1. Inside this folder, create the following files: a **Board.module.css** file to store the CSS code, a **Board.tsx** file for the React's component logic and a **types.ts** file for the TypeScript types of the component.
1. Open the **src/components/Board/types.ts** file and paste the following code that defines the props (contract) of the _Column_ component:

   ```js
   import { ChipsPositions } from "../App/types";

   export interface Props {
     columns: number;
     rows: number;
     chipsPositions: ChipsPositions;
     onTileClick: (id: string) => any;
   }
   ```

   This code tells the component's consumer that:

   - It has to provide the number of `columns` and `rows` the board will have.
   - It has to send the `chipsPositions` object. This information is used by the **Column** component, not the **Board**.
   - It has to provide an `onTileClick` function, that will be used by the **Tile** component to signal when it is clicked.

1. Then, open the **src/components/Board.tsx** file and paste the following presentational code:

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
         columnsComponents.push(<Column key={column} column={column} rows={rows} chipsPositions={chipsPositions} onTileClick={onTileClick} />);
       }

       return <>{columnsComponents}</>;
     }

     render() {
       return <div className={styles.board}>{this.renderColumns()}</div>;
     }
   }
   ```

   This code is similar to the Column component, but instead of creating Tiles, we create multiple columns, passing the required information to them, and then we render the result. The only difference is that we use a `this.renderColumns()` method to encapsulate this logic.

   > **Note:** _Have you noticed that we also use React.Fragment?_ Probably not because we are using the shorthand `<></>`. It is an equivalent of `<React.Fragment></React.Fragment>`.

1. Last, open the **src/components/Board/Board.module.css** file and paste the following CSS code:

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

We are almost there! 🙌

#### Creating the App component

We are now going to develop the main logic for our game. Pay special attention to this section:

1. Create a folder named **App** inside the **src/components** folder.
1. Inside this folder, create the **App.module.css** file, the **App.tsx** file and the **types.ts** file.
1. Open the **src/components/App/types.ts** file and paste the following info:

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

   We define multiple important things here:

   - The shape of the `ChipsPositions` object: a dictionary containing in each position one of these (`Player`) values: `"red"`, `"yellow"` or `""` (representing empty).
   - We define the shape of the App's `Props` and `State`. The former tells us that we need to provide the amount of `columns` and `rows` for the App component to initialize. While the latter tells us all the information that will be stored by the component.

1. Now, open the **src/components/App/App.tsx** and paste the following code:

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

     calculateGameStatus = (playerTurn: string, chipsPositions: ChipsPositions): string => {
       // TODO
     };

     handleTileClick = (tileId: string) => {
       // TODO
     };

     renderBoard() {
       const { columns, rows } = this.props;
       const { chipsPositions } = this.state;
       return <Board columns={columns} rows={rows} chipsPositions={chipsPositions} onTileClick={this.handleTileClick} />;
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

   This is the basic structure of the application. We already know what this means. This is "presentational" code to draw/render the **Board** and the **Status** message. We are also initializing the **App**'s state with some default information. This code is entirely functional, but it will do nothing when the user interacts with the board.

1. Implement the `handleTileClick()` method to react when the user clicks on a Tile.

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

   Take a couple of minutes to understand what we are doing here:

   1. First, we need to get the last empty **Tile** of the column (from top to bottom) that the clicked Tile belongs to. We obtain the column number by parsing the `tileId`. Notice that by removing this code, we can place a chip on any tile, _but that will change the game rules_.
   1. Then, we add a chip to the selected tile depending on the player's turn, known by the **App** component alone. And we recalculate the game status.
   1. Last, we store all the new information in the component's state, re-rendering the entire application if something changed (React will take care of deciding this).

1. Implement the `calculateGameStatus()` method by pasting the following code inside the **App** component. It contains the logic of the game to decide who the winner is, or who plays next. So we are going to skip the explanation.

```js
calculateGameStatus = (playerTurn: string, chipsPositions: ChipsPositions): string => {
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

> **Note:** Notice that this code does not check for four consecutive chips of the same value in diagonal. _Can you come up with an implementation for this? If you do, send it to me [as a Pull Request!](https://help.github.com/en/articles/creating-a-pull-request)_

#### Initializing the app

1. Open the **src/components/index.ts** file and paste this line to expose the **App** component outside the **components** folder.

   ```js
   export { default as App } from "./App/App";
   ```

1. Now, open the **src/index.tsx** file and replace its content with the following code:

   ```js
   import React from "react";
   import ReactDOM from "react-dom";
   import { App } from "./components";
   import "./index.css";

   ReactDOM.render(<App columns={7} rows={6} />, document.getElementById("root"));
   ```

1. If you haven't done so yet, start the app by running `npm start` in a terminal.
1. In the newly opened browser window, open the **Developer Console**, and then click the **Components** tab. You will see here the hierarchy tree of the React application, composed for an **App** component, a **Board** component with multiple **Column** components, and **Tile** components.
1. Play with the game a little bit and then check the different **Tile**s of the board. Notice that the properties received will change when you interact with them.

![Connect four board in the Developer's console](./assets/images/connect-four-developer-tools.png)

> **Note:** You can also change a prop directly by modifying its value in the right panel. Try it yourself by turning a **Tile**'s chip type from `"red"` or `undefined` to `"yellow"`.

Congratulations! You have created your first game with React and TypeScript

🎉🎉

### Wrapping up

In this exercise, we learned the following:

- How to create an application from scratch using React and TypeScript.
- How to split your app's business logic into small components.
- How to send information and notify user events via props.
- How to use the React Developer tools to visualize your application's component tree and its state.
