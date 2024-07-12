import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalculatorState {
  display: string;
}

const initialState: CalculatorState = {
  display: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    appendSymbol: (state, action: PayloadAction<string>) => {
      state.display += action.payload;
    },
    clear: (state) => {
      state.display = '';
    },
    evaluate: (state) => {
      try {
        state.display = eval(state.display).toString();
      } catch {
        state.display = 'Error';
      }
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;

export const { appendSymbol, clear, evaluate } = calculatorSlice.actions;
