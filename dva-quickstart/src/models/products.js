import dva from 'dva';

/**
 * okay, a model is a definition of state and state change function
 * the syntax is wired
 */
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id)
    },
  },
}
