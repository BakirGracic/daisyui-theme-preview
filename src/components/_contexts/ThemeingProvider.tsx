"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ThemeingContextProps, CurrentTheme, CustomThemeProps } from "@/types/themeing_context";
import { addCustomThemeCSSVars } from "@/lib/theme";
import { defaultCustomTheme } from "@/config/theme";

const ThemeingContext = createContext<ThemeingContextProps>({
    currentTheme: { name: "", value: "" },
    setCurrentTheme: () => {},
    customTheme: defaultCustomTheme,
    setCustomTheme: () => {},
    customThemeConfig: "",
    setCustomThemeConfig: () => {},
    availableThemes: [],
    handleThemeChange: () => {},
    handleHexInputChange: () => {},
    handleCSSInputChange: () => {},
    handleCopyConfig: () => {},
    handleReset: () => {},
});

export const useThemeingContext = () => useContext(ThemeingContext);

export default function ThemeingProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [currentTheme, setCurrentTheme] = useState<CurrentTheme>({ name: "Dark", value: "dark" });
    const [customTheme, setCustomTheme] = useState<CustomThemeProps>(defaultCustomTheme);
    const [customThemeConfig, setCustomThemeConfig] = useState<string>("");

    const availableThemes: CurrentTheme[] = [
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

    const handleThemeChange = (newTheme: string) => {
        setCurrentTheme({ name: availableThemes.find((theme) => theme.value === newTheme)?.name || "Dark", value: newTheme || "dark" });
        addCustomThemeCSSVars(customTheme as CustomThemeProps);
    };

    const handleHexInputChange = (e: string, name: keyof CustomThemeProps) => {
        const value = e;
        const hexRegex = /^#([0-9a-fA-F]{0,6})$/i;
        if (hexRegex.test(value.toLowerCase())) {
            setCustomTheme((prevTheme) => ({
                ...prevTheme,
                [name]: value,
            }));
        }
    };

    const handleCSSInputChange = (e: string, name: keyof CustomThemeProps) => {
        const value = e;
        setCustomTheme((prevTheme) => ({
            ...prevTheme,
            [name]: value,
        }));
    };

    const handleCopyConfig = () => {
        const modal = document.getElementById("copy-config-modal") as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        } else {
            console.error("Copy Config Modal not found");
        }
    };

    const handleReset = () => {
        setCustomTheme(defaultCustomTheme);
    };

    // on load get themename & customtheme from LS & apply if valid
    useEffect(() => {
        const LSTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "");

        setCurrentTheme({ name: availableThemes.find((theme) => theme.value === LSTheme)?.name || "Dark", value: LSTheme || "dark" });

        const LSCustomTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "");

        setCustomTheme(LSCustomTheme ? JSON.parse(LSCustomTheme) : defaultCustomTheme);
    }, []);

    // on current theme name change
    useEffect(() => {
        localStorage.setItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "", currentTheme.value || "dark");
        document.documentElement.setAttribute("data-theme", currentTheme.value);
    }, [currentTheme]);

    // on custom theme config change
    useEffect(() => {
        if (typeof customTheme === "object" && Object.keys(defaultCustomTheme).every((key) => key in customTheme)) {
            addCustomThemeCSSVars(customTheme as CustomThemeProps);
            setCustomThemeConfig(
                `daisyui: {\n\tthemes: [\n\t\t{\n\t\t\tMyAwesomeTheme: {\n\t\t\t\t"primary": "${customTheme.primary}",\n\t\t\t\t"primary-content": "${customTheme.primaryContent}",\n\t\t\t\t"secondary": "${customTheme.secondary}",\n\t\t\t\t"secondary-content": "${customTheme.secondaryContent}",\n\t\t\t\t"accent": "${customTheme.accent}",\n\t\t\t\t"accent-content": "${customTheme.accentContent}",\n\t\t\t\t"neutral": "${customTheme.neutral}",\n\t\t\t\t"neutral-content": "${customTheme.neutralContent}",\n\t\t\t\t"base-100": "${customTheme.base100}",\n\t\t\t\t"base-200": "${customTheme.base200}",\n\t\t\t\t"base-300": "${customTheme.base300}",\n\t\t\t\t"base-content": "${customTheme.baseContent}",\n\t\t\t\t"info": "${customTheme.info}",\n\t\t\t\t"info-content": "${customTheme.infoContent}",\n\t\t\t\t"success": "${customTheme.success}",\n\t\t\t\t"success-content": "${customTheme.successContent}",\n\t\t\t\t"warning": "${customTheme.warning}",\n\t\t\t\t"warning-content": "${customTheme.warningContent}",\n\t\t\t\t"error": "${customTheme.error}",\n\t\t\t\t"error-content": "${customTheme.errorContent}",\n\t\t\t\t"--rounded-box": "${customTheme.roundedBox}",\n\t\t\t\t"--rounded-btn": "${customTheme.roundedBtn}",\n\t\t\t\t"--rounded-badge": "${customTheme.roundedBadge}",\n\t\t\t\t"--animation-btn": "${customTheme.animationBtn}",\n\t\t\t\t"--animation-input": "${customTheme.animationInput}",\n\t\t\t\t"--btn-focus-scale": "${customTheme.btnFocusScale}",\n\t\t\t\t"--border-btn": "${customTheme.borderBtn}",\n\t\t\t\t"--tab-border": "${customTheme.tabBorder}",\n\t\t\t\t"--tab-radius": "${customTheme.tabRadius}",\n\t\t\t},\n\t\t},\n\t],\n},`
            );
            localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(customTheme));
        }
    }, [customTheme]);

    return (
        <ThemeingContext.Provider
            value={{
                currentTheme,
                setCurrentTheme,
                customTheme,
                setCustomTheme,
                customThemeConfig,
                setCustomThemeConfig,
                availableThemes,
                handleThemeChange,
                handleHexInputChange,
                handleCSSInputChange,
                handleCopyConfig,
                handleReset,
            }}
        >
            {children}
        </ThemeingContext.Provider>
    );
}
