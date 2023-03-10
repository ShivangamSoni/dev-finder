import { FormEvent, useState } from "react";
import { BsSearch as SearchIcon } from "react-icons/bs";

export default function SearchBar({
    isLoading,
    onSubmit,
}: {
    isLoading: boolean;
    onSubmit: (username: string) => void;
}) {
    const [username, setUsername] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit(username);
        setUsername("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-between gap-2">
            <label className="block flex-1 relative sm:text-base">
                <span
                    className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-blue"
                    aria-hidden="true"
                >
                    <SearchIcon />
                </span>
                <span className="sr-only">Search GitHub Username</span>
                <input
                    type="text"
                    className="block w-full pl-8 p-2.5 bg-transparent rounded-lg text-lightBlue500 dark:text-white placeholder-grey border-none outline-none ring-1 ring-transparent focus:ring-blue"
                    placeholder="GitHub Username..."
                    disabled={isLoading}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>

            <button
                className="sm:text-base font-semibold border-none outline-none p-2 bg-blue text-white rounded-lg ring-1 ring-transparent hover:ring-darkBlue500 focus:ring-darkBlue500 dark:hover:ring-white dark:focus:ring-white"
                disabled={isLoading}
            >
                {isLoading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}
