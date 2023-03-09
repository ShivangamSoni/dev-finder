import { type DetailedHTMLProps, type HtmlHTMLAttributes } from "react";

export default function Section({
    children,
    className,
    ...props
}: DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement>) {
    return (
        <section
            className={`p-2 bg-darkBlue300 text-sm rounded-lg ${className}`}
            {...props}
        >
            {children}
        </section>
    );
}
