import { useQuery } from "react-query";
import { request } from "@octokit/request";

import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import User, { type UserData } from "@components/User";

import LoadingSpinner from "@components/LoadingSpinner";
import Section from "@layouts/Section";

import { useEffect, useState } from "react";

export default function App() {
    const [username, setUsername] = useState("ShivangamSoni");
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
                return userData as UserData;
            }
        },
        {
            keepPreviousData: true,
            retry: false,
        },
    );

    useEffect(() => {
        refetch();
    }, [username]);

    return (
        <div className="font-space min-h-screen bg-darkBlue500 text-white flex items-center justify-center py-8">
            <div className="max-w-screen-md w-10/12">
                <Header />
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
            </div>
        </div>
    );
}
