import App from './App';

it('returns the proper page', () => {
  const app = new App({ pathname: '/' });
  const result = app.getPages();

  expect(result.length).toBe(1);
  expect(result[0].name).toBe('Home');
  expect(result[0].url).toBe('/');
});
