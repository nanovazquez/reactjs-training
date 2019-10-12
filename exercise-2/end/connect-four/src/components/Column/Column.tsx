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
