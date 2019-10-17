export interface IProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface IProps {
  shoppingCartItems: IProduct[];
  onRemoveShoppingCartItem: (item: IProduct) => any;
}
