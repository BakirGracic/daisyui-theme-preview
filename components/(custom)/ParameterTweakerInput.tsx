import type { CustomThemeProps } from "@/types/custom_theme";

export default function ParameterTweakerInput({ name, value, label, handleInputChange }: { name: keyof CustomThemeProps; value: string; label: string; handleInputChange: (value: string, name: keyof CustomThemeProps) => void }) {
    return (
        <div className="flex items-center gap-3">
            <label className="input input-sm px-2 input-bordered flex items-center gap-2 min-w-[110px] max-w-[110px]">
                <input
                    type="text"
                    name={name}
                    className="w-full"
                    placeholder="#123456"
                    value={value}
                    onChange={(e) => {
                        handleInputChange(e.target.value, name);
                    }}
                    maxLength={7}
                />
                <span className="badge badge-info text-nowrap"></span>
            </label>
            <div className="prose">
                <code>{label}</code>
            </div>
        </div>
    );
}
