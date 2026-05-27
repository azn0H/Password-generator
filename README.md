# Ultimátní Generátor Hesel (Premium Password Generator)

Minimalistická, vysoce responzivní a prémiová single-page aplikace (SPA) pro generování bezpečných hesel. Navrženo s důrazem na maximální bezpečnost (čistě klientská logika bez backendových zranitelností), špičkové UI/UX po vzoru Apple/Linear a plnou mobilní responzivitu.

## Klíčové vlastnosti

- **Prémiový Minimalistický Design**: Čistá paleta barev, jemné ambientní podsvícení, tenké linie a důraz na negativní prostor.
- **Vždy na jednom řádku**: Vygenerované heslo se nikdy neláme na více řádků a nerozbíjí layout. Pro extrémně dlouhá hesla na mobilu je implementováno horizontální scrollování se skrytým vizuálním posuvníkem.
- **Kompletní Persistence (F5 proof)**: Jazyk, tmavý režim, délka hesla i zvolené sady znaků se ukládají do `localStorage`. Při obnovení stránky se stav neztratí.
- **Bezpečné načítání tmavého režimu**: Ošetřeno proti probliknutí bílé barvy (FOUC) při startu aplikace na zařízeních s preferovaným tmavým režimem.
- **Plná lokalizace**: Přepínač mezi češtinou (CS) a angličtinou (EN) přímo v navigaci.
- **Custom UI Komponenty**: Nezávislé, vysoce optimalizované komponenty `Switch` a `Label` bez nutnosti instalace těžkých externích knihoven.

## Architektura a Struktura projektu

Projekt je modulárně rozdělen do logických celků pro snadnou udržovatelnost a škálovatelnost.

```text
src/
├── components/
│   ├── ui/
│   │   ├── Label.tsx
│   │   └── Switch.tsx
│   ├── PasswordDisplay.tsx
│   ├── SettingsPanel.tsx
│   └── TopNavigation.tsx
├── hooks/
│   └── usePasswordGenerator.ts
├── utils/
│   └── translations.ts
├── App.tsx
└── main.tsx

```
## Instalace a Spuštění

npm install
Prevence probliknutí (FOUC) a responzivita
Pro správné fungování tmavého režimu bez probliknutí a korektní zobrazení na mobilních zařízeních vložte do hlavičky <head> v souboru index.html tento kód:

## Spuštění lokálního serveru (v případě použití Vite):


npm run dev
## Použité technologie
React 18+

TypeScript

Tailwind CSS

Lucide React