import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { request } from "@octokit/request";

import { toast } from "react-hot-toast";

import { useLocalStorage } from "@hooks/useLocalStorage";

import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import User, { type UserData } from "@components/User";
import Footer from "@components/Footer";

import LoadingSpinner from "@components/LoadingSpinner";
import Section from "@layouts/Section";

export default function App() {
    const [username, setUsername] = useState("ShivangamSoni");
    const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme");
    const {
        data: userData,
        refetch,
        isLoading,
    } = useQuery(
        ["user", username],
        async (): Promise<UserData> => {
            try {
                const { data } = await request("GET /users/{username}", {
                    username,
                });
                return data;
            } catch {
                toast.error(`"${username.toUpperCase()}" doesn't exist`);
                return userData as UserData;
            }
        },
        {
            keepPreviousData: true,
            retry: false,
        },
    );

    useEffect(() => {
        // return if already set either Automatically or by user preference
        if (theme) return;
        const dark = window.matchMedia("(prefers-color-scheme: dark)");
        setTheme(dark ? "dark" : "light");
    }, [theme]);

    useEffect(() => {
        refetch();
    }, [username]);

    useEffect(() => {
        const body = document.body;
        if (theme === "dark") {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="font-space min-h-screen bg-lightBlue50 text-grey dark:bg-darkBlue500 dark:text-white flex items-center justify-center py-8">
            <div className="max-w-screen-md w-10/12">
                <Header
                    isDark={theme === "dark"}
                    onToggleTheme={() =>
                        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                    }
                />
                <main className="grid gap-4">
                    <Section>
                        <SearchBar
                            isLoading={isLoading}
                            onSubmit={setUsername}
                        />
                    </Section>
                    <Section className="p-6">
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <User {...userData!} />
                        )}
                    </Section>
                </main>
                <Footer loadMyProfile={setUsername} />
            </div>
        </div>
    );
}
