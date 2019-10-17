import products from './dummy-products';

function getAll(filter: string = '') {
  return Promise.resolve(
    products.filter(item => item.name.indexOf(filter) !== -1)
  );
}

export default {
  getAll,
}
