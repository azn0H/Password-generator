import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface Props {
  lang: 'cs' | 'en';
  isDark: boolean;
  toggleLang: () => void;
  toggleDark: () => void;
}

export const TopNavigation = ({ lang, isDark, toggleLang, toggleDark }: Props) => (
  <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex gap-6 z-50">
    <button
      onClick={toggleLang}
      className="text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors focus:outline-none"
    >
      {lang}
    </button>
    <button
      onClick={toggleDark}
      className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors focus:outline-none"
    >
      {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
    </button>
  </div>
);