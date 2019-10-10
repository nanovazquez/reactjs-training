import React from "react";
import { Tile } from "../";

import styles from "./Column.module.css";
import { Props } from "./types";

export default class Column extends React.PureComponent<Props> {
  render() {
    const { column, rows, chipsPositions, onEmptyTileClick } = this.props;
    const tiles = [];

    for (let row = 0; row < rows; row++) {
      const tileId = `${row}:${column}`;
      const chipType = chipsPositions[tileId];
      tiles.push(<Tile key={tileId} id={tileId} chipType={chipType} onClick={onEmptyTileClick} />);
    }

    return <div className={styles.column}>{tiles}</div>;
  }
}
