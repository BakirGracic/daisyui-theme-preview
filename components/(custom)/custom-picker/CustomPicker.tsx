"use client";

import { useState } from "react";
import PickerInput from "@/components/(custom)/custom-picker/PickerInput";
import type { CustomTheme } from "@/types/types";

const defaultCustomTheme: CustomTheme = {
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

export default function CustomPicker() {
    const [customTheme, setCustomTheme] = useState<CustomTheme>(defaultCustomTheme);

    const isValidHex = (value: string) => {
        const hexRegex = /^#([0-9a-fA-F]{0,6})$/i;
        return hexRegex.test(value);
    };

    const handleInputChange = (value: string, name: keyof CustomTheme) => {
        if (isValidHex(value.toLowerCase())) {
            setCustomTheme((prevTheme) => ({
                ...prevTheme,
                [name]: value,
            }));
        }
    };

    return (
        <div className="viewportMaxWidth mt-12 md:mt-20">
            <div className="prose mb-8">
                <h1 id="theme-generator">Generator</h1>
            </div>

            {/* inputs */}
            <div className="">
                {/* primary */}
                <PickerInput name="primary" value={customTheme.primary} label="Primary" handleInputChange={handleInputChange} />

                {/* primaryContent */}
                <PickerInput name="primaryContent" value={customTheme.primaryContent} label="Primary Content" handleInputChange={handleInputChange} />

                {/* secondary */}
                <PickerInput name="secondary" value={customTheme.secondary} label="Secondary" handleInputChange={handleInputChange} />

                {/* secondaryContent */}
                <PickerInput name="secondaryContent" value={customTheme.secondaryContent} label="Secondary Content" handleInputChange={handleInputChange} />

                {/* accent */}
                <PickerInput name="accent" value={customTheme.accent} label="Accent" handleInputChange={handleInputChange} />

                {/* accentContent */}
                <PickerInput name="accentContent" value={customTheme.accentContent} label="Accent Content" handleInputChange={handleInputChange} />

                {/* neutral */}
                <PickerInput name="neutral" value={customTheme.neutral} label="Neutral" handleInputChange={handleInputChange} />

                {/* neutralContent */}
                <PickerInput name="neutralContent" value={customTheme.neutralContent} label="Neutral Content" handleInputChange={handleInputChange} />

                {/* base100 */}
                <PickerInput name="base100" value={customTheme.base100} label="Base 100" handleInputChange={handleInputChange} />

                {/* base200 */}
                <PickerInput name="base200" value={customTheme.base200} label="Base 200" handleInputChange={handleInputChange} />

                {/* base300 */}
                <PickerInput name="base300" value={customTheme.base300} label="Base 300" handleInputChange={handleInputChange} />

                {/* baseContent */}
                <PickerInput name="baseContent" value={customTheme.baseContent} label="Base Content" handleInputChange={handleInputChange} />

                {/* info */}
                <PickerInput name="info" value={customTheme.info} label="Info" handleInputChange={handleInputChange} />

                {/* infoContent */}
                <PickerInput name="infoContent" value={customTheme.infoContent} label="Info Content" handleInputChange={handleInputChange} />

                {/* success */}
                <PickerInput name="success" value={customTheme.success} label="Success" handleInputChange={handleInputChange} />

                {/* successContent */}
                <PickerInput name="successContent" value={customTheme.successContent} label="Success Content" handleInputChange={handleInputChange} />

                {/* warning */}
                <PickerInput name="warning" value={customTheme.warning} label="Warning" handleInputChange={handleInputChange} />

                {/* warningContent */}
                <PickerInput name="warningContent" value={customTheme.warningContent} label="Warning Content" handleInputChange={handleInputChange} />

                {/* error */}
                <PickerInput name="error" value={customTheme.error} label="Error" handleInputChange={handleInputChange} />

                {/* errorContent */}
                <PickerInput name="errorContent" value={customTheme.errorContent} label="Error Content" handleInputChange={handleInputChange} />

                {/* roundedBox */}
                <PickerInput name="roundedBox" value={customTheme.roundedBox} label="Rounded Box" handleInputChange={handleInputChange} />

                {/* roundedBtn */}
                <PickerInput name="roundedBtn" value={customTheme.roundedBtn} label="Rounded Button" handleInputChange={handleInputChange} />

                {/* roundedBadge */}
                <PickerInput name="roundedBadge" value={customTheme.roundedBadge} label="Rounded Badge" handleInputChange={handleInputChange} />

                {/* animationBtn */}
                <PickerInput name="animationBtn" value={customTheme.animationBtn} label="Animation Button" handleInputChange={handleInputChange} />

                {/* animationInput */}
                <PickerInput name="animationInput" value={customTheme.animationInput} label="Animation Input" handleInputChange={handleInputChange} />

                {/* btnFocusScale */}
                <PickerInput name="btnFocusScale" value={customTheme.btnFocusScale} label="Button Focus Scale" handleInputChange={handleInputChange} />

                {/* borderBtn */}
                <PickerInput name="borderBtn" value={customTheme.borderBtn} label="Border Button" handleInputChange={handleInputChange} />

                {/* tabBorder */}
                <PickerInput name="tabBorder" value={customTheme.tabBorder} label="Tab Border" handleInputChange={handleInputChange} />

                {/* tabRadius */}
                <PickerInput name="tabRadius" value={customTheme.tabRadius} label="Tab Radius" handleInputChange={handleInputChange} />
            </div>
        </div>
    );
}
