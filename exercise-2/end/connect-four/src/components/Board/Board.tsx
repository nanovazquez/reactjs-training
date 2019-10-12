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
