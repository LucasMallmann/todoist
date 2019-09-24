export const Types = {
  GET_REQUEST: '@todo/GET_REQUEST',
  GET_SUCCESS: '@todo/GET_SUCCESS',
  ADD_TODO: '@todo/ADD_TODO',
};

const initialState = {
  data: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
};

export const ActionCreators = {
  getTodosRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getTodosSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};

export default reducer;
