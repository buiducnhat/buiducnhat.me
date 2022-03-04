import { ThemeAction, ThemeState } from './theme.model';

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'toLightMode':
      return {
        ...state,
        type: 'light',
      };
    case 'toDarkMode':
      return {
        ...state,
        type: 'dark',
      };
    case 'toOSMode':
      return {
        ...state,
        type: 'os',
      };
    case 'setTheme':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
