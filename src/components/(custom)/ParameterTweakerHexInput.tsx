import type { CustomThemeProps } from "@/types/themeing_context";

export default function ParameterTweakerHexInput({ name, value, label, handleInputChange }: { name: keyof CustomThemeProps; value: string; label: string; handleInputChange: (e: string, name: keyof CustomThemeProps) => void }) {
    return (
        <div className="flex items-center gap-3">
            <label className="input input-sm px-2 input-bordered flex items-center gap-2 min-w-[110px] max-w-[110px]">
                <input
                    type="text"
                    name={name}
                    className="w-full"
                    value={value}
                    maxLength={7}
                    onChange={(e) => {
                        handleInputChange(e.target.value, name);
                    }}
                />
                <span
                    className="badge text-nowrap"
                    style={{ backgroundColor: `${value}` }}
                ></span>
            </label>
            <div className="prose text-nowrap">
                <code>{label}</code>
            </div>
        </div>
    );
}
