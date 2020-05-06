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
    
    const { columns, rows } = this.props;

    // Check four in a row horizontally
    for (let row = 0; row < rows; row++) {

      for (let column = 0; column < columns; column++) {
  
          const card = chipsPositions[`${row}:${column}`];
  
              if(card){
                  if(chipsPositions[`${row}:${column}`] === playerTurn && chipsPositions[`${row}:${column+1}`] === playerTurn && chipsPositions[`${row}:${column+2}`] === playerTurn && chipsPositions[`${row}:${column+3}`] === playerTurn){
                      return `Player ${playerTurn} won!`
                  } 
              }
          }
      }
    // Check four in a row vertically
    for (let column = 0; column < columns; column++) {

      for (let row = 0; row < rows; row++) {

        const card = chipsPositions[`${row}:${column}`];

        if(card){
          if(chipsPositions[`${row}:${column}`] === playerTurn && chipsPositions[`${row-1}:${column}`] === playerTurn && chipsPositions[`${row-2}:${column}`] === playerTurn && chipsPositions[`${row-3}:${column}`] === playerTurn){
            return `Player ${playerTurn} won!`
          } 
        }       
      }       
    }
    // Check four in a row diagonal-right
    for (let column = 0; column < columns; column++) {

      for (let row = 0; row < rows; row++) {

        const card = chipsPositions[`${row}:${column}`];

        if(card){
          if(chipsPositions[`${row}:${column}`] === playerTurn && chipsPositions[`${row+1}:${column-1}`] === playerTurn && chipsPositions[`${row+2}:${column-2}`] === playerTurn && chipsPositions[`${row+3}:${column-3}`] === playerTurn){
            return `Player ${playerTurn} won!`
          } 
        }      
      }
    }
    // Check four in a row diagonal-left
    for (let column = 0; column < columns; column++) {
        
      for (let row = 0; row < rows; row++) {

        const card = chipsPositions[`${row}:${column}`];

        if(card){
          if(chipsPositions[`${row}:${column}`] === playerTurn && chipsPositions[`${row-1}:${column-1}`] === playerTurn && chipsPositions[`${row-2}:${column-2}`] === playerTurn && chipsPositions[`${row-3}:${column-3}`] === playerTurn){
            return `Player ${playerTurn} won!`
          } 
        }      
      }
    }

    return `It's ${playerTurn}'s turn`;
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
    const gameStatus = this.calculateGameStatus(playerTurn, newChipsPositions);

    // Save new state
    this.setState({ chipsPositions: newChipsPositions, playerTurn: newPlayerTurn, gameStatus });
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
