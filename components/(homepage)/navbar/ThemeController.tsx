"use client";

import { useEffect, useState } from "react";

const themes = [
    {
        name: "Light",
        value: "light",
    },
    {
        name: "Dark",
        value: "dark",
    },
    {
        name: "Cupcake",
        value: "cupcake",
    },
    {
        name: "Bumblebee",
        value: "bumblebee",
    },
    {
        name: "Emerald",
        value: "emerald",
    },
    {
        name: "Corporate",
        value: "corporate",
    },
    {
        name: "Synthwave",
        value: "synthwave",
    },
    {
        name: "Retro",
        value: "retro",
    },
    {
        name: "Cyberpunk",
        value: "cyberpunk",
    },
    {
        name: "Valentine",
        value: "valentine",
    },
    {
        name: "Halloween",
        value: "halloween",
    },
    {
        name: "Garden",
        value: "garden",
    },
    {
        name: "Forest",
        value: "forest",
    },
    {
        name: "Aqua",
        value: "aqua",
    },
    {
        name: "Lofi",
        value: "lofi",
    },
    {
        name: "Pastel",
        value: "pastel",
    },
    {
        name: "Fantasy",
        value: "fantasy",
    },
    {
        name: "Wireframe",
        value: "wireframe",
    },
    {
        name: "Black",
        value: "black",
    },
    {
        name: "Luxury",
        value: "luxury",
    },
    {
        name: "Dracula",
        value: "dracula",
    },
    {
        name: "CMYK",
        value: "cmyk",
    },
    {
        name: "Autumn",
        value: "autumn",
    },
    {
        name: "Business",
        value: "business",
    },
    {
        name: "Acid",
        value: "acid",
    },
    {
        name: "Lemonade",
        value: "lemonade",
    },
    {
        name: "Night",
        value: "night",
    },
    {
        name: "Coffee",
        value: "coffee",
    },
    {
        name: "Winter",
        value: "winter",
    },
    {
        name: "Dim",
        value: "dim",
    },
    {
        name: "Nord",
        value: "nord",
    },
    {
        name: "Sunset",
        value: "sunset",
    },
];

export default function ThemeController() {
    const [_theme, setTheme] = useState<{ name: string; value: string }>({ name: "", value: "" });

    const handleThemeChange = (newTheme: string) => {
        localStorage.setItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme({ name: themes.find((theme) => theme.value === newTheme)?.name || "", value: newTheme });
    };

    useEffect(() => {
        const LSTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "");
        if (LSTheme) {
            document.documentElement.setAttribute("data-theme", LSTheme);
            setTheme({ name: themes.find((theme) => theme.value === LSTheme)?.name || "", value: LSTheme });
        } else {
            localStorage.setItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme({ name: "Dark", value: "dark" });
        }
    }, []);

    return (
        <div className="dropdown z-[9999999]">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-primary m-1"
            >
                Theme ({_theme.name})
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-[1] p-2 shadow-2xl !right-0 !w-fit !max-h-[280px] !overflow-auto"
            >
                {themes.map((theme) => (
                    <li key={theme.value}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={theme.name}
                            value={theme.value}
                            checked={theme.value === _theme.value}
                            onChange={() => handleThemeChange(theme.value)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
