import { AxiosResponse } from 'axios';
import { IMovieItem } from './movie-item';

export type IMoviesFetchResponse =
  AxiosResponse<{
    products: IMovieItem[];
  }>;