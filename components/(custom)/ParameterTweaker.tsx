"use client";

import { useState } from "react";
import ParameterTweakerHexInput from "@/components/(custom)/ParameterTweakerHexInput";
import ParameterTweakerCSSInput from "@/components/(custom)/ParameterTweakerCSSInput";
import type { CustomThemeProps } from "@/types/custom_theme";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const defaultCustomTheme: CustomThemeProps = {
    primary: "#7480FF",
    primaryContent: "#050617",
    secondary: "#FF52D9",
    secondaryContent: "#190211",
    accent: "#00CDB8",
    accentContent: "#000F0C",
    neutral: "#2A323C",
    neutralContent: "#A6ADBB",
    base100: "#1D232A",
    base200: "#191E24",
    base300: "#15191E",
    baseContent: "#A6ADBB",
    info: "#00B5FF",
    infoContent: "#000000",
    success: "#00A96E",
    successContent: "#000000",
    warning: "#FFBE00",
    warningContent: "#000000",
    error: "#FF5861",
    errorContent: "#000000",
    // ---
    roundedBox: "1rem",
    roundedBtn: ".5rem",
    roundedBadge: "1.9rem",
    animationBtn: ".25s",
    animationInput: ".2s",
    btnFocusScale: ".95",
    borderBtn: "1px",
    tabBorder: "1px",
    tabRadius: ".5rem",
};

