import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { IUser, loginUser } from ".";

interface AccountState {
  user: IUser | null;
}

const initialState: AccountState = {
  user: null,
};

export const signInUser = createAsyncThunk<IUser, any>(
  "account/signInUser",
  async (data, thunkAPI) => {
    try {
      const userDto = await loginUser(data);
      localStorage.setItem("user", JSON.stringify(userDto));
      return userDto;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    signOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(signInUser.rejected), (state, action) => {
      throw action.payload;
    });
  },
});

export const { signOut } = accountSlice.actions;
