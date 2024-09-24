import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesList } from '../../config/actions';
import { IRootState } from '../../config/reducers';
import { PreLoader } from '../../components/pre-loader/PreLoader';
import { MovieListItem } from '../../components/movie-list-item/MovieListItem';
import { StyledMoviesList } from './MoviesList.styled';

export function ProductList() {
  const dispatch = useDispatch();
  const { moviesList, loading } = useSelector((store: IRootState) => ({
    moviesList: store.moviesList,
    loading: store.loading
  }));

  useEffect(() => {
    dispatch(fetchMoviesList());
  }, [dispatch]);

  if (loading) return <PreLoader />;

  return (
    <StyledMoviesList>
      {(moviesList || []).map((movie, index) => (
        <MovieListItem
          index={index}
          movie={movie}
        />
      ))}
    </StyledMoviesList>
  );
}
