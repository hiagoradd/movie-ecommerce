import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigateOptions, useNavigate } from 'react-router';
import QuantityInput from '../../components/quantity-input/QuantityInput';
import { Button } from '../../components/styles/Button.styled';
import { Flex } from '../../components/styles/Flex.styled';
import { MoviePrice } from '../../components/styles/MoviePrice.styled';
import { confirmPurchase, editItemQuantity, removeItemFromCart } from '../../config/actions';
import { IRootState } from '../../config/reducers';
import { IMovieItem } from '../../types/movie-item';
import { CartMovieImage, CartMovieInfo, CartMovieTitle, CartTableRow, DeleteCartButton, StyledCartFooter, StyledCartTableBody, StyledCartTableHeader, StyledMoviesCart, TotalText, SubTotalText } from './MoviesCart.styled';
import useMobile from '../../hooks/useMobile';

interface ICartMovieData {
  movie: IMovieItem;
  quantity: number;
};

export default function MoviesCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMobile();
  const cartItems = useSelector((store: IRootState) => store.cartItems);
  const moviesList = useSelector((store: IRootState) => store.moviesList);
  const [data, setData] = useState<Array<ICartMovieData>>([]);

  useEffect(() => {
    if (isEmpty(cartItems)) {
      const options: NavigateOptions = {
        state: {
          goBackToHome: true
        }
      };
      navigate('/not-found', options);
      return;
    }
    const newData: ICartMovieData[] = [];
    Object.entries(cartItems).forEach(([movieId, quantity]) => {
      const movie = moviesList.find(movie => movie.id === parseInt(movieId, 10));
      movie && newData.push({
        movie,
        quantity
      });
    });
    setData(newData);
  }, [cartItems, moviesList, navigate])

  const handleDeleteItem = (movieId: number) => {
    dispatch(removeItemFromCart(movieId));
  }

  const handleChangeItemQuantity = (movieId: number, quantity: number) => {
    if (quantity === 0) {
      return handleDeleteItem(movieId);
    }
    dispatch(editItemQuantity(movieId, quantity));
  }

  const handleConfirmPurchase = () => {
    navigate('/purchase-success');
    dispatch(confirmPurchase());
  }

  const DesktopCartItem = ({ movie, quantity }: ICartMovieData) => (
    <CartTableRow>
      <Flex>
        <CartMovieImage src={movie.image} />
        <CartMovieInfo>
          <CartMovieTitle>{movie.title}</CartMovieTitle>
          <MoviePrice>{movie.price.toFixed(2)}</MoviePrice>
        </CartMovieInfo>
      </Flex>
      <Flex>
        <QuantityInput
          value={quantity}
          onChange={value => handleChangeItemQuantity(movie.id, value)}
        />
      </Flex>
      <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <MoviePrice>{(quantity * movie.price).toFixed(2)}</MoviePrice>
        <DeleteCartButton onClick={() => handleDeleteItem(movie.id)} src={'/assets/images/trash-icon.svg'} />
      </Flex>
    </CartTableRow>
  );

  const MobileCartItem = ({ movie, quantity }: ICartMovieData) => (
    <CartTableRow>
      <Flex>
        <CartMovieImage src={movie.image} />
      </Flex>
      <Flex width={'100%!important'} flexDirection={'column'}>
        <Flex margin={'0 0 16px'} justifyContent={'space-between'}>
          <CartMovieTitle>{movie.title}</CartMovieTitle>
          <Flex alignItems={'center'}>
            <MoviePrice>{movie.price.toFixed(2)}</MoviePrice>
            <DeleteCartButton onClick={() => handleDeleteItem(movie.id)} src={'/assets/images/trash-icon.svg'} />
          </Flex>
        </Flex>
        <Flex justifyContent={'space-between'}>
          <QuantityInput
            value={quantity}
            onChange={value => handleChangeItemQuantity(movie.id, value)}
          />
          <Flex margin={'0 17px 0 0'} flexDirection={'column'}>
            <SubTotalText>Subtotal</SubTotalText>
            <MoviePrice>{(quantity * movie.price).toFixed(2)}</MoviePrice>
          </Flex>
        </Flex>
      </Flex>
    </CartTableRow>
  );

  return (
    <StyledMoviesCart>
      {!isMobile && (
        <StyledCartTableHeader>
          <CartTableRow>
            <div>Produto</div>
            <div>Qtd</div>
            <div>Subtotal</div>
          </CartTableRow>
        </StyledCartTableHeader>
      )}
      <StyledCartTableBody>
        {data.map(({ movie, quantity }: ICartMovieData, index: number) => (
          isMobile ?
            <MobileCartItem movie={movie} quantity={quantity} key={index} /> :
            <DesktopCartItem movie={movie} quantity={quantity} key={index} />
        ))}
      </StyledCartTableBody>
      <StyledCartFooter>
        <Button textTransform={'uppercase'} onClick={() => handleConfirmPurchase()}>Finalizar pedido</Button>
        <Flex alignItems='center'>
          <TotalText>TOTAL:</TotalText>
          <MoviePrice margin={'0px 0px 0px 30px'} fontSize='24px'>
            {data.reduce((acc, curr) => acc + curr.quantity * curr.movie.price, 0).toFixed(2)}
          </MoviePrice>
        </Flex>
      </StyledCartFooter>
    </StyledMoviesCart>
  );
}
