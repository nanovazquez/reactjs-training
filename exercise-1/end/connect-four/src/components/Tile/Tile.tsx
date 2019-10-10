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
