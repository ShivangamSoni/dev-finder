import { type DetailedHTMLProps, type AnchorHTMLAttributes } from "react";

export default function Link({
    children,
    className,
    ...props
}: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>) {
    return (
        <a {...props}>
            <span
                className={`inline relative break-all border-none outline-none [background-image:linear-gradient(to_right,currentColor_0%,currentColor_50%,transparent_50%,transparent_100%)] bg-no-repeat [background-size:300%_0.15em] [background-position:100%_100%] transition-[background-position] duration-500 hover:[background-position:0%_100%] ${className}`}
            >
                {children}
            </span>
        </a>
    );
}
