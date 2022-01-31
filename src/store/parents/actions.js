import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appDoneLoading,
  appLoading,
  showMessageWithTimeout,
} from "../appState/actions";
import { selectToken } from "../user/selectors";

export const fetchParentData = (data) => ({
  type: "USER/fetchParentData",
  payload: data,
});

export const fetchParentWithKids = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/parent/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetchParentData(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e);
      dispatch(appDoneLoading());
    }
  };
};

export const addNewKidAction = (avatar, name, gender, birthDate, interests) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/parent/kid`,
        {
          avatar,
          name,
          gender,
          birthDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await axios.post(`${apiUrl}/parent/kid/interest`, {
        name: interests,
        kidId: response.data.newKid.id,
      });

      dispatch(fetchParentWithKids());
      dispatch(appDoneLoading());

      dispatch(
        showMessageWithTimeout("success", false, "New kid created!", 3000)
      );
    } catch (e) {
      console.log(e);
      dispatch(appDoneLoading());

      dispatch(
        showMessageWithTimeout(
          "danger",
          false,
          "Fill all fiels to create",
          3000
        )
      );
    }
  };
};

export const updateKidAction = (
  avatar,
  name,
  gender,
  birthDate,
  interests,
  kidId
) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${apiUrl}/parent/kid`, {
      avatar,
      name,
      gender,
      birthDate,
      interests,
      kidId,
    });
    // dispatch(fetchParentWithKids());

    dispatch(
      showMessageWithTimeout("success", false, "The kid is updated!", 3000)
    );
  };
};