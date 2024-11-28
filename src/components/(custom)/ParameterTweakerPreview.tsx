import AvatarWEBP from "@/public/images/avatar.webp";
import Image from "next/image";

const Wrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`flex w-full flex-wrap gap-3 justify-center mb-10 overflow-auto ${className}`}>{children}</div>;
};

export default function ParameterTweakerPreview() {
    return (
        <div
            id="custom-theme-preview-box"
            className="rounded-box border border-neutral-content/30 w-full max-h-[1280px] p-3 md:p-5 overflow-y-auto bg-base-100 text-base-content"
        >
            <Wrapper>
                <button className="btn">Default</button>
                <button className="btn btn-neutral">Neutral</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-link">Link</button>
            </Wrapper>

            <Wrapper>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-error">Error</button>
            </Wrapper>

            <Wrapper>
                <button className="btn btn-outline">Default</button>
                <button className="btn btn-outline btn-primary">Primary</button>
                <button className="btn btn-outline btn-secondary">Secondary</button>
                <button className="btn btn-outline btn-accent">Accent</button>
            </Wrapper>

            <Wrapper>
                <button className="btn btn-outline btn-info">Info</button>
                <button className="btn btn-outline btn-success">Success</button>
                <button className="btn btn-outline btn-warning">Warning</button>
                <button className="btn btn-outline btn-error">Error</button>
            </Wrapper>

            <Wrapper>
                <div className="badge">default</div>
                <div className="badge badge-neutral">neutral</div>
                <div className="badge badge-primary">primary</div>
                <div className="badge badge-secondary">secondary</div>
                <div className="badge badge-accent">accent</div>
                <div className="badge badge-ghost">ghost</div>
            </Wrapper>

            <Wrapper>
                <div className="badge badge-outline">default</div>
                <div className="badge badge-primary badge-outline">primary</div>
                <div className="badge badge-secondary badge-outline">secondary</div>
                <div className="badge badge-accent badge-outline">accent</div>
            </Wrapper>

            <Wrapper>
                <div className="badge badge-info gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-4 w-4 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    info
                </div>
                <div className="badge badge-success gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-4 w-4 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    success
                </div>
                <div className="badge badge-warning gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-4 w-4 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    warning
                </div>
                <div className="badge badge-error gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-4 w-4 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    error
                </div>
            </Wrapper>

            <Wrapper>
                <button className="btn">
                    Inbox
                    <div className="badge">+99</div>
                </button>
                <button className="btn">
                    Inbox
                    <div className="badge badge-secondary">+99</div>
                </button>
            </Wrapper>

            <Wrapper>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
            </Wrapper>

            <Wrapper>
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
            </Wrapper>

            <Wrapper>
                <span className="loading loading-dots loading-xs"></span>
                <span className="loading loading-dots loading-sm"></span>
                <span className="loading loading-dots loading-md"></span>
                <span className="loading loading-dots loading-lg"></span>
            </Wrapper>

            <Wrapper>
                <span className="loading loading-spinner loading-xs"></span>
                <span className="loading loading-spinner loading-sm"></span>
                <span className="loading loading-spinner loading-md"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </Wrapper>

            <Wrapper>
                <input
                    type="checkbox"
                    className="toggle toggle-success"
                    defaultChecked
                />
                <input
                    type="checkbox"
                    className="toggle toggle-warning"
                    defaultChecked
                />
                <input
                    type="checkbox"
                    className="toggle toggle-info"
                    defaultChecked
                />
                <input
                    type="checkbox"
                    className="toggle toggle-error"
                    defaultChecked
                />
            </Wrapper>

            <Wrapper>
                <select
                    defaultValue="disabled"
                    className="select select-primary w-full max-w-xs"
                >
                    <option
                        disabled
                        value="disabled"
                    >
                        What is the best TV show?
                    </option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
            </Wrapper>

            <Wrapper>
                <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-primary"
                />
                <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-secondary"
                />
                <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-accent"
                />
                <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-info"
                />
                <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-success"
                />
                <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-warning"
                />
                <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-error"
                />
            </Wrapper>

            <Wrapper>
                <input
                    type="file"
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
            </Wrapper>

            <Wrapper>
                <label className="input input-primary input-bordered flex items-center gap-2">
                    Name
                    <input
                        type="text"
                        className="grow"
                        placeholder="Daisy"
                    />
                </label>
                <label className="input input-secondary input-bordered flex items-center gap-2">
                    Email
                    <input
                        type="text"
                        className="grow"
                        placeholder="daisy@site.com"
                    />
                </label>
                <label className="input input-accent input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                    />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </label>
                <label className="input input-info input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                    />
                    <span className="badge badge-info">Optional</span>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-error">What is your name?</span>
                        <span className="label-text-alt text-error">Top Right label</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-error input-bordered w-full max-w-xs"
                    />
                    <div className="label">
                        <span className="label-text-alt text-error">Bottom Left label</span>
                        <span className="label-text-alt text-error">Bottom Right label</span>
                    </div>
                </label>
            </Wrapper>

            <Wrapper>
                <div
                    className="radial-progress"
                    style={{ "--value": 0 } as React.CSSProperties}
                    role="progressbar"
                >
                    0%
                </div>
                <div
                    className="radial-progress"
                    style={{ "--value": 20 } as React.CSSProperties}
                    role="progressbar"
                >
                    20%
                </div>
                <div
                    className="radial-progress"
                    style={{ "--value": 60 } as React.CSSProperties}
                    role="progressbar"
                >
                    60%
                </div>
                <div
                    className="radial-progress"
                    style={{ "--value": 80 } as React.CSSProperties}
                    role="progressbar"
                >
                    80%
                </div>
                <div
                    className="radial-progress"
                    style={{ "--value": 100 } as React.CSSProperties}
                    role="progressbar"
                >
                    100%
                </div>
            </Wrapper>

            <Wrapper>
                <div
                    role="alert"
                    className="alert alert-info"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 shrink-0 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>New software update available.</span>
                </div>
                <div
                    role="alert"
                    className="alert alert-success"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Your purchase has been confirmed!</span>
                </div>
                <div
                    role="alert"
                    className="alert alert-warning"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <span>Warning: Invalid email address!</span>
                </div>
                <div
                    role="alert"
                    className="alert alert-error"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Error! Task failed successfully.</span>
                </div>
                <div
                    role="alert"
                    className="alert"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info h-6 w-6 shrink-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>we use cookies for no reason.</span>
                    <div>
                        <button className="btn btn-sm">Deny</button>
                        <button className="btn btn-sm btn-primary">Accept</button>
                    </div>
                </div>
                <div
                    role="alert"
                    className="alert shadow-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info h-6 w-6 shrink-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <div>
                        <h3 className="font-bold">New message!</h3>
                        <div className="text-xs">You have 1 unread message</div>
                    </div>
                    <button className="btn btn-sm">See</button>
                </div>
            </Wrapper>

            <Wrapper>
                <ul className="steps">
                    <li
                        data-content="?"
                        className="step step-neutral"
                    >
                        Step 1
                    </li>
                    <li
                        data-content="!"
                        className="step step-neutral"
                    >
                        Step 2
                    </li>
                    <li
                        data-content="✓"
                        className="step step-neutral"
                    >
                        Step 3
                    </li>
                    <li
                        data-content="✕"
                        className="step step-neutral"
                    >
                        Step 4
                    </li>
                    <li
                        data-content="★"
                        className="step step-neutral"
                    >
                        Step 5
                    </li>
                    <li
                        data-content=""
                        className="step step-neutral"
                    >
                        Step 6
                    </li>
                    <li
                        data-content="●"
                        className="step step-neutral"
                    >
                        Step 7
                    </li>
                </ul>
            </Wrapper>

            <Wrapper>
                <div className="join">
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked
                    />
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="2"
                    />
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="3"
                    />
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="4"
                    />
                </div>
                <div className="join grid grid-cols-2">
                    <button className="join-item btn btn-outline">Previous page</button>
                    <button className="join-item btn btn-outline">Next</button>
                </div>
                <div className="join">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">Page 22</button>
                    <button className="join-item btn">»</button>
                </div>
            </Wrapper>

            <Wrapper className="!block !w-full">
                <div className="my-1 flex w-full justify-center gap-1">
                    <kbd className="kbd">q</kbd>
                    <kbd className="kbd">w</kbd>
                    <kbd className="kbd">e</kbd>
                    <kbd className="kbd">r</kbd>
                    <kbd className="kbd">t</kbd>
                    <kbd className="kbd">y</kbd>
                    <kbd className="kbd">u</kbd>
                    <kbd className="kbd">i</kbd>
                    <kbd className="kbd">o</kbd>
                    <kbd className="kbd">p</kbd>
                </div>
                <div className="my-1 flex w-full justify-center gap-1">
                    <kbd className="kbd">a</kbd>
                    <kbd className="kbd">s</kbd>
                    <kbd className="kbd">d</kbd>
                    <kbd className="kbd">f</kbd>
                    <kbd className="kbd">g</kbd>
                    <kbd className="kbd">h</kbd>
                    <kbd className="kbd">j</kbd>
                    <kbd className="kbd">k</kbd>
                    <kbd className="kbd">l</kbd>
                </div>
                <div className="my-1 flex w-full justify-center gap-1">
                    <kbd className="kbd">z</kbd>
                    <kbd className="kbd">x</kbd>
                    <kbd className="kbd">c</kbd>
                    <kbd className="kbd">v</kbd>
                    <kbd className="kbd">b</kbd>
                    <kbd className="kbd">n</kbd>
                    <kbd className="kbd">m</kbd>
                    <kbd className="kbd">/</kbd>
                </div>
            </Wrapper>

            <Wrapper className="!block !w-full">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Tailwind CSS chat bubble component"
                                src={AvatarWEBP}
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Tailwind CSS chat bubble component"
                                src={AvatarWEBP}
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble">I hate you!</div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
            </Wrapper>

            <Wrapper>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <Image
                            alt="Shoes"
                            src={AvatarWEBP}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <Image
                            alt="Shoes"
                            src={AvatarWEBP}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
