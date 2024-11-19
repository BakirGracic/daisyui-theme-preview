import TopBar from "@/components/(examples)/top-bar/TopBar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <TopBar />
            <div className="mt-20">{children}</div>
        </>
    );
}
