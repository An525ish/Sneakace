import { postApi, fetchApi } from './api';

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await postApi('/cart', item);
    resolve({ data: response.data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    const response = await fetchApi('/cart');
    resolve({ data: response.data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await postApi('/cart/' + update.id, update);
    resolve({ data: response.data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetchApi('/cart/' + itemId, { method: 'DELETE' });
    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: 'success' });
  });
}
