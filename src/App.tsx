import Header from "@components/Header";
import SearchBar from "@components/SearchBar";

import Section from "@layouts/Section";

export default function App() {
    return (
        <div className="font-space h-screen bg-darkBlue500 text-white flex items-center justify-center">
            <div className="max-w-screen-md w-10/12">
                <Header />
                <main className="grid gap-4">
                    <Section>
                        <SearchBar />
                    </Section>
                </main>
            </div>
        </div>
    );
}
