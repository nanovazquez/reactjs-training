import { IProduct } from '../App/types';

export interface IProps {
  items: IProduct[];
  onItemRemove: (item: string) => any;
}
