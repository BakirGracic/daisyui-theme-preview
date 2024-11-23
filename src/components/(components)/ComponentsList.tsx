import GroupTitle from "@/components/(components)/GroupTitle";

import ActionsGroup from "@/components/(components)/groups/ACTIONS/ActionsGroup";
import DataDisplayGroup from "@/components/(components)/groups/DATA_DISPLAY/DataDisplayGroup";
import NavigationGroup from "@/components/(components)/groups/NAVIGATION/NavigationGroup";
import FeedbackGroup from "@/components/(components)/groups/FEEDBACK/FeedbackGroup";
import DataInputGroup from "@/components/(components)/groups/DATA_INPUT/DataInputGroup";
import LayoutGroup from "@/components/(components)/groups/LAYOUT/LayoutGroup";
import MockupGroup from "@/components/(components)/groups/MOCKUP/MockupGroup";

export default function ComponentsList() {
    return (
        <div className="topMargin">
            {/* ACTIONS */}
            <GroupTitle
                id="actions"
                title="Actions"
                href="https://daisyui.com/components/button"
            />
            <ActionsGroup />

            {/* DATA DISPLAY */}
            <GroupTitle
                id="data-display"
                title="Data Display"
                href="https://daisyui.com/components/accordion"
            />
            <DataDisplayGroup />

            {/* NAVIGATION */}
            <GroupTitle
                id="navigation"
                title="Navigation"
                href="https://daisyui.com/components/breadcrumbs"
            />
            <NavigationGroup />

            {/* FEEDBACK */}
            <GroupTitle
                id="feedback"
                title="Feedback"
                href="https://daisyui.com/components/alert"
            />
            <FeedbackGroup />

            {/* DATA INPUT */}
            <GroupTitle
                id="data-input"
                title="Data Input"
                href="https://daisyui.com/components/checkbox"
            />
            <DataInputGroup />

            {/* LAYOUT */}
            <GroupTitle
                id="layout"
                title="Layout"
                href="https://daisyui.com/components/artboard"
            />
            <LayoutGroup />

            {/* MOCKUP */}
            <GroupTitle
                id="mockup"
                title="Mockup"
                href="https://daisyui.com/components/mockup-browser/"
            />
            <MockupGroup />
        </div>
    );
}
