"use client";

import { CurrentTheme } from "@/types/theme_switcher";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { defaultCustomTheme } from "@/components/(custom)/ParameterTweaker";
import type { CustomThemeProps } from "@/types/custom_theme";

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

function hexToOklchString(hex: string) {
    const { r, g, b } = { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16) };

    const toLinear = (v: number) => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    const lr = toLinear(r / 255),
        lg = toLinear(g / 255),
        lb = toLinear(b / 255);

    const { X, Y, Z } = {
        X: lr * 0.4124564 + lg * 0.3575761 + lb * 0.1804375,
        Y: lr * 0.2126729 + lg * 0.7151522 + lb * 0.072175,
        Z: lr * 0.0193339 + lg * 0.119192 + lb * 0.9503041,
    };

    const L = Math.pow(0.4002 * X + 0.7075 * Y - 0.0808 * Z, 1 / 3);
    const M = Math.pow(-0.2263 * X + 1.1653 * Y + 0.0457 * Z, 1 / 3);
    const S = Math.pow(0.0 * X + 0.0 * Y + 0.9182 * Z, 1 / 3);

    const l = 116 * L - 16;
    const c = Math.sqrt(Math.pow(M - L, 2) + Math.pow(S - L, 2));
    const h = ((Math.atan2(S - L, M - L) * 180) / Math.PI + 360) % 360;

    return `${l.toFixed(4)}% ${c.toFixed(6)} ${h.toFixed(3)}`;
}

export function applyCSSVariables(parsedTheme: CustomThemeProps) {
    document.documentElement.style.setProperty(`--p`, hexToOklchString(parsedTheme.primary));
    document.documentElement.style.setProperty(`--pc`, hexToOklchString(parsedTheme.primaryContent));
    document.documentElement.style.setProperty(`--s`, hexToOklchString(parsedTheme.secondary));
    document.documentElement.style.setProperty(`--sc`, hexToOklchString(parsedTheme.secondaryContent));
    document.documentElement.style.setProperty(`--a`, hexToOklchString(parsedTheme.accent));
    document.documentElement.style.setProperty(`--ac`, hexToOklchString(parsedTheme.accentContent));
    document.documentElement.style.setProperty(`--n`, hexToOklchString(parsedTheme.neutral));
    document.documentElement.style.setProperty(`--nc`, hexToOklchString(parsedTheme.neutralContent));
    document.documentElement.style.setProperty(`--b1`, hexToOklchString(parsedTheme.base100));
    document.documentElement.style.setProperty(`--b2`, hexToOklchString(parsedTheme.base200));
    document.documentElement.style.setProperty(`--b3`, hexToOklchString(parsedTheme.base300));
    document.documentElement.style.setProperty(`--bc`, hexToOklchString(parsedTheme.baseContent));
    document.documentElement.style.setProperty(`--in`, hexToOklchString(parsedTheme.info));
    document.documentElement.style.setProperty(`--inc`, hexToOklchString(parsedTheme.infoContent));
    document.documentElement.style.setProperty(`--su`, hexToOklchString(parsedTheme.success));
    document.documentElement.style.setProperty(`--suc`, hexToOklchString(parsedTheme.successContent));
    document.documentElement.style.setProperty(`--wa`, hexToOklchString(parsedTheme.warning));
    document.documentElement.style.setProperty(`--wac`, hexToOklchString(parsedTheme.warningContent));
    document.documentElement.style.setProperty(`--er`, hexToOklchString(parsedTheme.error));
    document.documentElement.style.setProperty(`--erc`, hexToOklchString(parsedTheme.errorContent));

    document.documentElement.style.setProperty(`--rounded-box`, parsedTheme.roundedBox);
    document.documentElement.style.setProperty(`--rounded-btn`, parsedTheme.roundedBtn);
    document.documentElement.style.setProperty(`--rounded-badge`, parsedTheme.roundedBadge);
    document.documentElement.style.setProperty(`--animation-btn`, parsedTheme.animationBtn);
    document.documentElement.style.setProperty(`--animation-input`, parsedTheme.animationInput);
    document.documentElement.style.setProperty(`--btn-focus-scale`, parsedTheme.btnFocusScale);
    document.documentElement.style.setProperty(`--border-btn`, parsedTheme.borderBtn);
    document.documentElement.style.setProperty(`--tab-border`, parsedTheme.tabBorder);
    document.documentElement.style.setProperty(`--tab-radius`, parsedTheme.tabRadius);
}

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState<CurrentTheme>({ name: "Dark", value: "dark" });

    const handleThemeChange = (newTheme: string) => {
        localStorage.setItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        setCurrentTheme({ name: themes.find((theme) => theme.value === newTheme)?.name || "Unknown Theme", value: newTheme });

        if (newTheme === "custom") {
            const LSCustomTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "");
            if (LSCustomTheme) {
                const parsedTheme = JSON.parse(LSCustomTheme);
                if (parsedTheme && typeof parsedTheme === "object" && Object.keys(defaultCustomTheme).every((key) => key in parsedTheme)) {
                    applyCSSVariables(parsedTheme as CustomThemeProps);
                } else {
                    localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(defaultCustomTheme));
                }
            } else {
                localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(defaultCustomTheme));
            }
        }
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
