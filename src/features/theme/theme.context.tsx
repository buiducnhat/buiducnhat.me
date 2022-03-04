import React, { createContext, Dispatch, useEffect, useReducer } from 'react';

import { ThemeAction, ThemeState } from './theme.model';
import { themeReducer } from './theme.reducer';
import { loadFromLocal, setToLocal } from './theme.service';

const initialState: ThemeState = {
  type: 'dark',
};

export const ThemeContext = createContext<
  [state: ThemeState, dispatch: Dispatch<ThemeAction>]
>([initialState, () => null]);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    const theme = loadFromLocal();
    dispatch({ type: 'setTheme', payload: theme });
  }, []);

  useEffect(() => {
    setToLocal(state);
  }, [state]);

  useEffect(() => {
    state.type === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [state.type]);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
