import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
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

export const fetchPlaydates = () => {
  return async (dispatch, getState) => {
    try {
      const playdatesCount = getState().playdate.allPlaydates.length;
      const response = await axios.get(
        `${apiUrl}/playdates?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${playdatesCount}&order=ASC`
      );
      dispatch(fetchPlaydatesSuccess(response.data.playdates.rows));
    } catch (e) {
      console.log(e.message);
    }
  };
};
