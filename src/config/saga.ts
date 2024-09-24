import { all, takeLatest, call, put, select, takeLeading } from 'redux-saga/effects';
import { ACTION_TYPES, setStore } from './actions';
import axios from './axios.config'
import { IMoviesFetchResponse } from '../types/movies-fetch-response';
import { IRootState } from './reducers';

const getCartData = (store: IRootState) => store.cartItems;

function* handleFetchMoviesList() {
  yield put(setStore({ loading: true }));
  const response: IMoviesFetchResponse = yield call(axios.get, 'api/movies');
  yield put(setStore({ moviesList: response.data.products, loading: false }));
}

function* handleTotalCartUpdate() {
  const data: { [key: number]: number; } = yield select(getCartData);
  const sum = Object.values(data).reduce((acc, curr) => acc + curr, 0) || 0;
  yield put(setStore({ totalCart: sum }))
}

function* handleConfirmPurchase() {
  // api call
  yield put(setStore({ totalCart: 0, cartItems: {} }));
}

function* watchFetchMoviesList() {
  yield takeLeading(ACTION_TYPES.FETCH_MOVIES_LIST, handleFetchMoviesList);
}

function* watchTotalCartUpdate() {
  yield takeLatest([ACTION_TYPES.REMOVE_ITEM_FROM_CART, ACTION_TYPES.EDIT_ITEM_QUANTITY], handleTotalCartUpdate);
}

function* watchConfirmPurchase() {
  yield takeLatest(ACTION_TYPES.CONFIRM_PURCHASE, handleConfirmPurchase);
}

export function* saga() {
  yield all([
    watchFetchMoviesList(),
    watchTotalCartUpdate(),
    watchConfirmPurchase()
  ]);
}