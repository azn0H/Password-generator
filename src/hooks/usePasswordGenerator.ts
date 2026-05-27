import { useState, useEffect, useCallback } from 'react';

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [lang, setLang] = useState<'cs' | 'en'>(() => {
    const saved = localStorage.getItem('pg-lang');
    return (saved as 'cs' | 'en') || 'cs';
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('pg-theme-dark');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [length, setLength] = useState(() => {
    const saved = localStorage.getItem('pg-length');
    return saved ? parseInt(saved, 10) : 16;
  });

  const [options, setOptions] = useState(() => {
    const saved = localStorage.getItem('pg-options');
    return saved ? JSON.parse(saved) : {
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    };
  });

  useEffect(() => {
    localStorage.setItem('pg-lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('pg-theme-dark', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('pg-length', length.toString());
  }, [length]);

  useEffect(() => {
    localStorage.setItem('pg-options', JSON.stringify(options));
  }, [options]);

  const calculateStrength = () => {
    let score = 0;
    if (length > 12) score += 2;
    else if (length > 8) score += 1;
    if (options.uppercase) score += 1;
    if (options.numbers) score += 1;
    if (options.symbols) score += 1;
    return score;
  };

  const generatePassword = useCallback(() => {
    setIsGenerating(true);
    const charSets = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
    };

    let availableChars = '';
    if (options.uppercase) availableChars += charSets.uppercase;
    if (options.lowercase) availableChars += charSets.lowercase;
    if (options.numbers) availableChars += charSets.numbers;
    if (options.symbols) availableChars += charSets.symbols;

    if (availableChars === '') {
      setPassword('');
      setIsGenerating(false);
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      newPassword += availableChars[randomIndex];
    }

    setTimeout(() => {
      setPassword(newPassword);
      setCopied(false);
      setIsGenerating(false);
    }, 150);
  }, [length, options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleOptionChange = (option: keyof typeof options) => {
    setOptions((prev: typeof options) => {
      const nextOptions = { ...prev, [option]: !prev[option] };
      if (!Object.values(nextOptions).some(Boolean)) return prev;
      return nextOptions;
    });
  };

  const copyToClipboard = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {}
  };

  const toggleLang = () => setLang(prev => prev === 'cs' ? 'en' : 'cs');
  const toggleDark = () => setIsDark(prev => !prev);

  return {
    password, copied, isGenerating, lang, isDark, length, options,
    setLength, toggleLang, toggleDark, handleOptionChange,
    copyToClipboard, generatePassword, strength: calculateStrength()
  };
};