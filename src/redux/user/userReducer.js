import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_USER_DETAILS_ERROR,
  FETCH_USER_LOGIN_ERROR,
  FETCH_USER_REQUEST,
  GET_LOGIN_DETAILS,
} from "../constants/constants";

const initialState = {
  user: {},
  error: "hello",
  isAuthenticated: false,
  loading: false,
  token: "",
  testUser: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };

    case FETCH_USER_REQUEST:
      return {
        ...state,
        isAuthenticated: true,
      };

    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        testUser: action.payload,
        user: action.payload, //? might be action.payload.user
        // loading: false,
      };
    case GET_LOGIN_DETAILS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case FETCH_USER_LOGIN_ERROR:
    case FETCH_USER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload, //? might be action.payload.error
      };

    default:
      return state;
  }
};

export const userDetails = () => {};
