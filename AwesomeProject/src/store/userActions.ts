import axios from "axios";
import { LOGIN, LOGOUT, CHANGE_NAME, GET_DUCKS } from './actionTypes';
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";


export const getDucks = createAsyncThunk(
  'getDucks',
  async () => {
    try {
      const { data } = await axios.get('https://random-d.uk/api/v2/random')
      console.log(data)

      return data
    } catch (error) {
      console.log(error);

    }
  }
)
