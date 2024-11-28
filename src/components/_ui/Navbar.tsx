import Link from "next/link";
import ThemeSwitcher from "@/components/_ui/ThemeSwitcher";
import { Bars3Icon } from "@heroicons/react/24/solid";

const links = [
    { href: "/", label: "Home" },
    { href: "/components", label: "Components" },
    { href: "/examples", label: "Examples" },
    { href: "/custom", label: "Custom" },
];

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            {/* nav start */}
            <div className="navbar-start">
                {/* mobile */}
                <div className="dropdown">
                    {/* hamburger icon */}
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden pr-2"
                    >
                        <Bars3Icon className="size-6" />
                    </div>
                    {/* dropdown menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-200 rounded-box z-[99999] mt-3 w-52 p-2 shadow-lg"
                    >
                        {links.map(({ href, label }, index) => (
                            <li key={`mobile-${index}`}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* daisyui link/logo */}
                <Link
                    href="https://daisyui.com/"
                    className="btn btn-ghost text-xl pl-2"
                >
                    DaisyUI
                </Link>
            </div>
            {/* nav middle */}
            <div className="navbar-center hidden lg:flex">
                {/* desktop menu */}
                <ul className="menu menu-horizontal px-1 text-base">
                    {links.map(({ href, label }, index) => (
                        <li key={`desktop-${index}`}>
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* nav end */}
            <div className="navbar-end">
                {/* theme picker button */}
                <ThemeSwitcher />
            </div>
        </div>
    );
}
