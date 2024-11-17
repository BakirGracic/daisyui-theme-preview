import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-center text-base-content p-4 mt-10">
            <aside className="p-3">
                <p>
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
                </p>

                <p>
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
                        href="https://buymeacoffee.com/bakirgracic"
                        target="_blank"
                        className="link"
                    >
                        Donate
                    </Link>
                </p>
            </aside>
        </footer>
    );
}
