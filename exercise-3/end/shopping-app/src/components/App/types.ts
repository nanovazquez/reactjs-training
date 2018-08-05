export interface IProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface IProps {
  userId: string;
  pathname: string;
  shoppingCartItems: IProduct[];
}
