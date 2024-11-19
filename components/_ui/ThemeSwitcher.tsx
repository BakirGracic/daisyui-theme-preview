"use client";

import { CurrentTheme } from "@/types/theme_switcher";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const themes: CurrentTheme[] = [
    { name: "Custom", value: "custom" },
    { name: "Light", value: "light" },
    { name: "Dark", value: "dark" },
    { name: "Cupcake", value: "cupcake" },
    { name: "Bumblebee", value: "bumblebee" },
    { name: "Emerald", value: "emerald" },
    { name: "Corporate", value: "corporate" },
    { name: "Synthwave", value: "synthwave" },
    { name: "Retro", value: "retro" },
    { name: "Cyberpunk", value: "cyberpunk" },
    { name: "Valentine", value: "valentine" },
    { name: "Halloween", value: "halloween" },
    { name: "Garden", value: "garden" },
    { name: "Forest", value: "forest" },
    { name: "Aqua", value: "aqua" },
    { name: "Lofi", value: "lofi" },
    { name: "Pastel", value: "pastel" },
    { name: "Fantasy", value: "fantasy" },
    { name: "Wireframe", value: "wireframe" },
    { name: "Black", value: "black" },
    { name: "Luxury", value: "luxury" },
    { name: "Dracula", value: "dracula" },
    { name: "CMYK", value: "cmyk" },
    { name: "Autumn", value: "autumn" },
    { name: "Business", value: "business" },
    { name: "Acid", value: "acid" },
    { name: "Lemonade", value: "lemonade" },
    { name: "Night", value: "night" },
    { name: "Coffee", value: "coffee" },
    { name: "Winter", value: "winter" },
    { name: "Dim", value: "dim" },
    { name: "Nord", value: "nord" },
    { name: "Sunset", value: "sunset" },
];

// TODO add functionality to apply custom theme...

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState<CurrentTheme>({ name: "Dark", value: "dark" });

    const handleThemeChange = (newTheme: string) => {
        localStorage.setItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        setCurrentTheme({ name: themes.find((theme) => theme.value === newTheme)?.name || "Unknown Theme", value: newTheme });
    };

    useEffect(() => {
        const LSTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "");
        if (LSTheme) {
            document.documentElement.setAttribute("data-theme", LSTheme);
            setCurrentTheme({ name: themes.find((theme) => theme.value === LSTheme)?.name || "Unknown Theme", value: LSTheme });
        } else {
            localStorage.setItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
            setCurrentTheme({ name: "Dark", value: "dark" });
        }
    }, []);

    return (
        <div className="dropdown z-[99999]">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-primary m-1"
            >
                Theme ({currentTheme.name})
                <ChevronDownIcon className="inline-block h-4 w-4" />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-[99999] p-2 shadow-2xl !right-0 !w-40 !h-80 !overflow-auto"
            >
                {themes.map((theme) => (
                    <li key={theme.value}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={theme.name}
                            value={theme.value}
                            checked={theme.value === currentTheme.value}
                            onChange={() => handleThemeChange(theme.value)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
