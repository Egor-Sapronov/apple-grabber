import http, { getDataFromSuccessResponse } from './http';

export default function loadBasket() {
  return http.get('/basket')
    .then(getDataFromSuccessResponse);
}

export function mapApples(apples) {
  return apples.map((name, index) => ({
    id: index,
    text: name,
  }));
}

export function getMappedApples() {
  return loadBasket()
    .then(mapApples);
}
