"use client";

import { useState } from "react";
import ParameterTweakerInput from "@/components/(custom)/ParameterTweakerInput";
import type { CustomThemeProps } from "@/types/custom_theme";

const defaultCustomTheme: CustomThemeProps = {
    primary: "",
    primaryContent: "",
    secondary: "",
    secondaryContent: "",
    accent: "",
    accentContent: "",
    neutral: "",
    neutralContent: "",
    base100: "",
    base200: "",
    base300: "",
    baseContent: "",
    info: "",
    infoContent: "",
    success: "",
    successContent: "",
    warning: "",
    warningContent: "",
    error: "",
    errorContent: "",
    roundedBox: "",
    roundedBtn: "",
    roundedBadge: "",
    animationBtn: "",
    animationInput: "",
    btnFocusScale: "",
    borderBtn: "",
    tabBorder: "",
    tabRadius: "",
};

export default function ParameterTweaker() {
    const [customTheme, setCustomTheme] = useState<CustomThemeProps>(defaultCustomTheme);

    const isValidHex = (value: string) => {
        const hexRegex = /^#([0-9a-fA-F]{0,6})$/i;
        return hexRegex.test(value);
    };

    const handleInputChange = (value: string, name: keyof CustomThemeProps) => {
        if (isValidHex(value.toLowerCase())) {
            setCustomTheme((prevTheme) => ({
                ...prevTheme,
                [name]: value,
            }));
        }
    };

    return (
        <div className="viewportMaxWidth topMargin">
            <div className="prose mb-8">
                <h1 id="generator">Generator</h1>
            </div>

            {/* inputs */}
            <div className="flex flex-col gap-1">
                {/* primary */}
                <ParameterTweakerInput
                    name="primary"
                    value={customTheme.primary}
                    label="Primary"
                    handleInputChange={handleInputChange}
                />

                {/* primaryContent */}
                <ParameterTweakerInput
                    name="primaryContent"
                    value={customTheme.primaryContent}
                    label="Primary Content"
                    handleInputChange={handleInputChange}
                />

                {/* secondary */}
                <ParameterTweakerInput
                    name="secondary"
                    value={customTheme.secondary}
                    label="Secondary"
                    handleInputChange={handleInputChange}
                />

                {/* secondaryContent */}
                <ParameterTweakerInput
                    name="secondaryContent"
                    value={customTheme.secondaryContent}
                    label="Secondary Content"
                    handleInputChange={handleInputChange}
                />

                {/* accent */}
                <ParameterTweakerInput
                    name="accent"
                    value={customTheme.accent}
                    label="Accent"
                    handleInputChange={handleInputChange}
                />

                {/* accentContent */}
                <ParameterTweakerInput
                    name="accentContent"
                    value={customTheme.accentContent}
                    label="Accent Content"
                    handleInputChange={handleInputChange}
                />

                {/* neutral */}
                <ParameterTweakerInput
                    name="neutral"
                    value={customTheme.neutral}
                    label="Neutral"
                    handleInputChange={handleInputChange}
                />

                {/* neutralContent */}
                <ParameterTweakerInput
                    name="neutralContent"
                    value={customTheme.neutralContent}
                    label="Neutral Content"
                    handleInputChange={handleInputChange}
                />

                {/* base100 */}
                <ParameterTweakerInput
                    name="base100"
                    value={customTheme.base100}
                    label="Base 100"
                    handleInputChange={handleInputChange}
                />

                {/* base200 */}
                <ParameterTweakerInput
                    name="base200"
                    value={customTheme.base200}
                    label="Base 200"
                    handleInputChange={handleInputChange}
                />

                {/* base300 */}
                <ParameterTweakerInput
                    name="base300"
                    value={customTheme.base300}
                    label="Base 300"
                    handleInputChange={handleInputChange}
                />

                {/* baseContent */}
                <ParameterTweakerInput
                    name="baseContent"
                    value={customTheme.baseContent}
                    label="Base Content"
                    handleInputChange={handleInputChange}
                />

                {/* info */}
                <ParameterTweakerInput
                    name="info"
                    value={customTheme.info}
                    label="Info"
                    handleInputChange={handleInputChange}
                />

                {/* infoContent */}
                <ParameterTweakerInput
                    name="infoContent"
                    value={customTheme.infoContent}
                    label="Info Content"
                    handleInputChange={handleInputChange}
                />

                {/* success */}
                <ParameterTweakerInput
                    name="success"
                    value={customTheme.success}
                    label="Success"
                    handleInputChange={handleInputChange}
                />

                {/* successContent */}
                <ParameterTweakerInput
                    name="successContent"
                    value={customTheme.successContent}
                    label="Success Content"
                    handleInputChange={handleInputChange}
                />

                {/* warning */}
                <ParameterTweakerInput
                    name="warning"
                    value={customTheme.warning}
                    label="Warning"
                    handleInputChange={handleInputChange}
                />

                {/* warningContent */}
                <ParameterTweakerInput
                    name="warningContent"
                    value={customTheme.warningContent}
                    label="Warning Content"
                    handleInputChange={handleInputChange}
                />

                {/* error */}
                <ParameterTweakerInput
                    name="error"
                    value={customTheme.error}
                    label="Error"
                    handleInputChange={handleInputChange}
                />

                {/* errorContent */}
                <ParameterTweakerInput
                    name="errorContent"
                    value={customTheme.errorContent}
                    label="Error Content"
                    handleInputChange={handleInputChange}
                />

                <div className="divider"></div>

                {/* roundedBox */}
                <ParameterTweakerInput
                    name="roundedBox"
                    value={customTheme.roundedBox}
                    label="Rounded Box"
                    handleInputChange={handleInputChange}
                />

                {/* roundedBtn */}
                <ParameterTweakerInput
                    name="roundedBtn"
                    value={customTheme.roundedBtn}
                    label="Rounded Button"
                    handleInputChange={handleInputChange}
                />

                {/* roundedBadge */}
                <ParameterTweakerInput
                    name="roundedBadge"
                    value={customTheme.roundedBadge}
                    label="Rounded Badge"
                    handleInputChange={handleInputChange}
                />

                {/* animationBtn */}
                <ParameterTweakerInput
                    name="animationBtn"
                    value={customTheme.animationBtn}
                    label="Animation Button"
                    handleInputChange={handleInputChange}
                />

                {/* animationInput */}
                <ParameterTweakerInput
                    name="animationInput"
                    value={customTheme.animationInput}
                    label="Animation Input"
                    handleInputChange={handleInputChange}
                />

                {/* btnFocusScale */}
                <ParameterTweakerInput
                    name="btnFocusScale"
                    value={customTheme.btnFocusScale}
                    label="Button Focus Scale"
                    handleInputChange={handleInputChange}
                />

                {/* borderBtn */}
                <ParameterTweakerInput
                    name="borderBtn"
                    value={customTheme.borderBtn}
                    label="Border Button"
                    handleInputChange={handleInputChange}
                />

                {/* tabBorder */}
                <ParameterTweakerInput
                    name="tabBorder"
                    value={customTheme.tabBorder}
                    label="Tab Border"
                    handleInputChange={handleInputChange}
                />

                {/* tabRadius */}
                <ParameterTweakerInput
                    name="tabRadius"
                    value={customTheme.tabRadius}
                    label="Tab Radius"
                    handleInputChange={handleInputChange}
                />
            </div>
        </div>
    );
}
