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

    case "DELETE_KID": {
      const kidId = action.payload;
      const kids = [...state.allKids];
      console.log("kid from DELETE", kids);
      const filterKids = kids.filter((kid) => kid.id !== kidId);
      console.log("filter kids ", filterKids);
      return {
        ...state,
        allKids: [...filterKids],
      };
    }

    default:
      return state;
  }
}
