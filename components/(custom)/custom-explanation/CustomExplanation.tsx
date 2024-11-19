import Link from "next/link";

export default function CustomExplanation() {
    return (
        <div className="prose viewportMaxWidth mt-12 md:mt-20">
            <h1>Custom Theme Generator</h1>
            <p>In this page you can craft you fully custom DaisyUI theme. Before creating, you can read what you can change for better understanding. Happy themeing!</p>
            <Link
                className="btn btn-primary mb-7"
                href="#theme-generator"
            >
                Skip to Theme Generator
            </Link>

            <h2>Colors</h2>
            <p>
                Below is a list of DaisyUI semantic colors, they are superior to Tailwind colors (e.g. <code>bg-green-700</code>) primarily because of theming support, complementary color palettes and more!
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Required</th>
                            <th>Purpose</th>
                            <th>Example</th>
                            <th>CSS Variable</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>primary</code>
                            </td>
                            <td>Yes</td>
                            <td>Primary color of your theme</td>
                            <td>
                                <code>button-primary</code>
                            </td>
                            <td>
                                <code>oklch(var(--p))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>primary-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for primary color</td>
                            <td>
                                <code>text-primary-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--pc))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>secondary</code>
                            </td>
                            <td>Yes</td>
                            <td>Secondary color of your theme</td>
                            <td>
                                <code>bg-secondary</code>
                            </td>
                            <td>
                                <code>oklch(var(--s))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>secondary-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for secondary color</td>
                            <td>
                                <code>outline-secondary-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--sc))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>accent</code>
                            </td>
                            <td>Yes</td>
                            <td>Accent color of your theme</td>
                            <td>
                                <code>fill-accent</code>
                            </td>
                            <td>
                                <code>oklch(var(--a))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>accent-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for accent color</td>
                            <td>
                                <code>text-accent-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--ac))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>neutral</code>
                            </td>
                            <td>Yes</td>
                            <td>Neutral color of your theme</td>
                            <td>
                                <code>bg-neutral</code>
                            </td>
                            <td>
                                <code>oklch(var(--n))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>neutral-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for neutral color</td>
                            <td>
                                <code>text-neutral-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--nc))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>base-100</code>
                            </td>
                            <td>Yes</td>
                            <td>Base color of theme (background)</td>
                            <td>
                                <code>bg-base-100</code>
                            </td>
                            <td>
                                <code>oklch(var(--b1))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>base-200</code>
                            </td>
                            <td>No</td>
                            <td>Darker than base-100, automatically added if not specified</td>
                            <td>
                                <code>bg-base-200</code>
                            </td>
                            <td>
                                <code>oklch(var(--b2))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>base-300</code>
                            </td>
                            <td>No</td>
                            <td>Darker than base-200, automatically added if not specified</td>
                            <td>
                                <code>bg-base-300</code>
                            </td>
                            <td>
                                <code>oklch(var(--b3))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>base-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for base colors</td>
                            <td>
                                <code>text-base-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--bc))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>info</code>
                            </td>
                            <td>No</td>
                            <td>Color for information elements</td>
                            <td>
                                <code>bg-info</code>
                            </td>
                            <td>
                                <code>oklch(var(--in))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>info-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for info color</td>
                            <td>
                                <code>text-info-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--inc))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>success</code>
                            </td>
                            <td>No</td>
                            <td>Color for success elements</td>
                            <td>
                                <code>bg-success</code>
                            </td>
                            <td>
                                <code>oklch(var(--su))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>success-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for success color</td>
                            <td>
                                <code>text-success-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--suc))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>warning</code>
                            </td>
                            <td>No</td>
                            <td>Color for warning elements</td>
                            <td>
                                <code>bg-warning</code>
                            </td>
                            <td>
                                <code>oklch(var(--wa))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>warning-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for warning color</td>
                            <td>
                                <code>text-warning-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--wac))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>error</code>
                            </td>
                            <td>No</td>
                            <td>Color for error elements</td>
                            <td>
                                <code>bg-error</code>
                            </td>
                            <td>
                                <code>oklch(var(--er))</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>error-content</code>
                            </td>
                            <td>No</td>
                            <td>Foreground content color for error color</td>
                            <td>
                                <code>text-error-content</code>
                            </td>
                            <td>
                                <code>oklch(var(--erc))</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Color Utility Classes</h2>
            <p>Below is a list of utility classes that can be paired with DaisyUI colors</p>
            <ul>
                <li>
                    <code>bg-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>to-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>via-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>from-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>text-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>ring-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>fill-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>caret-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>stroke-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>border-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>divide-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>accent-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>shadow-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>outline-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>decoration-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>placeholder-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    <code>ring-offset-&#123;COLOR_NAME&#125;</code>
                </li>
                <li>
                    you can also change opacity using <code>&#123;UTILITY_CLASS&#125;/&#123;NUMBER&#125;</code>, e.g. <code>bg-primary/50</code>
                </li>
            </ul>

            <h2>CSS Variables</h2>
            <p>Some core theme design decisions are stored in CSS variables. Below is a table view of variables you can customize</p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                            <th>Valid Value</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--rounded-box</code>
                            </td>
                            <td>Border radius rounded-box utility class, used in card and other large boxes</td>
                            <td>
                                <code>1rem</code>
                            </td>
                            <td>
                                <code>--rounded-box: 1rem;</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>--rounded-btn</code>
                            </td>
                            <td>Border radius rounded-btn utility class, used in buttons and similar element</td>
                            <td>
                                <code>0.5rem</code>
                            </td>
                            <td>
                                <code>--rounded-btn: 0.5rem;</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>--rounded-badge</code>
                            </td>
                            <td>Border radius rounded-badge utility class, used in badges and similar</td>
                            <td>
                                <code>1.9rem</code>
                            </td>
                            <td>
                                <code>--rounded-badge: 1.9rem;</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>--animation-btn</code>
                            </td>
                            <td>Duration of animation when you click on button</td>
                            <td>
                                <code>0.25s</code>
                            </td>
                            <td>
                                <code>--animation-btn: 0.25s;</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>--animation-input</code>
                            </td>
                            <td>Duration of animation for inputs like checkbox, toggle, radio, etc</td>
                            <td>
                                <code>0.2s</code>
                            </td>
                            <td>
                                <code>--animation-input: 0.2s;</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>--btn-focus-scale</code>
                            </td>
                            <td>Scale transform of button when you focus on it</td>
                            <td>
                                <code>0.95</code>
                            </td>
                            <td>
                                <code>--btn-focus-scale: 0.95;</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>--border-btn</code>
                            </td>
                            <td>Border width of buttons</td>
                            <td>
                                <code>1px</code>
                            </td>
                            <td>
                                <code>--border-btn: 1px;</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tab-border</code>
                            </td>
                            <td>Border width of tabs</td>
                            <td>
                                <code>1px</code>
                            </td>
                            <td>
                                <code>--tab-border: 1px;</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tab-radius</code>
                            </td>
                            <td>Border radius of tabs</td>
                            <td>
                                <code>0.5rem</code>
                            </td>
                            <td>
                                <code>--tab-radius: 0.5rem;</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                CSS Variables for <code>tab</code> component
            </h3>
            <p>
                These CSS variables can be customized only for the <code>tab</code> component
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--tab-border</code>
                            </td>
                            <td>Border width of tab</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tab-border-color</code>
                            </td>
                            <td>Border color of tab</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tab-padding</code>
                            </td>
                            <td>Horizontal padding of tab</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tab-bg</code>
                            </td>
                            <td>Background color of tabs-lifted</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tab-radius</code>
                            </td>
                            <td>Border radius of tabs-lifted</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tab-corner-bg</code>
                            </td>
                            <td>Background color of tabs-lifted corner</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--circle-pos</code>
                            </td>
                            <td>Position of circle in the corner of tabs-lifted</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tab-grad</code>
                            </td>
                            <td>Radial-gradient size in the corner of tabs-lifted</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                CSS Variables for <code>countdown</code> component
            </h3>
            <p>
                These CSS variables can be customized only for the <code>countdown</code> component
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--value</code>
                            </td>
                            <td>Value of countdown</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                CSS Variables for <code>radial-progress</code> component
            </h3>
            <p>
                These CSS variables can be customized only for the <code>radial-progress</code> component
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--value</code>
                            </td>
                            <td>Value of progress circle</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--size</code>
                            </td>
                            <td>Size of progress circle</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--thickness</code>
                            </td>
                            <td>Thickness of progress circle</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                CSS Variables for <code>tooltip</code> component
            </h3>
            <p>
                These CSS variables can be customized only for the <code>tooltip</code> component
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--tooltip-color</code>
                            </td>
                            <td>Background color of tooltip</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tooltip-text-color</code>
                            </td>
                            <td>Text color of tooltip</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tooltip-offset</code>
                            </td>
                            <td>Offset of tooltip from target element</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tooltip-tail</code>
                            </td>
                            <td>Size of tooltip tail</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--tooltip-tail-offset</code>
                            </td>
                            <td>Offset of tooltip tail from target element</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                CSS Variables for <code>checkbox</code> component
            </h3>
            <p>
                These CSS variables can be customized only for the <code>checkbox</code> component
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--chkbg</code>
                            </td>
                            <td>Background color of checkbox</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--chkfg</code>
                            </td>
                            <td>Foreground color of checkbox</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                CSS Variables for <code>toggle</code> component
            </h3>
            <p>
                These CSS variables can be customized only for the <code>toggle</code> component
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--tglbg</code>
                            </td>
                            <td>Background color of toggle</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--handleoffset</code>
                            </td>
                            <td>Offset of toggle handle</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                CSS Variables for <code>range</code> component
            </h3>
            <p>
                These CSS variables can be customized only for the <code>range</code> component
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--filler-size</code>
                            </td>
                            <td>Size of range thumb</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--filler-offset</code>
                            </td>
                            <td>Offset of range thumb</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--range-shdw</code>
                            </td>
                            <td>Shadow color of range thumb</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                CSS Variables for <code>glass</code> component
            </h3>
            <p>
                These CSS variables can be customized only for the <code>glass</code> component
            </p>
            <div className="overflow-x-auto">
                <table className="text-nowrap">
                    <thead>
                        <tr>
                            <th>Variable Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>--glass-blur</code>
                            </td>
                            <td>Blur value of glass effect</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--glass-opacity</code>
                            </td>
                            <td>Opacity of glass effect</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--glass-border-opacity</code>
                            </td>
                            <td>Opacity of glass border</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--glass-reflex-degree</code>
                            </td>
                            <td>Degree of glass reflex</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--glass-reflex-opacity</code>
                            </td>
                            <td>Opacity of glass reflex</td>
                        </tr>
                        <tr>
                            <td>
                                <code>--glass-text-shadow-opacity</code>
                            </td>
                            <td>Opacity of text shadow</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
