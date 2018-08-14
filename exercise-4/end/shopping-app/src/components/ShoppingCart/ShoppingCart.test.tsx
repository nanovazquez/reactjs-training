import * as React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from './ShoppingCart';

it('renders the empty state if there are no items', () => {
  const wrapper = shallow(<ShoppingCart />);
  expect(wrapper.find('.shopping-cart-empty').exists()).toBeTruthy();
  expect(wrapper.find('.shopping-cart-empty').text()).toBe('No items');
});

it('renders items', () => {
  const items = [
    { id: '1', name: 'test-1', price: '$10', imageUrl: 'imageUrl' },
    { id: '2', name: 'test-1', price: '$10', imageUrl: 'imageUrl' },
  ];
  const wrapper = shallow(<ShoppingCart items={items} />);
  expect(wrapper.find('.shopping-cart-empty').exists()).toBeFalsy();

  const shoppingCartItems = wrapper.find('.shopping-cart-items');
  expect(shoppingCartItems.exists()).toBeTruthy();

  shoppingCartItems.find('.shopping-cart-item').map((shoppingCartItem, index) => {
    expect(shoppingCartItem.exists()).toBeTruthy();
    expect(shoppingCartItem.key()).toBe(items[index].id);
    expect(shoppingCartItem.find('.shopping-cart-item-name').text()).toBe(items[index].name);
    expect(shoppingCartItem.find('.shopping-cart-item-price').text()).toBe(items[index].price);
    expect(shoppingCartItem.find('.shopping-cart-item-image').prop('src')).toBe(items[index].imageUrl);
  });
});

it('calls onItemRemove when an item is removed', () => {
  const items = [
    { id: '1', name: 'test-1', price: '$10', imageUrl: 'imageUrl' },
    { id: '2', name: 'test-1', price: '$10', imageUrl: 'imageUrl' },
  ];
  const onItemRemoveSpy = jest.fn();
  const wrapper = shallow(<ShoppingCart items={items} onItemRemove={onItemRemoveSpy} />);

  const evt = { preventDefault: () => {}, currentTarget: { dataset: { id: items[0].id } } };
  wrapper.find('.shopping-cart-item-remove').first().simulate('click', evt);
  expect(onItemRemoveSpy).toBeCalledWith(items[0]);
});
