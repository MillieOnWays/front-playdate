import {
  FETCH_PLAYDATES_SUCCESS,
  PLAYDATE_DETAILS_FETCHED,
  // SET_PLAYDATE_ORDER,
  // SET_PLAYDATE_ORDERBY,
} from "./actions";

const initialState = {
  allPlaydates: [],
  // playdateOrder: "DESC",
  // playdateOrderBy: "createdAt",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYDATES_SUCCESS:
      return {
        ...state,
        allPlaydates: action.payload,
      };
    case PLAYDATE_DETAILS_FETCHED:
      return {
        ...state,
        details: action.payload,
      };
    // case SET_PLAYDATE_ORDER:
    //   return {
    //     ...state,
    //     playdateOrder: action.payload,
    //   };
    //   case SET_PLAYDATE_ORDERBY:
    //   return {
    //     ...state,
    //     playdateOrderBy: action.payload,
    //   };
    default:
      return state;
  }
};
