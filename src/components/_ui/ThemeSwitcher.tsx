// TODO: Room for simplification of theme-ing functionality, probably via react context

"use client";

import { useEffect, useState } from "react";
import { defaultCustomTheme } from "@/config/theme";
import type { CurrentTheme } from "@/types/theme_switcher";
import type { CustomThemeProps } from "@/types/custom_theme";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { applyCustomThemeCSSVariables } from "@/lib/theme";

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

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState<CurrentTheme>({ name: "Dark", value: "dark" });

    const removeCSSVariables = () => {
        const styleTag = document.getElementById("custom-theme-style-tag") as HTMLStyleElement;

        if (styleTag) styleTag.innerHTML = "";
    };

    const handleThemeChange = (newTheme: string) => {
        // set new theme name to local storage
        localStorage.setItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "", newTheme);

        // set new theme to html element in data-theme
        document.documentElement.setAttribute("data-theme", newTheme);

        // set new theme name to state
        setCurrentTheme({ name: themes.find((theme) => theme.value === newTheme)?.name || "", value: newTheme });

        // if new theme is custom, apply custom theme css variables
        if (newTheme === "custom") {
            const LSCustomTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "");
            if (LSCustomTheme) {
                const parsedTheme = JSON.parse(LSCustomTheme);
                if (parsedTheme && typeof parsedTheme === "object" && Object.keys(defaultCustomTheme).every((key) => key in parsedTheme)) {
                    applyCustomThemeCSSVariables(parsedTheme as CustomThemeProps);
                    return;
                }
            }
            localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(defaultCustomTheme));
        }
        // if new theme is not custom, remove custom theme css variables
        else {
            removeCSSVariables();
        }
    };

    useEffect(() => {
        // get theme name from local storage
        const LSTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "");

        // if theme name is valid
        if (LSTheme) {
            // set theme name to html element in data-theme
            document.documentElement.setAttribute("data-theme", LSTheme);

            // set theme name to state
            setCurrentTheme({ name: themes.find((theme) => theme.value === LSTheme)?.name || "Unknown Theme", value: LSTheme });

            // if theme name is custom, apply custom theme css variables
            if (LSTheme === "custom") {
                const LSCustomTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "");
                if (LSCustomTheme) {
                    const parsedTheme = JSON.parse(LSCustomTheme);
                    if (parsedTheme && typeof parsedTheme === "object" && Object.keys(defaultCustomTheme).every((key) => key in parsedTheme)) {
                        applyCustomThemeCSSVariables(parsedTheme as CustomThemeProps);
                        return;
                    }
                }
                localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(defaultCustomTheme));
            }
            // if theme name is not custom, remove custom theme css variables
            else {
                removeCSSVariables();
            }
        }
        // if theme name is not valid -> set default
        else {
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
                className="btn btn-primary m-1 flex-nowrap"
            >
                <span className="text-nowrap">Theme ({currentTheme.name})</span>
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
