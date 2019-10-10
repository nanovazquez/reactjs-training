import { ChipsPositions } from "../Aoo/types";

export interface Props {
  columns: number;
  rows: number;
  chipsPositions: ChipsPositions;
  onEmptyTileClick: (id: string) => any;
}
