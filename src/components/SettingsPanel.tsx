import { Switch } from "./ui/Switch";
import { Label } from "./ui/Label";

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
    { id: 'uppercase', label: t.uppercase },
    { id: 'lowercase', label: t.lowercase },
    { id: 'numbers', label: t.numbers },
    { id: 'symbols', label: t.symbols },
  ];

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16">
      
      {/* Strength indicator - Wide LED line */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            {t.strength}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-300">
            {strength < 2 ? t.weak : strength < 4 ? t.good : t.strong}
          </span>
        </div>
        <div className="flex gap-1.5 h-1.5 w-full mb-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 rounded-full transition-all duration-700 ease-out shadow-inner ${
                i < strength 
                  ? strength < 2 
                    ? 'bg-rose-500' 
                    : strength < 4 
                      ? 'bg-amber-400' 
                      : 'bg-emerald-500'
                  : 'bg-zinc-200 dark:bg-zinc-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Length control - Spreads full width */}
      <div>
        <div className="flex justify-between items-center mb-6 pt-4 border-t border-zinc-100 dark:border-white/[0.05]">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            {t.length}
          </label>
          <span className="text-3xl font-light text-zinc-900 dark:text-white font-mono tracking-tight transition-all leading-none">
            {length}
          </span>
        </div>
        <input
          type="range"
          min="8"
          max="64"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-600 dark:hover:accent-emerald-400 transition-all focus:outline-none"
        />
      </div>

      {/* Options grid - Wider, cleaner with minimalist labels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-8 sm:pt-10 border-t border-zinc-100 dark:border-white/[0.05]">
        {config.map(({ id, label }) => (
          <div key={id} className="flex items-center justify-between group py-1">
            <Label htmlFor={id} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors cursor-pointer">
              {label}
            </Label>
            <Switch 
              id={id}
              checked={options[id]}
              onCheckedChange={() => handleOptionChange(id)}
            />
          </div>
        ))}
      </div>

    </div>
  );
};