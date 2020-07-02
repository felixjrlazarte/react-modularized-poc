import { fork, all } from 'redux-saga/effects';
import { sagas as accountsSaga } from './accounts';

function combineSagas(...sagas) {
  return function* rootSaga() {
    yield all(
      sagas.reduce((previousSagas, saga) => [
        ...previousSagas,
        ...Object.keys(saga).map(
          key => fork(saga[key]),
        ),
      ], []),
    );
  };
}

export default combineSagas(
  accountsSaga,
  // ...other sagas,
);
