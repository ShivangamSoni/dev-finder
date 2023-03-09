import { BsSunFill as LightIcon } from "react-icons/bs";

export default function Header() {
    return (
        <header className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Dev-Finder</h1>
            <button className="flex items-center justify-between gap-2 text-lg uppercase tracking-widest border-none outline-none ring-1 ring-transparent rounded-lg px-2 py-1 hover:ring-blue focus-visible:ring-blue">
                <span>Light</span>
                <LightIcon />
            </button>
        </header>
    );
}