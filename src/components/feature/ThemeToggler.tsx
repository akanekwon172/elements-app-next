// 'use client';
// import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/Button';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {/* <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-[1.2rem] rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all " />
      <Moon className="absolute size-[1.2rem] rotate-0 scale-0 transition-all " />
    </Button>
  );
};

export default ThemeToggler;
