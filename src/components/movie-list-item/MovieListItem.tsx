import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../config/actions';
import { IRootState } from '../../config/reducers';
import { IMovieItem } from '../../types/movie-item';
import { AddToCartButton } from '../add-to-cart-button/AddToCartButton';
import { MovieImage } from '../styles/MovieImage.styled';
import { MoviePrice } from '../styles/MoviePrice.styled';
import { StyledMovieListItem } from './MovieListItem.styled';

export interface IMovieListItemProps {
  movie: IMovieItem;
  index: number;
}

export function MovieListItem(props: IMovieListItemProps) {
  const dispatch = useDispatch();
  const { movie, index } = props;
  const { count } = useSelector((store: IRootState) => ({
    count: store.cartItems[movie.id] || 0
  }));

  const addItemToCartPressed = () => {
    dispatch(addItemToCart(movie.id));
  };

  return (
    <StyledMovieListItem key={index}>
      <MovieImage src={movie.image} width={'147px'} />
      <h4>{movie.title}</h4>
      <MoviePrice margin='0 0 8px'>{movie.price.toFixed(2)}</MoviePrice>
      <AddToCartButton
        value={count}
        onClick={() => addItemToCartPressed()}
      >
        Adicionar ao carrinho
      </AddToCartButton>
    </StyledMovieListItem>
  );
}
