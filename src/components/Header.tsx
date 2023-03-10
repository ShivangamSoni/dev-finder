import { BsSunFill as LightIcon, BsMoonFill as DarkIcon } from "react-icons/bs";

export default function Header({
    onToggleTheme,
    isDark,
}: {
    isDark: boolean;
    onToggleTheme: () => void;
}) {
    return (
        <header className="flex items-center justify-between mb-8 text-black dark:text-white">
            <h1 className="text-xl sm:text-2xl font-semibold">Dev-Finder</h1>
            <button
                className="text-lightBlue500 dark:text-white flex items-center justify-between gap-2 text-base sm:text-lg uppercase tracking-widest border-none outline-none ring-1 ring-transparent rounded-lg px-2 py-1 hover:ring-blue focus-visible:ring-blue"
                onClick={onToggleTheme}
                aria-label={`Switch to ${
                    isDark ? "Light Theme" : "Dark Theme"
                }`}
                title={`Switch to ${isDark ? "Light Theme" : "Dark Theme"}`}
            >
                <span>{isDark ? "Light" : "Dark"}</span>
                {isDark ? <LightIcon /> : <DarkIcon />}
            </button>
        </header>
    );
}
