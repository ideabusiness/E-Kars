import * as actionTypes from "../constants/searchConstant";

export const searchNavReducer = (state = { searchNav: [] }, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_NAVBAR:
      return {
        searchNav:
          action.payload.target == undefined
            ? ""
            : action.payload.target.value.toLowerCase(),
      };
    case actionTypes.SEARCH_BRAND_NAVBAR:
      return {
        searchNav: action.payload,
      };
    default:
      return state;
  }
};
