import produce from 'immer';

export const Types = {
  GET_REQUEST: '@todo/GET_REQUEST',
  GET_SUCCESS: '@todo/GET_SUCCESS',
  ADD_TODO: '@todo/ADD_TODO',
  REMOVE_TODO: '@todo/REMOVE_TODO',
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
    case Types.ADD_TODO:
      return produce(state, draft => {
        draft.data.push(action.payload.todo);
      });
    case Types.REMOVE_TODO:
      /**
       * draft is a state copy, wich I can mutate directly, so I don't need to use spread operators all the time
       */
      return produce(state, draft => {
        const index = draft.data.findIndex(t => t.id === action.payload.id);
        if (index >= 0) {
          draft.data.splice(index, 1);
        }
      });
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
  addTodo: todo => ({
    type: Types.ADD_TODO,
    payload: { todo },
  }),
  removeTodo: id => ({
    type: Types.REMOVE_TODO,
    payload: { id },
  }),
};

export default reducer;
