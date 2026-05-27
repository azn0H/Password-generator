import React from 'react';
import { Copy, RefreshCw, Check } from 'lucide-react';

interface Props {
  password: string;
  isGenerating: boolean;
  strength: number;
  copied: boolean;
  onGenerate: () => void;
  onCopy: () => void;
}

export const PasswordDisplay = ({ password, isGenerating, strength, copied, onGenerate, onCopy }: Props) => (
  <div className="relative group/input mb-10 w-full overflow-hidden rounded-3xl shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 blur-xl opacity-0 md:group-hover/input:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-slate-50 dark:bg-black/60 p-6 sm:p-10 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700/50 md:hover:border-slate-300 md:dark:hover:border-slate-600 transition-colors w-full min-h-[220px]">
      
      {/* Zobrazení hesla - Velké písmo, break-all, vycentrováno */}
      <div className="flex-1 w-full flex items-center justify-center mb-8 min-h-[80px]">
        <span 
          className={`text-3xl sm:text-4xl lg:text-5xl font-mono tracking-tight break-all text-center transition-all duration-300 font-light leading-snug md:leading-tight w-full ${
            isGenerating ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100 blur-0'
          } ${strength < 4 ? 'text-slate-900 dark:text-white' : 'text-emerald-600 dark:text-emerald-400'}`}
        >
          {password}
        </span>
      </div>

      {/* Ovládací tlačítka - Přesunuta pod heslo, masivně zvětšena */}
      <div className="flex gap-3 sm:gap-4 w-full max-w-sm mx-auto mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
        <button
          onClick={onGenerate}
          className="w-16 sm:w-20 h-16 bg-slate-200 md:hover:bg-slate-300 dark:bg-slate-800 md:dark:hover:bg-slate-700 rounded-2xl transition-all duration-200 text-slate-600 md:hover:text-slate-900 dark:text-slate-300 md:dark:hover:text-white active:rotate-180 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 flex items-center justify-center shrink-0 shadow-sm"
        >
          <RefreshCw size={24} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={onCopy}
          disabled={!password}
          className={`h-16 flex-1 rounded-2xl transition-all duration-300 flex items-center justify-center active:scale-95 overflow-hidden relative focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-lg ${
            copied 
              ? 'bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] focus:ring-emerald-500' 
              : 'bg-indigo-600 md:hover:bg-indigo-700 dark:bg-indigo-500 md:dark:hover:bg-indigo-400 text-white shadow-[0_0_30px_rgba(79,70,229,0.3)] focus:ring-indigo-500'
          }`}
        >
          <div className="relative z-10 flex items-center justify-center">
            {copied ? <Check size={28} className="animate-in zoom-in duration-200" /> : <Copy size={28} />}
          </div>
        </button>
      </div>
    </div>
  </div>
);