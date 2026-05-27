import React from 'react';

interface Props {
  t: any;
  length: number;
  options: any;
  strength: number;
  setLength: (v: number) => void;
  handleOptionChange: (opt: any) => void;
}

export const SettingsPanel = ({ t, length, options, strength, setLength, handleOptionChange }: Props) => {
  const config = [
    { id: 'uppercase', label: t.uppercase, sub: 'A-Z' },
    { id: 'lowercase', label: t.lowercase, sub: 'a-z' },
    { id: 'numbers', label: t.numbers, sub: '0-9' },
    { id: 'symbols', label: t.symbols, sub: '!@#$' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 flex-1">
      
      {/* Integrovaná sekce síly hesla */}
      <div className="bg-slate-50 dark:bg-slate-800/30 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 transition-colors w-full shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t.strength}</span>
          <span className="text-sm font-bold text-slate-900 dark:text-white transition-all">
            {strength < 2 ? t.weak : strength < 4 ? t.good : t.strong}
          </span>
        </div>
        
        {/* LED Indikátor síly */}
        <div className="flex gap-1.5 h-1.5 w-full mb-8 shrink-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 rounded-full transition-all duration-700 ease-out ${
                i < strength 
                  ? strength < 2 
                    ? 'bg-rose-500 dark:shadow-[0_0_10px_rgba(244,63,94,0.5)]' 
                    : strength < 4 
                      ? 'bg-amber-400 dark:shadow-[0_0_10px_rgba(251,191,36,0.5)]' 
                      : 'bg-emerald-500 dark:shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                  : 'bg-slate-200 dark:bg-slate-800/80'
              }`}
            />
          ))}
        </div>

        {/* Nastavení délky */}
        <div className="flex justify-between items-end mb-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t.length}</label>
          <span className="text-3xl font-light text-slate-900 dark:text-white leading-none font-mono tracking-tight">{length}</span>
        </div>
        <input
          type="range"
          min="8"
          max="64"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 dark:bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-600 dark:hover:accent-emerald-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        />
      </div>

      {/* Volby znaků - Stabilní grid, neposouvá se */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full pt-6 border-t border-slate-200 dark:border-slate-700/50">
        {config.map(({ id, label, sub }) => (
          <label 
            key={id} 
            className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer select-none group ${
              options[id]
                ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/30'
                : 'bg-white dark:bg-slate-800/30 border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            <div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-300">{label}</div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-500 mt-1 font-mono tracking-tight">{sub}</div>
            </div>
            <div className="relative inline-flex items-center shrink-0">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={options[id]}
                onChange={() => handleOptionChange(id)}
              />
              <div className="w-12 h-6 sm:h-7 bg-slate-200 dark:bg-slate-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 sm:after:h-6 sm:after:w-6 after:transition-all peer-checked:bg-indigo-500 dark:peer-checked:bg-indigo-600 shadow-inner" />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};