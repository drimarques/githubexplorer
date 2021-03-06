import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Types } from 'redux/ducks/favorites';

export function* searchAndAddRepository(action) {
  const response = yield call(api.get, `/repos/${action.payload.repositoryName}`);

  yield put({
    type: Types.ADD,
    payload: {
      repository: response.data,
    },
  });
}
