import { request } from "@octokit/request";
import { useQuery } from "react-query";

import { type UserData } from "./User";

export default function Footer({
    loadMyProfile,
}: {
    loadMyProfile: (username: string) => void;
}) {
    const { data: userData, isLoading } = useQuery(
        "author",
        async (): Promise<UserData> => {
            const { data } = await request("GET /users/{username}", {
                username: "ShivangamSoni",
            });
            return data;
        },
        {
            retry: false,
        },
    );

    if (isLoading) return null;

    const { avatar_url, login } = userData!;

    return (
        <footer className="fixed bottom-2 right-2">
            <button
                className="flex items-center justify-center w-10 h-10 ring-4 ring-blue rounded-full overflow-hidden opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => loadMyProfile(login)}
                title="Coded By Shivangam Soni"
                aria-label="Coded By Shivangam Soni"
            >
                <img className="" src={avatar_url} alt="Shivangam Soni" />
            </button>
        </footer>
    );
}