export default function ParameterTweaker() {
    const [customTheme, setCustomTheme] = useState<CustomThemeProps>(defaultCustomTheme);

    const isValidHex = (value: string) => {
        const hexRegex = /^#([0-9a-fA-F]{0,6})$/i;
        return hexRegex.test(value);
    };

    const handleHexInputChange = (value: string, name: keyof CustomThemeProps) => {
        if (isValidHex(value.toLowerCase())) {
            setCustomTheme((prevTheme) => ({
                ...prevTheme,
                [name]: value,
            }));
        }
    };

    const handleCSSInputChange = (value: string, name: keyof CustomThemeProps) => {
        setCustomTheme((prevTheme) => ({
            ...prevTheme,
            [name]: value,
        }));
    };

    const handleSaveTheme = () => {
        alert("MAKE ME!");
    };

    const handleCopyConfig = () => {
        alert("MAKE ME!");
    };

    return (
        <div className="viewportMaxWidth topMargin">
            <div className="prose mb-8">
                <h1 id="generator">Generator</h1>
            </div>

            <div className="flex gap-8">
                {/* sidebar */}
                <div className="flex flex-col gap-1">
                    {/* actions */}
                    <div
                        onClick={handleSaveTheme}
                        className="btn btn-primary"
                    >
                        <ArrowDownTrayIcon className="size-5" />
                        Save Theme
                    </div>
                    <div
                        onClick={handleCopyConfig}
                        className="btn btn-secondary"
                    >
                        <ClipboardIcon className="size-5" />
                        Copy Config
                    </div>

                    <div className="divider my-2"></div>

                    {/* primary */}
                    <ParameterTweakerHexInput
                        name="primary"
                        value={customTheme.primary}
                        label="Primary"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* primaryContent */}
                    <ParameterTweakerHexInput
                        name="primaryContent"
                        value={customTheme.primaryContent}
                        label="Primary Content"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* secondary */}
                    <ParameterTweakerHexInput
                        name="secondary"
                        value={customTheme.secondary}
                        label="Secondary"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* secondaryContent */}
                    <ParameterTweakerHexInput
                        name="secondaryContent"
                        value={customTheme.secondaryContent}
                        label="Secondary Content"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* accent */}
                    <ParameterTweakerHexInput
                        name="accent"
                        value={customTheme.accent}
                        label="Accent"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* accentContent */}
                    <ParameterTweakerHexInput
                        name="accentContent"
                        value={customTheme.accentContent}
                        label="Accent Content"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* neutral */}
                    <ParameterTweakerHexInput
                        name="neutral"
                        value={customTheme.neutral}
                        label="Neutral"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* neutralContent */}
                    <ParameterTweakerHexInput
                        name="neutralContent"
                        value={customTheme.neutralContent}
                        label="Neutral Content"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* base100 */}
                    <ParameterTweakerHexInput
                        name="base100"
                        value={customTheme.base100}
                        label="Base 100"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* base200 */}
                    <ParameterTweakerHexInput
                        name="base200"
                        value={customTheme.base200}
                        label="Base 200"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* base300 */}
                    <ParameterTweakerHexInput
                        name="base300"
                        value={customTheme.base300}
                        label="Base 300"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* baseContent */}
                    <ParameterTweakerHexInput
                        name="baseContent"
                        value={customTheme.baseContent}
                        label="Base Content"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* info */}
                    <ParameterTweakerHexInput
                        name="info"
                        value={customTheme.info}
                        label="Info"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* infoContent */}
                    <ParameterTweakerHexInput
                        name="infoContent"
                        value={customTheme.infoContent}
                        label="Info Content"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* success */}
                    <ParameterTweakerHexInput
                        name="success"
                        value={customTheme.success}
                        label="Success"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* successContent */}
                    <ParameterTweakerHexInput
                        name="successContent"
                        value={customTheme.successContent}
                        label="Success Content"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* warning */}
                    <ParameterTweakerHexInput
                        name="warning"
                        value={customTheme.warning}
                        label="Warning"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* warningContent */}
                    <ParameterTweakerHexInput
                        name="warningContent"
                        value={customTheme.warningContent}
                        label="Warning Content"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* error */}
                    <ParameterTweakerHexInput
                        name="error"
                        value={customTheme.error}
                        label="Error"
                        handleInputChange={handleHexInputChange}
                    />

                    {/* errorContent */}
                    <ParameterTweakerHexInput
                        name="errorContent"
                        value={customTheme.errorContent}
                        label="Error Content"
                        handleInputChange={handleHexInputChange}
                    />

                    <div className="divider my-2"></div>

                    {/* roundedBox */}
                    <ParameterTweakerCSSInput
                        name="roundedBox"
                        value={customTheme.roundedBox}
                        label="Rounded Box"
                        handleInputChange={handleCSSInputChange}
                    />

                    {/* roundedBtn */}
                    <ParameterTweakerCSSInput
                        name="roundedBtn"
                        value={customTheme.roundedBtn}
                        label="Rounded Button"
                        handleInputChange={handleCSSInputChange}
                    />

                    {/* roundedBadge */}
                    <ParameterTweakerCSSInput
                        name="roundedBadge"
                        value={customTheme.roundedBadge}
                        label="Rounded Badge"
                        handleInputChange={handleCSSInputChange}
                    />

                    {/* animationBtn */}
                    <ParameterTweakerCSSInput
                        name="animationBtn"
                        value={customTheme.animationBtn}
                        label="Animation Button"
                        handleInputChange={handleCSSInputChange}
                    />

                    {/* animationInput */}
                    <ParameterTweakerCSSInput
                        name="animationInput"
                        value={customTheme.animationInput}
                        label="Animation Input"
                        handleInputChange={handleCSSInputChange}
                    />

                    {/* btnFocusScale */}
                    <ParameterTweakerCSSInput
                        name="btnFocusScale"
                        value={customTheme.btnFocusScale}
                        label="Button Focus Scale"
                        handleInputChange={handleCSSInputChange}
                    />

                    {/* borderBtn */}
                    <ParameterTweakerCSSInput
                        name="borderBtn"
                        value={customTheme.borderBtn}
                        label="Border Button"
                        handleInputChange={handleCSSInputChange}
                    />

                    {/* tabBorder */}
                    <ParameterTweakerCSSInput
                        name="tabBorder"
                        value={customTheme.tabBorder}
                        label="Tab Border"
                        handleInputChange={handleCSSInputChange}
                    />

                    {/* tabRadius */}
                    <ParameterTweakerCSSInput
                        name="tabRadius"
                        value={customTheme.tabRadius}
                        label="Tab Radius"
                        handleInputChange={handleCSSInputChange}
                    />
                </div>

                {/* preview */}
                <div className="rounded-box border border-neutral-content/30 w-full p-5">
                    <div className="">
                        <button className="btn">Button</button>
                        <button className="btn btn-neutral">Neutral</button>
                        <button className="btn btn-primary">Primary</button>
                        <button className="btn btn-secondary">Secondary</button>
                        <button className="btn btn-accent">Accent</button>
                        <button className="btn btn-ghost">Ghost</button>
                        <button className="btn btn-link">Link</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
