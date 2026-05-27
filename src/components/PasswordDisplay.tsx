import React from 'react';
import { Copy, RefreshCw, Check } from 'lucide-react';

interface Props {
  password: string;
  isGenerating: boolean;
  copied: boolean;
  onGenerate: () => void;
  onCopy: () => void;
}

export const PasswordDisplay = ({ password, isGenerating, copied, onGenerate, onCopy }: Props) => (
  <div className="relative mb-12 group">
    <div className="relative flex flex-col items-center justify-center gap-10 p-8 sm:p-10 rounded-[2rem] bg-zinc-50 dark:bg-[#121214] border border-zinc-200/80 dark:border-white/[0.05] transition-colors w-full min-h-[260px]">
      
      <div className="w-full flex items-center justify-center overflow-x-auto py-4 px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <span 
          className={`text-3xl sm:text-4xl lg:text-5xl font-mono tracking-tight whitespace-nowrap text-center transition-all duration-300 font-light leading-none ${
            isGenerating ? 'opacity-0 blur-md scale-95' : 'opacity-100 blur-0 scale-100'
          } text-zinc-900 dark:text-white`}
        >
          {password}
        </span>
      </div>

      <div className="flex gap-4 sm:gap-6 w-full max-w-sm mx-auto">
        <button
          onClick={onGenerate}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white bg-zinc-200/50 dark:bg-white/5 hover:bg-zinc-300/50 dark:hover:bg-white/10 transition-all duration-300 active:rotate-180 focus:outline-none"
        >
          <RefreshCw size={28} strokeWidth={1.5} />
        </button>
        <button
          onClick={onCopy}
          disabled={!password}
          className={`flex-1 h-16 sm:h-20 rounded-2xl sm:rounded-3xl transition-all duration-500 focus:outline-none overflow-hidden relative shadow-lg active:scale-95 ${
            copied 
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' 
              : 'bg-zinc-200/50 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300/50 dark:hover:bg-white/10'
          }`}
        >
          <div className="relative z-10 flex items-center justify-center">
            {copied ? <Check size={32} strokeWidth={2} className="animate-in zoom-in duration-300" /> : <Copy size={32} strokeWidth={1.5} />}
          </div>
        </button>
      </div>
    </div>
  </div>
);