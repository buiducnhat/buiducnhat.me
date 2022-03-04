import React, { createContext, Dispatch, useEffect, useReducer } from 'react';

import { ThemeState } from './theme.model';
import { ThemeAction, themeReducer } from './theme.reducer';

const initialState: ThemeState = {
  type: 'dark',
};

export const ThemeContext = createContext<
  [state: ThemeState, dispatch: Dispatch<ThemeAction>]
>([initialState, () => null]);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

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
