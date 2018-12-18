import { AsyncActionCondition } from '../../types/condition';
import { IMandalArt, IMandalArtFront } from '../../types/MandalArt';
import { MandalListActions } from '../actions/MandalListAcitons';
import {
  GET_MANDAL_LIST_FAILURE,
  GET_MANDAL_LIST_REQUEST,
  GET_MANDAL_LIST_SUCCESS,
} from '../actionTypes/MandalListAcitonsTypes';

export interface IMandalListState {
  mandalListCondition: AsyncActionCondition;
  count: number;
  mandalArts: IMandalArtFront[];
}

const defaultState: IMandalListState = {
  mandalListCondition: 'INIT',
  count: 0,
  mandalArts: [] as IMandalArtFront[],
};

const mandalList = (
  state: IMandalListState = defaultState,
  action: MandalListActions,
): IMandalListState => {
  switch (action.type) {
    case GET_MANDAL_LIST_REQUEST: {
      return {
        ...state,
        mandalListCondition: 'LOADING',
      };
    }
    case GET_MANDAL_LIST_SUCCESS: {
      return {
        ...state,
        mandalListCondition: 'SUCCESS',
        ...action.payload,
      };
    }
    case GET_MANDAL_LIST_FAILURE: {
      return {
        ...state,
        mandalListCondition: 'FAILURE',
      };
    }
    default: {
      return state;
    }
  }
};

export default mandalList;
