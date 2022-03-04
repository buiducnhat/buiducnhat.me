import React, { useContext } from 'react';
import {
  MdLightMode as LightModeIcon,
  MdDarkMode as DarkModeIcon,
} from 'react-icons/md';

import Switch from '@/components/commons/switch';
import { ThemeContext } from '@/features/theme/theme.context';

function SwitchThemeModeButton() {
  const [theme, dispatch] = useContext(ThemeContext);

  const toLightMode = () => dispatch({ type: 'toLightMode', payload: null });

  const toDarkMode = () => dispatch({ type: 'toDarkMode', payload: null });

  const onChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const needToDarkMode = e.target.checked;
    needToDarkMode ? toDarkMode() : toLightMode();
  };

  return (
    <div className="p-3 flex items-center">
      <Switch
        id="switch-theme-mode-button"
        checked={theme.type === 'dark'}
        onChange={onChangeSwitch}
      >
        <div className={`ml-2 text-primary-600 dark:text-primary-300 `}>
          {theme.type === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
      </Switch>
    </div>
  );
}

export default SwitchThemeModeButton;
