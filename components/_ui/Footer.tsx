import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-center text-base-content topMargin">
            <aside className="p-4">
                {/* 1st row */}
                <div>
                    Built with ♥ by&nbsp;
                    <Link
                        href="https://bakir.dev"
                        target="_blank"
                        className="link"
                    >
                        Bakir
                    </Link>
                    &nbsp;for the&nbsp;
                    <Link
                        href="https://daisyui.com/"
                        target="_blank"
                        className="link"
                    >
                        DaisyUI
                    </Link>
                    &nbsp;community
                </div>

                {/* 2nd row */}
                <div>
                    <Link
                        href="/sitemap.xml"
                        target="_blank"
                        className="link"
                    >
                        Sitemap
                    </Link>
                    &nbsp;·&nbsp;
                    <Link
                        href="https://github.com/BakirGracic/daisyui-theme-preview"
                        target="_blank"
                        className="link"
                    >
                        GitHub
                    </Link>
                    &nbsp;·&nbsp;
                    <Link
                        href="https://github.com/BakirGracic/daisyui-theme-preview/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        className="link"
                    >
                        Contribute
                    </Link>
                    &nbsp;·&nbsp;
                    <Link
                        href="https://buymeacoffee.com/bakirgracic"
                        target="_blank"
                        className="link"
                    >
                        Donate
                    </Link>
                </div>
            </aside>
        </footer>
    );
}
