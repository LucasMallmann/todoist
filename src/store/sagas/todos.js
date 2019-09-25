import { call, put } from 'redux-saga/effects';
import { ActionCreators as TodosActions } from '../ducks/todos';

import api from '../../services/api';

export function* getTodos() {
  try {
    const response = yield call(api.get, '/todos?completed=false');
    yield put(TodosActions.getTodosSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
