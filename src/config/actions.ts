import { IRootState } from './reducers';

export const ACTION_TYPES = {
  FETCH_MOVIES_LIST: 'FETCH_MOVIES_LIST',
  CONFIRM_PURCHASE: 'CONFIRM_PURCHASE',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  EDIT_ITEM_QUANTITY: 'EDIT_ITEM_QUANTITY',
  SET_STORE: 'SET_STORE'
};

export const fetchMoviesList = () => ({
  type: ACTION_TYPES.FETCH_MOVIES_LIST
});

export const addItemToCart = (movieId: number) => ({
  type: ACTION_TYPES.ADD_ITEM_TO_CART,
  payload: { movieId }
});

export const confirmPurchase = () => ({
  type: ACTION_TYPES.CONFIRM_PURCHASE
});

export const removeItemFromCart = (itemId: number) => ({
  type: ACTION_TYPES.REMOVE_ITEM_FROM_CART,
  payload: { itemId }
});

export const editItemQuantity = (itemId: number, quantity: number) => ({
  type: ACTION_TYPES.EDIT_ITEM_QUANTITY,
  payload: { itemId, quantity }
});

export const setStore = (store: Partial<IRootState>) => ({
  type: ACTION_TYPES.SET_STORE,
  payload: { store }
});
