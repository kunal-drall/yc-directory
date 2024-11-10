import Navbar from "../components/Navbar";

export default function Layout({ childern }: Readonly<{childern : React.ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Navbar />
            {childern}
        </main>
    )
}