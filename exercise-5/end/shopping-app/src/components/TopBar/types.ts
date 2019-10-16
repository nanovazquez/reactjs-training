export interface IPage {
  name: string;
  url: string;
}

export interface IProps {
  itemsInCart: number;
  pages: IPage[];
}
