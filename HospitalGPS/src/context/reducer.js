import {
  SET_LOADING,
  SET_HOSPITALS,
  HANDLE_CITY,
  HANDLE_ADDRESS,
  HANDLE_CODE,
  HANDLE_PAGE,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_HOSPITALS:
      return {
        ...state,
        isLoading: false,
        numOfPages: action.payload.numOfPages,
        totalHospitals: action.payload.totalHospitals,
        hospitals: action.payload.hospitals,
      };
    case HANDLE_CITY:
      return { ...state, query1: action.payload, page: 0 };
    case HANDLE_ADDRESS:
      return { ...state, query2: action.payload, page: 0 };
    case HANDLE_CODE:
      return { ...state, query3: action.payload, page: 0 };
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage > state.numOfPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.numOfPages - 1;
        }
        return { ...state, page: prevPage };
      }
    // eslint-disable-next-line no-fallthrough
    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};

export default reducer;
