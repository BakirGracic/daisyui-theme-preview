import SectionTitle from "@/components/(components)/SectionTitle";

import Button from "@/components/(components)/groups/ACTIONS/Button";

export default function ActionsGroup() {
    return (
        <>
            {/* button */}
            <section>
                <SectionTitle
                    id="button"
                    title="Button"
                    href="https://daisyui.com/components/button"
                />
                <Button />
            </section>

            {/* dropdown */}
            <section>
                <SectionTitle
                    id="dropdown"
                    title="Dropdown"
                    href="https://daisyui.com/components/dropdown"
                />
            </section>

            {/* modal */}
            <section>
                <SectionTitle
                    title="Modal"
                    id="modal"
                    href="https://daisyui.com/components/modal"
                />
            </section>

            {/* swap  */}
            <section>
                <SectionTitle
                    title="Swap"
                    id="swap"
                    href="https://daisyui.com/components/swap"
                />
            </section>

            {/* theme controller */}
            <section>
                <SectionTitle
                    title="Theme Controller"
                    id="theme-controller"
                    href="https://daisyui.com/components/theme-controller"
                />
            </section>
        </>
    );
}
