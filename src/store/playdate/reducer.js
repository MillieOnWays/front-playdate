import { FETCH_PLAYDATES_SUCCESS } from "./actions";

const initialState = {
    allPlaydates: []
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PLAYDATES_SUCCESS:
        return {
            ...state,
            allPlaydates: [...state.allPlaydates, ...action.payload],
          };
    
      default:
        return state;
    }
  };