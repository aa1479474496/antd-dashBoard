import { query } from '../services/dashboard';

export default {
  namespace: 'dashboard',
  state: {
    numbers: [],
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/dashboard') {
          dispatch({ type: 'query' });
        }
      });
    },
  },
  effects: {
    *query({
      payload,
    }, { call, put }) {
      const data = yield call(query);
      yield put({
        type: 'updateState',
        payload: data.data,
      });
    },
  },
}
;
