import React, { useEffect, useState } from 'react';
import {
  MdLightMode as LightModeIcon,
  MdDarkMode as DarkModeIcon,
} from 'react-icons/md';

import Switch from '@/components/commons/switch';
import { toDarkMode, toLightMode } from '@/services/dark-mode.service';
import useGetThemeMode from '@/hooks/use-get-theme-mode';

function SwitchThemeModeButton() {
  const { theme } = useGetThemeMode();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    isDarkMode ? toDarkMode() : toLightMode();
  }, [isDarkMode]);

  return (
    <div className="p-3 flex items-center">
      <Switch
        id="switch-theme-mode-button"
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      >
        <div className={`ml-2 text-primary-600 dark:text-primary-300 `}>
          {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
      </Switch>
    </div>
  );
}

export default SwitchThemeModeButton;
