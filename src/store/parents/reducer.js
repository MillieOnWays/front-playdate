const initialState = {
    allKids: [],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "USER/fetchParentData":
        return {
          ...state,
          allKids: [...action.payload],
        };
  
      default:
        return state;
    }
  }
  