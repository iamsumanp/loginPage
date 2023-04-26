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
        "https://apptesting.docsumo.com/api/v1/eevee/validate/login/?type=email",
        { email: email, password: password },
        config,
        {
          params: { type: "email" },
        }
      )
      .then((response) => response.data);

    dispatch({ type: FETCH_LOGIN_SUCCESS, payload: firstValidationData });

    // dispatch({ type: FETCH_USER_REQUEST });
    // // const headers = { 'X-CSRF-Token': cookieKey }
    // const authData = await axios
    //   .post(
    //     "https://apptesting.docsumo.com/api/v1/eevee/login/",
    //     { email: email, password: password },
    //     config
    //   )
    //   .then((resp) => resp.data);

    // dispatch({ type: GET_LOGIN_DETAILS, payload: authData });
  } catch (error) {
    dispatch({ type: FETCH_USER_LOGIN_ERROR, payload: error });
  }
};
