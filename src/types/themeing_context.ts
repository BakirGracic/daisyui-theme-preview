export interface ThemeingContextProps {
    currentTheme: CurrentTheme;
    setCurrentTheme: (theme: CurrentTheme) => void;
    customTheme: CustomThemeProps;
    setCustomTheme: (theme: CustomThemeProps) => void;
    customThemeConfig: string;
    setCustomThemeConfig: (config: string) => void;
    availableThemes: CurrentTheme[];
    handleThemeChange: (newTheme: string) => void;
    handleHexInputChange: (e: string, name: keyof CustomThemeProps) => void;
    handleCSSInputChange: (e: string, name: keyof CustomThemeProps) => void;
    handleCopyConfig: () => void;
    handleReset: () => void;
}

export type CurrentTheme = {
    name: string;
    value: string;
};

export type CustomThemeProps = {
    primary: string;
    primaryContent: string;
    secondary: string;
    secondaryContent: string;
    accent: string;
    accentContent: string;
    neutral: string;
    neutralContent: string;
    base100: string;
    base200: string;
    base300: string;
    baseContent: string;
    info: string;
    infoContent: string;
    success: string;
    successContent: string;
    warning: string;
    warningContent: string;
    error: string;
    errorContent: string;
    roundedBox: string;
    roundedBtn: string;
    roundedBadge: string;
    animationBtn: string;
    animationInput: string;
    btnFocusScale: string;
    borderBtn: string;
    tabBorder: string;
    tabRadius: string;
};
