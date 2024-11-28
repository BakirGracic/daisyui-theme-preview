"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useThemeingContext } from "@/components/_contexts/ThemeingProvider";

export default function ThemeSwitcher() {
    const { currentTheme, availableThemes, handleThemeChange } = useThemeingContext();

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
                {availableThemes.map((theme) => (
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
