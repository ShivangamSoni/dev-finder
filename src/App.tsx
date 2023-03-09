import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import User from "@components/User";

import Section from "@layouts/Section";

export default function App() {
    return (
        <div className="font-space min-h-screen bg-darkBlue500 text-white flex items-center justify-center py-8">
            <div className="max-w-screen-md w-10/12">
                <Header />
                <main className="grid gap-4">
                    <Section>
                        <SearchBar />
                    </Section>
                    <Section className="p-6">
                        <User />
                    </Section>
                </main>
            </div>
        </div>
    );
}
