/* global window */
/* global document */
/* global alert */

export default {
  namespace: 'layout',
  state: {
    isNavbar: document.body.clientWidth < 769,
    siderFold: window.localStorage.getItem('siderFold') === 'true',
  },
  subscriptions: {
    setup({ dispatch }) {
      let tid;
      window.onresize = () => {
        clearTimeout(tid);
        tid = setTimeout(() => {
          dispatch({ type: 'changeNavbar' });
        }, 300);
      };
    },

  },
  effects: {
    * changeNavbar(action, { put, select }) {
      const { layout } = yield (select(_ => _));
      const isNavbar = document.body.clientWidth < 769;
      if (isNavbar !== layout.isNavbar) {
        yield put({ type: 'handleNavbar', payload: isNavbar });
      }
    },
  },
  reducers: {
    handleNavbar(state, { payload }) {
      return {
        ...state,
        isNavbar: payload,
      };
    },
    switchSider(state) {
      window.localStorage.setItem('siderFold', !state.siderFold);
      return {
        ...state,
        siderFold: !state.siderFold,
      };
    },
  },
};

