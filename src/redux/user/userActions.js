import axios from "axios";
import {
  FETCH_LOGIN_REQUEST,
  FETCH_USER_LOGIN_ERROR,
  GET_LOGIN_DETAILS,
  FETCH_LOGIN_SUCCESS,
  FETCH_USER_REQUEST,
} from "../constants/constants";

// @ts-check
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const firstValidationData = await axios
      .post(
        "/api/v1/eevee/validate/login/?type=email",
        { email: email, password: password },
        config,
        {
          params: { type: "email" },
        }
      )
      .then((response) => response.data);

    console.log(firstValidationData);

    dispatch({ type: FETCH_LOGIN_SUCCESS, payload: firstValidationData });

    dispatch({ type: FETCH_USER_REQUEST });
    const authData = await axios
      .post(
        "/api/v1/eevee/login/",
        { email: email, password: password },
        config
      )
      .then((resp) => resp.data);
    console.log(authData.data.user);

    dispatch({ type: GET_LOGIN_DETAILS, payload: authData.data.user });
  } catch (error) {
    dispatch({ type: FETCH_USER_LOGIN_ERROR, payload: error });
  }
};
