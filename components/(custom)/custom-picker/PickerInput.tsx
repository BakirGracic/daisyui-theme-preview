import type { CustomTheme } from "@/types/types";

export default function PickerInput({ name, value, label, handleInputChange }: { name: keyof CustomTheme; value: string; label: string; handleInputChange: (value: string, name: keyof CustomTheme) => void }) {
    return (
        <div className="flex items-center gap-3">
            <div className="prose">
                <code>{name}</code>
            </div>
            <label className="input input-sm px-2 input-bordered flex items-center gap-2 min-w-[220px] max-w-[250px]">
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
                <span className="badge badge-info text-nowrap">{label}</span>
            </label>
        </div>
    );
}
