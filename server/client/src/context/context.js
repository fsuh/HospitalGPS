import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import {
  SET_LOADING,
  SET_HOSPITALS,
  HANDLE_PAGE,
  HANDLE_CITY,
  HANDLE_ADDRESS,
  HANDLE_CODE,
} from "./actions";

import reducer from "./reducer";

const customFetch = axios.create({ baseURL: "api/v1" });

const API_ENDPOINT = "/hospital";

const initialState = {
  isLoading: true,
  hospitals: [],
  query1: "",
  query2: "",
  query3: "",
  page: 0,
  numOfPages: 0,
  totalHospitals: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchHospitals = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await customFetch.get(url);
      const { data } = response;
      dispatch({
        type: SET_HOSPITALS,
        payload: {
          hospitals: data.hospitals,
          numOfPages: data.numOfPages,
          totalHospitals: data.totalHospitals,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCity = (query1) => {
    dispatch({ type: HANDLE_CITY, payload: query1 });
  };
  const handleAddress = (query2) => {
    dispatch({ type: HANDLE_ADDRESS, payload: query2 });
  };
  const handleCode = (query3) => {
    dispatch({ type: HANDLE_CODE, payload: query3 });
  };

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };
  // bind handleSearch to dispatch
  //   const boundActions = {
  //     handleSearch: handleSearch.bind(null, dispatch),
  //     handlePage,
  //   };
  useEffect(() => {
    fetchHospitals(
      `${API_ENDPOINT}?city=${state.query1}&address=${state.query2}&postinumero=${state.query3}&page=${state.page}`
    );
  }, [state.query1, state.query2, state.query3, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, handleCity, handleAddress, handleCode, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
