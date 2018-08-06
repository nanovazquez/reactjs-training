export interface IProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface IProps {
  pathname: string;
  shoppingCartItems: IProduct[];
}
