import React from 'react';

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className = '', checked, onCheckedChange, id }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        onClick={() => onCheckedChange?.(!checked)}
        ref={ref}
        className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-zinc-800 dark:focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50 ${
          checked ? 'bg-zinc-900 dark:bg-white' : 'bg-zinc-200 dark:bg-zinc-800'
        } ${className}`}
      >
        <span
          className={`pointer-events-none block h-5 w-5 rounded-full bg-white dark:bg-zinc-950 shadow-lg ring-0 transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    );
  }
);
Switch.displayName = 'Switch';