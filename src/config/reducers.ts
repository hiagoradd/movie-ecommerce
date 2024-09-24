import { IMovieItem } from '../types/movie-item';
import { ACTION_TYPES } from './actions';

export interface IRootState {
  moviesList: IMovieItem[];
  cartItems: {
    [movieId: number]: number;
  };
  totalCart: number;
  loading: boolean;
}

export const initialState: IRootState = {
  moviesList: [],
  cartItems: {},
  totalCart: 0,
  loading: true
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload.movieId]: (state.cartItems[action.payload.movieId] || 0) + 1
        },
        totalCart: state.totalCart + 1
      }

    case ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      const { [action.payload.itemId]: _, ...newCartItems } = state.cartItems;
      return {
        ...state,
        cartItems: newCartItems
      };

    case ACTION_TYPES.EDIT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload.itemId]: action.payload.quantity
        }
      };

    case ACTION_TYPES.SET_STORE:
      return {
        ...state,
        ...action.payload.store
      };

    default:
      return state;
  }
};

export default rootReducer;