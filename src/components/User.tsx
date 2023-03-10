import { type ReactNode } from "react";
import { type Endpoints } from "@octokit/types";

import { numberFormatter } from "@utils/numberFormatter";
import { dateFormatter } from "@utils/dateFormatter";

import { type IconType } from "react-icons";
import {
    ImLocation as LocationIcon,
    ImLink as LinkIcon,
    ImTwitter as TwitterIcon,
} from "react-icons/im";
import { BsBuildingsFill as OrganizationIcon } from "react-icons/bs";

import Link from "./Link";

export type UserData = Endpoints["GET /users/{username}"]["response"]["data"];

export default function User({
    avatar_url,
    login: username,
    name,
    html_url,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
}: UserData) {
    const displayName = name || username;
    const joiningDate = dateFormatter.format(new Date(created_at));

    return (
        <div className="grid gap-6 py-4 md:grid-cols-[11rem_1fr] relative">
            {username === "ShivangamSoni" && (
                <span
                    className="absolute -top-4 -left-4 px-2 py-0.5 text-xs font-light uppercase text-amber-500 bg-amber-100 rounded-full"
                    title="I created this Web App"
                >
                    That's Me
                </span>
            )}
            <div className="grid grid-cols-[auto_1fr] gap-4 md:row-start-1 md:col-span-2 md:gap-x-8">
                <img
                    className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 md:row-span-2 rounded-full object-top object-cover"
                    src={avatar_url}
                    alt={displayName}
                />
                <div className="grid md:grid-cols-[1fr_auto]">
                    <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-black dark:text-white">
                        {displayName}
                    </h2>
                    <Link
                        className="text-xs sm:text-base md:text-lg text-blue"
                        target="_blank"
                        href={html_url}
                        aria-label={`${displayName}s' GitHub Profile`}
                        title={`${displayName}s' GitHub Profile`}
                    >
                        @{username}
                    </Link>
                    <time className="md:row-start-1 md:col-start-2 md:text-right">
                        Joined {joiningDate}
                    </time>
                </div>
                <p
                    className={`col-span-2 md:col-auto text-base ${
                        bio === null ? "text-grey" : ""
                    }`}
                >
                    {bio || "This profile has no Bio."}
                </p>
            </div>

            <div className="grid gap-6 md:col-start-2">
                <ul className="flex items-center justify-between flex-wrap p-6 rounded-lg bg-lightBlue50 dark:bg-darkBlue500">
                    <Stat
                        label="Repos"
                        value={numberFormatter.format(public_repos)}
                    />
                    <Stat
                        label="Followers"
                        value={numberFormatter.format(followers)}
                    />
                    <Stat
                        label="Following"
                        value={numberFormatter.format(following)}
                    />
                </ul>

                <ul className="grid gap-4 sm:grid-cols-2">
                    <Info
                        label={`${displayName}s' Location`}
                        url={
                            location
                                ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                      location,
                                  )}`
                                : null
                        }
                        icon={LocationIcon}
                    >
                        {location || "Not Available"}
                    </Info>
                    <Info
                        label={`${displayName}s' Twitter Handle`}
                        url={
                            twitter_username
                                ? `https://twitter.com/${twitter_username}`
                                : null
                        }
                        icon={TwitterIcon}
                    >
                        {twitter_username || "Not Available"}
                    </Info>
                    <Info
                        label={`${displayName}s' Personal Website/Blog`}
                        url={blog}
                        icon={LinkIcon}
                    >
                        {blog || "Not Available"}
                    </Info>
                    <Info
                        label={`${displayName} is Associated to ${
                            company || "No Organization"
                        }`}
                        url={
                            company
                                ? `https://github.com/${company.replace(
                                      "@",
                                      "",
                                  )}`
                                : null
                        }
                        icon={OrganizationIcon}
                    >
                        {company || "Not Available"}
                    </Info>
                </ul>
            </div>
        </div>
    );
}

const Stat = ({ label, value }: { label: string; value: string }) => (
    <li className="grid text-center gap-2">
        <span className="text-grey text-xs sm:text-base">{label}</span>
        <span className="text-black dark:text-white font-semibold text-base sm:text-lg">
            {value}
        </span>
    </li>
);

const Info = ({
    children,
    label,
    icon: Icon,
    url = null,
}: {
    children: ReactNode;
    label: string;
    url?: string | null;
    icon: IconType;
}) => (
    <li
        className={`flex items-center gap-2 text-base md:text-sm ${
            !url ? "text-grey" : "text-lightBlue500 dark:text-white"
        }`}
        aria-label={label}
        title={label}
    >
        <span>
            <Icon />
        </span>
        {!url ? (
            <span>{children}</span>
        ) : (
            <Link target="_blank" href={url}>
                {children}
            </Link>
        )}
    </li>
);
