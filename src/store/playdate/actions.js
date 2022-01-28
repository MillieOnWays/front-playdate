import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import { selectUser } from "../user/selectors";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const FETCH_PLAYDATES_SUCCESS = "FETCH_PLAYDATES_SUCCESS";

export const fetchPlaydatesSuccess = (playdates) => {
  return {
    type: FETCH_PLAYDATES_SUCCESS,
    payload: playdates,
  };
};

export const addNewPlaydate = (newPlaydate) => {
  return {
    type: "ADD_NEW_PLAYDATE",
    payload: newPlaydate,
  };
};

export const fetchPlaydates = () => {
  return async (dispatch, getState) => {
    try {
      //const playdatesCount = getState().playdates.allPlaydates.length;
      const response = await axios.get(`${apiUrl}/playdates`);

      dispatch(fetchPlaydatesSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

//?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${playdatesCount}&order=ASC

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
      console.log("New playdate info: ", res);
      dispatch(addNewPlaydate(res.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
