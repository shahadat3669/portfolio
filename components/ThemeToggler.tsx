import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { cn } from '@/libs/utils';

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (enabled) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [enabled]);
  if (!mounted) {
    return null;
  }
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={cn(
        'c-toggle relative inline-flex h-6 w-11 items-center rounded-full c-toggle--bg-light',
        enabled && 'c-toggle--bg-dark'
      )}>
      <span className="sr-only">Toggle theme</span>
      <span
        className={cn(
          'inline-block h-4 w-4 rounded-full transition c-toggle--light translate-x-1',
          enabled && 'c-toggle--dark translate-x-6'
        )}
      />
    </Switch>
  );
};

export default ThemeToggler;
