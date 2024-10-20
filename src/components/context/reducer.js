import { DATA_FETCHING_FAIL, DATA_FETCHING_STARTED, DATA_FETCHING_SUCCESS } from "./actions";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DATA_FETCHING_STARTED:
      return { ...state, isLoading: true }
    case DATA_FETCHING_SUCCESS:
      return { ...state, isLoading: false, isError: false, products: payload }

    case DATA_FETCHING_FAIL:
      return { ...state, isLoading: true, isError:true, products:payload }


    default:
      break;
  }
  return state;
}
export default reducer;
