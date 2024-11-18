import GroupTitle from "@/components/(components)/body/GroupTitle";
import SectionTitle from "@/components/(components)/body/SectionTitle";
import Button from "@/components/(components)/body/ACTIONS/Button";

export default function ComponentsList() {
    return (
        <div className="p-4">
            {/* ACTION GROUP */}
            <GroupTitle
                id="actions"
                title="Actions"
                href="https://daisyui.com/components/button"
            />
            {/* button section */}
            <section>
                <SectionTitle
                    id="button"
                    title="Button"
                    href="https://daisyui.com/components/button"
                />
                <Button />
            </section>
            {/* dropdown section */}
            <section>
                <SectionTitle
                    id="dropdown"
                    title="Dropdown"
                    href="https://daisyui.com/components/dropdown"
                />
            </section>
            {/* modal section */}
            <section>
                <SectionTitle
                    title="Modal"
                    id="modal"
                    href="https://daisyui.com/components/modal"
                />
            </section>
            {/* swap section */}
            <section>
                <SectionTitle
                    title="Swap"
                    id="swap"
                    href="https://daisyui.com/components/swap"
                />
            </section>
            {/* theme controller section */}
            <section>
                <SectionTitle
                    title="Theme Controller"
                    id="theme-controller"
                    href="https://daisyui.com/components/theme-controller"
                />
            </section>

            {/* DATA DISPLAY GROUP */}
            <GroupTitle
                id="data-display"
                title="Data Display"
                href="https://daisyui.com/components/accordion"
            />

            {/* NAVIGATION GROUP */}
            <GroupTitle
                id="navigation"
                title="Navigation"
                href="https://daisyui.com/components/breadcrumbs"
            />

            {/* FEEDBACK GROUP */}
            <GroupTitle
                id="feedback"
                title="Feedback"
                href="https://daisyui.com/components/alert"
            />

            {/* DATA INPUT GROUP */}
            <GroupTitle
                id="data-input"
                title="Data Input"
                href="https://daisyui.com/components/checkbox"
            />

            {/* LAYOUT GROUP */}
            <GroupTitle
                id="layout"
                title="Layout"
                href="https://daisyui.com/components/artboard"
            />

            {/* MOCKUP GROUP */}
            <GroupTitle
                id="mockup"
                title="Mockup"
                href="https://daisyui.com/components/mockup-browser/"
            />
        </div>
    );
}
