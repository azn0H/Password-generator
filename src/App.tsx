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
    <div className="min-h-[100dvh] w-full overflow-x-hidden transition-colors duration-500 bg-white dark:bg-[#000000] text-zinc-900 dark:text-zinc-100 font-sans relative flex flex-col selection:bg-zinc-200 dark:selection:bg-zinc-800">
      
      {/* Ambient glimmer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-400/20 dark:from-white/10 to-transparent blur-[120px] rounded-full" />
      </div>

      <TopNavigation 
        lang={lang} 
        isDark={isDark} 
        toggleLang={toggleLang} 
        toggleDark={toggleDark} 
      />

      {/* Main container - Making it MUCH WIDER on mobile */}
      <main className="flex-1 w-full max-w-full lg:max-w-6xl mx-auto px-1 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 flex flex-col items-center justify-center z-10">
        
        <div className="text-center mb-10 sm:mb-16 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-tight">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-semibold mb-6 transition-all shadow-inner">
            <Zap size={16} />
            <span>By aznoh.cz</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-all break-words">
            {t.title}
          </h1>
        </div>

        {/* Main generator card - Full width on mobile, minimal padding */}
        <div className="w-full bg-white dark:bg-[#09090b] border border-zinc-200 dark:border-white/[0.08] p-3 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_80px_-20px_rgba(255,255,255,0.03)] transition-all">
          <PasswordDisplay 
            password={password}
            isGenerating={isGenerating}
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
      </main>
    </div>
  );
}