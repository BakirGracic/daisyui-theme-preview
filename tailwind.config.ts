import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: true,
    },
};

export default config;
