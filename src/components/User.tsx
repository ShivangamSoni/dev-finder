import { type IconType } from "react-icons";
import {
    ImLocation as LocationIcon,
    ImLink as LinkIcon,
    ImTwitter as TwitterIcon,
} from "react-icons/im";
import { BsBuildingsFill as OrganizationIcon } from "react-icons/bs";
import { ReactNode } from "react";
import Link from "./Link";

export default function User() {
    return (
        <div className="grid gap-6 py-4">
            <div className="grid grid-cols-[auto_1fr] gap-4">
                <img
                    className="w-16 h-16 sm:w-28 sm:h-28 rounded-full object-top object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="User"
                />
                <div className="grid">
                    <h2 className="text-lg sm:text-xl font-semibold">User</h2>
                    <Link
                        className="text-xs sm:text-base text-blue"
                        target="_blank"
                        href={"https://github.com/username"}
                        aria-label="GitHub Profile"
                        title="GitHub Profile"
                    >
                        @Username
                    </Link>
                    <time>Joined 19 Mar 2023</time>
                </div>
                <p className="col-span-2 text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque molestias reprehenderit veniam! Molestiae officia,
                    iste voluptatem est quibusdam soluta hic.
                </p>
            </div>

            <div className="grid gap-6">
                <ul className="flex items-center justify-between flex-wrap p-6 rounded-lg bg-darkBlue500">
                    <Stat label="Repos" value="34" />
                    <Stat label="Followers" value="40" />
                    <Stat label="Following" value="90" />
                </ul>

                <ul className="grid gap-4 sm:grid-cols-2">
                    <Info
                        label="Users Location"
                        url={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            "Denmark",
                        )}`}
                        icon={LocationIcon}
                    >
                        Denmark
                    </Info>
                    <Info
                        label="Users Personal Website/Blog"
                        url="https://YouTube.com/"
                        icon={LinkIcon}
                    >
                        https://www.youtube.com/
                    </Info>
                    <Info
                        label="Users Twitter Handle"
                        url={`https://twitter.com/${"UserHandle"}`}
                        icon={TwitterIcon}
                    >
                        @UserHandle
                    </Info>
                    <Info
                        label="Organization the user is Associated to"
                        url={`https://github.com/${"usercorp"}`}
                        icon={OrganizationIcon}
                    >
                        @UserCorp
                    </Info>
                </ul>
            </div>
        </div>
    );
}

const Stat = ({ label, value }: { label: string; value: string }) => (
    <li className="grid text-center gap-2">
        <span className="text-grey text-xs sm:text-base">{label}</span>
        <span className="font-semibold text-base sm:text-lg">{value}</span>
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
        className={`flex items-center gap-2 text-base ${
            !url ? "text-grey" : "text-white"
        }`}
        aria-label={label}
        title={label}
    >
        <span className="text-xl">
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
