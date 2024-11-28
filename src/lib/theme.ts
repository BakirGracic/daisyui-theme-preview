import { CustomThemeProps } from "@/types/themeing_context";

export function addCustomThemeCSSVars(parsedTheme: CustomThemeProps) {
    const css_vars: { [key: string]: string } = {
        "--p": hexToOklch(parsedTheme.primary),
        "--pc": hexToOklch(parsedTheme.primaryContent),
        "--s": hexToOklch(parsedTheme.secondary),
        "--sc": hexToOklch(parsedTheme.secondaryContent),
        "--a": hexToOklch(parsedTheme.accent),
        "--ac": hexToOklch(parsedTheme.accentContent),
        "--n": hexToOklch(parsedTheme.neutral),
        "--nc": hexToOklch(parsedTheme.neutralContent),
        "--b1": hexToOklch(parsedTheme.base100),
        "--b2": hexToOklch(parsedTheme.base200),
        "--b3": hexToOklch(parsedTheme.base300),
        "--bc": hexToOklch(parsedTheme.baseContent),
        "--in": hexToOklch(parsedTheme.info),
        "--inc": hexToOklch(parsedTheme.infoContent),
        "--su": hexToOklch(parsedTheme.success),
        "--suc": hexToOklch(parsedTheme.successContent),
        "--wa": hexToOklch(parsedTheme.warning),
        "--wac": hexToOklch(parsedTheme.warningContent),
        "--er": hexToOklch(parsedTheme.error),
        "--erc": hexToOklch(parsedTheme.errorContent),
        "--rounded-box": parsedTheme.roundedBox,
        "--rounded-btn": parsedTheme.roundedBtn,
        "--rounded-badge": parsedTheme.roundedBadge,
        "--animation-btn": parsedTheme.animationBtn,
        "--animation-input": parsedTheme.animationInput,
        "--btn-focus-scale": parsedTheme.btnFocusScale,
        "--border-btn": parsedTheme.borderBtn,
        "--tab-border": parsedTheme.tabBorder,
        "--tab-radius": parsedTheme.tabRadius,
    };

    const style_tag = document.getElementById("custom-theme-style-tag") as HTMLStyleElement;

    if (style_tag) {
        const css_code = Object.entries(css_vars)
            .map(([key, value]) => `${key}: ${value};`)
            .join(" ");

        const prepared_css = `:root:has(input.theme-controller[value="custom"]:checked) { ${css_code} } #custom-theme-preview-box { ${css_code} }`;

        style_tag.innerHTML = prepared_css;
    }
}

function hexToOklch(hex: string) {
    hex = hex.replace("#", "");

    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    const linearR = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const linearG = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const linearB = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    const x = 0.4124564 * linearR + 0.3575761 * linearG + 0.1804375 * linearB;
    const y = 0.2126729 * linearR + 0.7151522 * linearG + 0.072175 * linearB;
    const z = 0.0193339 * linearR + 0.119192 * linearG + 0.9503041 * linearB;

    const l = 0.8190224432164319 * x + 0.3619062562801247 * y - 0.1288737844221442 * z;
    const m = 0.0329836671980271 * x + 0.9292868468965546 * y + 0.0361446663796141 * z;
    const s = 0.0481771404483734 * x + 0.264212113106337 * y + 0.6335478777174432 * z;

    const lp = Math.cbrt(l);
    const mp = Math.cbrt(m);
    const sp = Math.cbrt(s);

    const L = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
    const a = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
    const b2 = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;

    const C = Math.sqrt(a * a + b2 * b2);
    let h = (Math.atan2(b2, a) * 180) / Math.PI;

    if (h < 0) {
        h += 360;
    }

    const lightness = (L * 100).toFixed(2);
    const chroma = C.toFixed(3);
    const hue = h.toFixed(1);

    return `${lightness}% ${chroma} ${hue}`;
}
