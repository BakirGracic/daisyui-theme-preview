import type { CustomThemeProps } from "@/types/themeing_context";

export default function ParameterTweakerCSSInput({ name, value, label, handleInputChange }: { name: keyof CustomThemeProps; value: string; label: string; handleInputChange: (value: string, name: keyof CustomThemeProps) => void }) {
    return (
        <div className="flex items-center gap-3">
            <input
                type="text"
                name={name}
                className="input input-sm px-2 input-bordered min-w-[80px] max-w-[80px]"
                value={value}
                maxLength={7}
                onChange={(e) => {
                    handleInputChange(e.target.value, name);
                }}
            />
            <div className="prose text-nowrap">
                <code>{label}</code>
            </div>
        </div>
    );
}
