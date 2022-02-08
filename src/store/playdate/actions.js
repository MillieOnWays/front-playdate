import {
  apiUrl,
  // DEFAULT_PAGINATION_LIMIT
} from "../../config/constants";
import { selectUser } from "../user/selectors";
import axios from "axios";
// import {
//   appLoading,
//   appDoneLoading,
//   showMessageWithTimeout,
//   setMessage,
// } from "../appState/actions";

export const FETCH_PLAYDATES_SUCCESS = "FETCH_PLAYDATES_SUCCESS";
export const PLAYDATE_DETAILS_FETCHED = "PLAYDATE_DETAILS_FETCHED";
// export const SET_PLAYDATE_ORDER = "SET_PLAYDATE_ORDER";
// export const SET_PLAYDATE_ORDERBY = "SET_PLAYDATE_ORDERBY";

// export const setPlaydateOrder = (order) => {
//   return {
//     type: SET_PLAYDATE_ORDER,
//     payload: order,
//   };
// };

// export const setPlaydateOrderBy = (orderBy) => {
//   return {
//     type: SET_PLAYDATE_ORDERBY,
//     payload: orderBy,
//   };
// };

export const fetchPlaydatesSuccess = (playdates) => {
  return {
    type: FETCH_PLAYDATES_SUCCESS,
    payload: playdates,
  };
};

export const fetchPlaydateDetailsSuccess = (details) => ({
  type: PLAYDATE_DETAILS_FETCHED,
  payload: details,
});

// Old fetch using sorting/fitlering
// export const fetchPlaydates = (ord, ordBy, cityFilter) => {
//   return async (dispatch, getState) => {
//     try {
//       const playdatesCount = getState().playdate.allPlaydates.length;
//       const order = ord ? ord : `DESC`;
//       const orderBy = ordBy ? ordBy : `createdAt`;
//       const city = cityFilter ? cityFilter : "";
//       const response = await axios.get(
//         `${apiUrl}/playdates?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${playdatesCount}&order=${order}&by=${orderBy}&city=${city}`
//       );
//       console.log("hello?", response.data.playdates.rows, "order:",order, "by:", orderBy);
//       dispatch(fetchPlaydatesSuccess(response.data.playdates.rows));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// };

export const fetchPlaydates = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/playdates`);
      dispatch(fetchPlaydatesSuccess(response.data.playdates.rows));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const newPlaydate = (
  name,
  date,
  startTime,
  endTime,
  address,
  city,
  image,
  tag,
  description
) => {
  return async (dispatch, getState) => {
    try {
      const { id } = selectUser(getState());
      const res = await axios.post(`${apiUrl}/playdates/${id}`, {
        name,
        date,
        startTime,
        endTime,
        address,
        city,
        image,
        tag,
        description,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchPlaydateDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/playdates/${id}`);
      dispatch(fetchPlaydateDetailsSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
