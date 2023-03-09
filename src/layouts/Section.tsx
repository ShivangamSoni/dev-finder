import { type ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
    return (
        <section className="p-2 bg-darkBlue300 text-sm rounded-lg">
            {children}
        </section>
    );
}
