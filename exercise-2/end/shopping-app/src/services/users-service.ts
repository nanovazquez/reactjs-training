const dummyProducts = [
  { id: '1', name: 'Win10.1 15.6" Fullhd Intel Core I7', price: 'USD279.99', imageUrl: 'https://i.ebayimg.com/thumbs/images/m/m7bQqTqiZCJKJ-HcYEta1xw/s-l225.jpg' },
  { id: '2', name: 'Ibm T60 Laptop Lenovo 1.6 Ghz 2 Gb', price: 'USD109.00', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/HFQAAOSwB09YDWhy/s-l225.jpg' },
  { id: '3', name: 'HP Elitebook 14" Led Ultrabook', price: 'USD382.81', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/~QEAAOSwDRxbXKR2/s-l225.jpg' },
  { id: '4', name: 'Core i7 HP EliteBook 2540p Laptop', price: 'USD177.20', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/lMEAAOSw9NdXvbMW/s-l225.jpg' },
  { id: '5', name: 'Notebook HP 1WY10EA 255 G6 AMD DUAL CORE 8', price: 'USD278.49', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/AyEAAOSwH2VZ9vSV/s-l225.jpg' },
  { id: '6', name: 'Laptop Lenovo Thinkpad T510 i5 2.4GHz', price: 'USD145.46', imageUrl: 'https://i.ebayimg.com/thumbs/images/m/mgDshSE5Ek6_8A-fL-wmStg/s-l225.jpg' },
  { id: '7', name: 'HP 14-AX010WM 142.48 GHz, 4 GB RAM', price: 'USD120.00', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/5w8AAOSwqjpar92q/s-l225.jpg' },
  { id: '8', name: 'Laptop Hp Pavilion 15.6" i5', price: 'USD446.99', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/cEcAAOSw70BbWcYM/s-l225.jpg' },
  { id: '9', name: 'Laptop Dell Latitude E7450 SSD', price: 'USD555.45', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/qmUAAOSwqpha1X4G/s-l225.jpg' },
  { id: '10', name: 'Notebook Lenovo E2-9010 4GB 500GB', price: 'USD231.88', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/tkIAAOSwJ7dbIZ72/s-l225.jpg' },
];

function getUserShoppingCartItems(userId: string) {
  return Promise.resolve(dummyProducts.slice(0, 3));
}

export default {
  getUserShoppingCartItems,
}
