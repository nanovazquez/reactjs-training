import { ChipsPositions } from "../Aoo/types";

export interface Props {
  column: number;
  rows: number;
  chipsPositions: ChipsPositions;
  onEmptyTileClick: (id: string) => any;
}
