import React from 'react';
import { usePasswordGenerator } from './hooks/usePasswordGenerator';
import { translations } from './utils/translations';
import { TopNavigation } from './components/TopNavigation';
import { PasswordDisplay } from './components/PasswordDisplay';
import { SettingsPanel } from './components/SettingsPanel';
import { Zap } from 'lucide-react';

export default function App() {
  const {
    password, copied, isGenerating, lang, isDark, length, options, strength,
    setLength, toggleLang, toggleDark, handleOptionChange, copyToClipboard, generatePassword
  } = usePasswordGenerator();

  const t = translations[lang];

  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden transition-colors duration-500 bg-slate-50 dark:bg-black dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-[#0a0f1c] dark:to-black text-slate-900 dark:text-slate-200 font-sans relative flex flex-col selection:bg-indigo-100 dark:selection:bg-indigo-950">
      
      {/* Ambientní pozadí */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-200/50 dark:from-indigo-500/10 to-transparent blur-[100px] rounded-full" />
      </div>

      <TopNavigation 
        lang={lang} 
        isDark={isDark} 
        toggleLang={toggleLang} 
        toggleDark={toggleDark} 
      />

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-8 py-20 sm:py-24 flex flex-col items-center justify-center z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 overflow-y-auto">
        
        {/* Nadpis sekce */}
        <div className="text-center mb-10 w-full">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-6 transition-colors shadow-sm">
            <Zap size={16} />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 tracking-tight leading-tight transition-all">
            {t.title}
          </h1>
        </div>

        {/* Hlavní karta generátoru */}
        <div className="relative group w-full w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 dark:from-emerald-500 dark:to-cyan-500 rounded-[2.5rem] blur-lg opacity-20 dark:opacity-30 md:group-hover:opacity-40 md:dark:group-hover:opacity-50 transition duration-1000" />
          
          <div className="relative bg-white dark:bg-slate-900/90 dark:backdrop-blur-2xl border border-slate-200 dark:border-slate-700/50 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl dark:shadow-2xl transition-colors w-full flex flex-col">
            <PasswordDisplay 
              password={password}
              isGenerating={isGenerating}
              strength={strength}
              copied={copied}
              onGenerate={generatePassword}
              onCopy={copyToClipboard}
            />

            <SettingsPanel 
              t={t}
              length={length}
              options={options}
              strength={strength}
              setLength={setLength}
              handleOptionChange={handleOptionChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
}