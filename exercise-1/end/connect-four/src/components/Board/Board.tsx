import React from "react";
import { Column } from "../";

import styles from "./Board.module.css";
import { Props } from "./types";

export default class Board extends React.PureComponent<Props> {
  renderColumns() {
    const { columns, rows, chipsPositions, onEmptyTileClick } = this.props;

    const columnsComponents = [];

    for (let i = 0; i < columns; i++) {
      columnsComponents.push(<Column key={i} column={i} rows={rows} chipsPositions={chipsPositions} onEmptyTileClick={onEmptyTileClick} />);
    }

    return <>{columnsComponents}</>;
  }

  render() {
    return <div className={styles.board}>{this.renderColumns()}</div>;
  }
}
