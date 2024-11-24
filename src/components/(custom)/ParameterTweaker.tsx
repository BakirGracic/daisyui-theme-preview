// TODO: Room for simplification of theme-ing functionality, probably via react context

"use client";

import { useEffect, useState } from "react";
import ParameterTweakerPreview from "@/components/(custom)/ParameterTweakerPreview";
import ParameterTweakerHexInput from "@/components/(custom)/ParameterTweakerHexInput";
import ParameterTweakerCSSInput from "@/components/(custom)/ParameterTweakerCSSInput";
import { applyCustomThemeCSSVariables } from "@/lib/theme";
import { defaultCustomTheme } from "@/config/theme";
import type { CustomThemeProps } from "@/types/custom_theme";
import { ArrowDownTrayIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

export default function ParameterTweaker() {
    const [customTheme, setCustomTheme] = useState<CustomThemeProps>(defaultCustomTheme);
    const [customThemeConfig, setCustomThemeConfig] = useState<string>("");

    const handleHexInputChange = (value: string, name: keyof CustomThemeProps) => {
        const hexRegex = /^#([0-9a-fA-F]{0,6})$/i;
        if (hexRegex.test(value.toLowerCase())) {
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
        // save configuration string to local storage
        localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(customTheme));

        // get current theme name from local storage
        const LSThemeName = localStorage.getItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "");

        // if current theme name is custom -> apply the new custom theme immediately
        if (LSThemeName && LSThemeName === "custom") {
            applyCustomThemeCSSVariables(customTheme);
        }

        // success toast
        toast(<div className="!text-center mx-auto">Theme saved</div>);
    };

    const handleCopyConfig = () => {
        // get modal & open modal
        const modal = document.getElementById("copy-config-modal") as HTMLDialogElement;
        modal.showModal();

        // set custom theme config string in state
        setCustomThemeConfig(
            `daisyui: {\n\tthemes: [\n\t\t{\n\t\t\tMyAwesomeTheme: {\n\t\t\t\t"primary": "${customTheme.primary}",\n\t\t\t\t"primary-content": "${customTheme.primaryContent}",\n\t\t\t\t"secondary": "${customTheme.secondary}",\n\t\t\t\t"secondary-content": "${customTheme.secondaryContent}",\n\t\t\t\t"accent": "${customTheme.accent}",\n\t\t\t\t"accent-content": "${customTheme.accentContent}",\n\t\t\t\t"neutral": "${customTheme.neutral}",\n\t\t\t\t"neutral-content": "${customTheme.neutralContent}",\n\t\t\t\t"base-100": "${customTheme.base100}",\n\t\t\t\t"base-200": "${customTheme.base200}",\n\t\t\t\t"base-300": "${customTheme.base300}",\n\t\t\t\t"base-content": "${customTheme.baseContent}",\n\t\t\t\t"info": "${customTheme.info}",\n\t\t\t\t"info-content": "${customTheme.infoContent}",\n\t\t\t\t"success": "${customTheme.success}",\n\t\t\t\t"success-content": "${customTheme.successContent}",\n\t\t\t\t"warning": "${customTheme.warning}",\n\t\t\t\t"warning-content": "${customTheme.warningContent}",\n\t\t\t\t"error": "${customTheme.error}",\n\t\t\t\t"error-content": "${customTheme.errorContent}",\n\t\t\t\t"--rounded-box": "${customTheme.roundedBox}",\n\t\t\t\t"--rounded-btn": "${customTheme.roundedBtn}",\n\t\t\t\t"--rounded-badge": "${customTheme.roundedBadge}",\n\t\t\t\t"--animation-btn": "${customTheme.animationBtn}",\n\t\t\t\t"--animation-input": "${customTheme.animationInput}",\n\t\t\t\t"--btn-focus-scale": "${customTheme.btnFocusScale}",\n\t\t\t\t"--border-btn": "${customTheme.borderBtn}",\n\t\t\t\t"--tab-border": "${customTheme.tabBorder}",\n\t\t\t\t"--tab-radius": "${customTheme.tabRadius}",\n\t\t\t},\n\t\t},\n\t],\n},`
        );

        // copy action built inside modal
        // toast success action built inside modal
    };

    const handleReset = () => {
        // set default theme to custom theme state
        setCustomTheme(defaultCustomTheme);

        // save default theme to custom theme local storage
        localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(defaultCustomTheme));

        // get current theme name from local storage
        const LSThemeName = localStorage.getItem(process.env.NEXT_PUBLIC_LS_THEME_KEY || "");

        // if current theme name is custom -> apply the new custom theme immediately
        if (LSThemeName && LSThemeName === "custom") {
            applyCustomThemeCSSVariables(defaultCustomTheme);
        }

        // success toast
        toast(<div className="!text-center mx-auto">Theme reset</div>);
    };

    useEffect(() => {
        // load custom theme configuration from local storage
        const LSCustomTheme = localStorage.getItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "");

        if (LSCustomTheme) {
            const parsedTheme = JSON.parse(LSCustomTheme);
            if (parsedTheme && typeof parsedTheme === "object" && Object.keys(defaultCustomTheme).every((key) => key in parsedTheme)) {
                setCustomTheme(parsedTheme);
                return;
            }
        }

        localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(defaultCustomTheme));
    }, []);

    return (
        <>
            <div className="viewportMaxWidth topMargin">
                <div className="prose mb-8">
                    <h1 id="generator">Generator</h1>
                </div>

                <div className="flex gap-8 flex-col lg:flex-row">
                    {/* sidebar */}
                    <div className="flex flex-col gap-1">
                        {/* actions */}

                        {/* save */}
                        <div
                            onClick={handleSaveTheme}
                            className="btn btn-primary"
                        >
                            <ArrowDownTrayIcon className="size-5" />
                            Save Theme
                        </div>
                        {/* copy */}
                        <div
                            onClick={handleCopyConfig}
                            className="btn btn-secondary"
                        >
                            <ClipboardIcon className="size-5" />
                            Copy Config
                        </div>
                        {/* reset */}
                        <div
                            onClick={handleReset}
                            className="btn btn-accent"
                        >
                            <ArrowPathIcon className="size-5" />
                            Reset
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
                    <ParameterTweakerPreview data={customTheme} />
                </div>
            </div>

            {/* copy config modal */}
            <dialog
                id="copy-config-modal"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <div className="prose">
                        <h2>
                            Copy <code>tailwind.config.ts</code> code
                        </h2>
                        <pre className="max-h-80">
                            <code
                                className="language-javascript"
                                dangerouslySetInnerHTML={{
                                    __html: hljs.highlight(customThemeConfig, { language: "javascript" }).value,
                                }}
                            />
                        </pre>
                    </div>

                    {/* apply button */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button
                                onClick={() => {
                                    localStorage.setItem(process.env.NEXT_PUBLIC_LS_CUSTOM_THEME_KEY || "", JSON.stringify(customTheme));
                                    navigator.clipboard.writeText(customThemeConfig);
                                    toast(<div className="!text-center mx-auto">Configuration copied</div>);
                                }}
                                className="btn btn-primary flex items-center gap-2"
                            >
                                <ClipboardIcon className="size-5" />
                                Copy, Save & Close
                            </button>
                        </form>
                    </div>
                </div>

                {/* outside click close */}
                <form
                    method="dialog"
                    className="modal-backdrop"
                >
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
