import { IProduct } from '../App/types';

export interface IProps {
  products: IProduct[];
  fetchProducts: (filter?: string) => void;
  addProductToCart: (item: IProduct) => any;
}
