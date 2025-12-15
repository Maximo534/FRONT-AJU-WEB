import { createAction, props } from '@ngrx/store';
import { MainEntity } from '../entity/main.entity';

export const loadMainData = createAction('[Main Page] Load Data');
export const loadMainDataSuccess = createAction('[Main Page] Load Data Success', props<{ data: MainEntity[] }>());
export const loadMainDataFailure = createAction('[Main Page] Load Data Failure', props<{ error: any }>());
