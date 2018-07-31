export interface IProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface IProps {
  shoppingCartItems: IProduct[];
  userId: string;
  fetchUserShoppingCartItems: (userId: string) => Promise<IProduct[]>;
  onRemoveShoppingCartItem: (itemId: string) => any;
}
