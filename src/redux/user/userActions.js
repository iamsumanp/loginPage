import axios from "axios";
import {
  FETCH_LOGIN_REQUEST,
  FETCH_USER_LOGIN_ERROR,
  GET_LOGIN_DETAILS,
  FETCH_LOGIN_SUCCESS,
  FETCH_USER_REQUEST,
  SAVE_RESPONSE_COOKIE,
} from "../constants/constants";

// @ts-check
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_LOGIN_REQUEST });
    const config = {
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "application/json",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU0OTMzMzM2OWQ4YWU0YmIwNDU1NDA1IiwiaWF0IjoxNjgyNTc1NDgwLCJyb2xlIjoib3duZXIiLCJvcmdfaWQiOiI1ZTQ5MzMzMzY5ZDhhZTRiYjA0NTU0MDUiLCJpc19vdHQiOnRydWUsIm1vZGUiOiJwcm9kIiwiZXhwIjoxNjgyNTc1NzgwfQ._OB1m29yClBrjBo94nc9IkLcR_3vrtISKAyy-D3VfOQ",
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
      .then((response) => {
        console.log(response);
        return response;
      });

    console.log(firstValidationData);

    dispatch({ type: FETCH_LOGIN_SUCCESS, payload: firstValidationData.data });

    // dispatch({
    //   type: SAVE_RESPONSE_COOKIE,
    //   // ? payload: firstValidationData.headers["set-cookie"],
    //   payload: "sefef",
    // });

    // const headers = {
    //   token:
    //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU0OTMzMzM2OWQ4YWU0YmIwNDU1NDA1IiwiaWF0IjoxNjgyNTc1NDgwLCJyb2xlIjoib3duZXIiLCJvcmdfaWQiOiI1ZTQ5MzMzMzY5ZDhhZTRiYjA0NTU0MDUiLCJpc19vdHQiOnRydWUsIm1vZGUiOiJwcm9kIiwiZXhwIjoxNjgyNTc1NzgwfQ._OB1m29yClBrjBo94nc9IkLcR_3vrtISKAyy-D3VfOQ",
    // };

    dispatch({ type: FETCH_USER_REQUEST });
    const authData = await axios
      .post(
        "https://apptesting.docsumo.com/api/v1/eevee/login/",
        { email: email, password: password },
        config
      )
      .then((resp) => resp.data);

    dispatch({ type: GET_LOGIN_DETAILS, payload: authData });
  } catch (error) {
    dispatch({ type: FETCH_USER_LOGIN_ERROR, payload: error });
  }
};
// export const saveResponseCookie = (cookie) => async (dispatch) => {
//   try {
//     dispatch({});
//   } catch (error) {
//     dispatch({ type: FETCH_USER_LOGIN_ERROR });
//   }
// };
export const saveResponseCookie = (cookie) => {
  return {
    type: SAVE_RESPONSE_COOKIE,
    payload: cookie,
  };
};

// export const makeSecondAPICall = () => {
//   return (dispatch, getState) => {
//     const cookie = getState().responseCookie; // Get the saved response cookie from your Redux store
//     axios.post('https://my-second-api.com', null, {
//       headers: {
//         'Cookie': cookie // Pass the saved response cookie as a header in the second API call
//       }
//     })
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };
