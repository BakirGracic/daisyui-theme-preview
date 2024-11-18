import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-[60dvh] mt-12 md:mt-20 flex items-center justify-center">
            <div className="prose text-center">
                <h1>404 | Not Found</h1>
                <p>The page you are looking for doesn&apos;t exist</p>
                <Link
                    className="btn btn-primary"
                    href="/"
                >
                    Homepage
                </Link>
            </div>
        </div>
    );
}
