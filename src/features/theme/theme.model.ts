export type ActionType = 'toLightMode' | 'toDarkMode' | 'toOSMode' | 'setTheme';

export interface ThemeAction {
  type: ActionType;
  payload: any;
}

export interface ThemeState {
  type: 'light' | 'dark' | 'os';
}
