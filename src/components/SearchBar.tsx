import { BsSearch as SearchIcon } from "react-icons/bs";

export default function SearchBar() {
    return (
        <form className="flex justify-between gap-2">
            <label className="block flex-1 relative">
                <span
                    className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                    aria-hidden="true"
                >
                    <SearchIcon />
                </span>
                <span className="sr-only">Search GitHub Username</span>
                <input
                    type="text"
                    className="block w-full pl-8 p-2.5 bg-transparent rounded-lg placeholder-white border-none outline-none ring-1 ring-transparent focus:ring-blue"
                    placeholder="GitHub Username..."
                />
            </label>

            <button className="font-semibold border-none outline-none p-2 bg-blue rounded-lg ring-1 ring-transparent focus:ring-white">
                Search
            </button>
        </form>
    );
}
