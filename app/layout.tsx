import "@/css/tailwind-base.css";
import metadataObject from "@/lib/nextjs/metadata";

export const metadata = metadataObject;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
