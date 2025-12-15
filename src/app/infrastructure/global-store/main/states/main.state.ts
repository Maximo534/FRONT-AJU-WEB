import { MainEntity } from '../entity/main.entity';

export interface MainState {
  loading: boolean;
  data: MainEntity[];
  error: any;
}

export const mainInitialState: MainState = {
  loading: false,
  data: [],
  error: null,
};
