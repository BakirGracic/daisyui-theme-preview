export default function Page() {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input
                    id="left-sidebar-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col ">
                    <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
                        <div className="flex-1">
                            <label
                                htmlFor="left-sidebar-drawer"
                                className="btn btn-primary drawer-button lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-5 inline-block w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    ></path>
                                </svg>
                            </label>
                            <h1 className="text-2xl font-semibold ml-2">Dashboard</h1>
                        </div>
                        <div className="flex-none ">
                            <label className="swap ">
                                <input type="checkbox" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-set-theme="light"
                                    data-act-classname="ACTIVECLASS"
                                    className="fill-current w-6 h-6 swap-on"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-set-theme="dark"
                                    data-act-classname="ACTIVECLASS"
                                    className="fill-current w-6 h-6 swap-off"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    ></path>
                                </svg>
                            </label>
                            <button className="btn btn-ghost ml-4  btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                        ></path>
                                    </svg>
                                    <span className="indicator-item badge badge-secondary badge-sm">15</span>
                                </div>
                            </button>
                            <div className="dropdown dropdown-end ml-4">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                            alt="profile"
                                        />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li className="justify-between">
                                        <a href="/app/settings-profile">
                                            Profile Settings <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/app/settings-billing">Bill History</a>
                                    </li>
                                    <div className="divider mt-0 mb-0"></div>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="">
                                <div className="w-72 ">
                                    <input
                                        type="text"
                                        className="input input-bordered w-72"
                                        placeholder="YYYY-MM-DD ~ YYYY-MM-DD"
                                        autoComplete="off"
                                        role="presentation"
                                        // value="2024-11-18 ~ 2024-11-18"
                                        // onChange={() => {alert('data changed')}}
                                    />
                                    <button
                                        type="button"
                                        className="invisible"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div className="transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden">
                                        <div className="absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600"></div>
                                        <div className="mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg">
                                            <div className="flex flex-col lg:flex-row py-2">
                                                <div className="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1">
                                                    <ul className="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
                                                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">Today</li>
                                                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">Yesterday</li>
                                                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">Last 7 days</li>
                                                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">Last 30 days</li>
                                                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">This month</li>
                                                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">Last month</li>
                                                    </ul>
                                                </div>
                                                <div className="flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 md:pl-2 pr-2 lg:pr-1">
                                                    <div className="w-full md:w-[297px] md:min-w-[297px]">
                                                        <div className="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5">
                                                            <div className="flex-none">
                                                                <button
                                                                    type="button"
                                                                    className="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <div className="flex flex-1 items-center space-x-1.5">
                                                                <div className="w-1/2">
                                                                    <button
                                                                        type="button"
                                                                        className="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                                                                    >
                                                                        Nov
                                                                    </button>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <button
                                                                        type="button"
                                                                        className="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                                                                    >
                                                                        2024
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex-none">
                                                                <button
                                                                    type="button"
                                                                    className="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
                                                            <div className="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
                                                                <div className="tracking-wide text-gray-500 text-center">Sun</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Mon</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Tue</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Wed</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Thu</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Fri</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Sat</div>
                                                            </div>
                                                            <div className="grid grid-cols-7 gap-y-0.5 my-1">
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    27
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    28
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    29
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    30
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    31
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    1
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    2
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    3
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    4
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    5
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    6
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    7
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    8
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    9
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    10
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    11
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    12
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    13
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    14
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    15
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    16
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    17
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10  bg-blue-500 text-white font-medium rounded-full"
                                                                >
                                                                    18
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    19
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    20
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    21
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    22
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    23
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    24
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    25
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    26
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    27
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    28
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    29
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    30
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    1
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    2
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    3
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    4
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    5
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    6
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    7
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="bg-blue-500 h-7 w-1 rounded-full hidden md:block"></div>
                                                    </div>
                                                    <div className="w-full md:w-[297px] md:min-w-[297px]">
                                                        <div className="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5">
                                                            <div className="flex-none">
                                                                <button
                                                                    type="button"
                                                                    className="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <div className="flex flex-1 items-center space-x-1.5">
                                                                <div className="w-1/2">
                                                                    <button
                                                                        type="button"
                                                                        className="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                                                                    >
                                                                        Dec
                                                                    </button>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <button
                                                                        type="button"
                                                                        className="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                                                                    >
                                                                        2024
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex-none">
                                                                <button
                                                                    type="button"
                                                                    className="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
                                                            <div className="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
                                                                <div className="tracking-wide text-gray-500 text-center">Sun</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Mon</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Tue</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Wed</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Thu</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Fri</div>
                                                                <div className="tracking-wide text-gray-500 text-center">Sat</div>
                                                            </div>
                                                            <div className="grid grid-cols-7 gap-y-0.5 my-1">
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    1
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    2
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    3
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    4
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    5
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    6
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    7
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    8
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    9
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    10
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    11
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    12
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    13
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    14
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    15
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    16
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    17
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    18
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    19
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    20
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    21
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    22
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    23
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    24
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    25
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    26
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    27
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    28
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    29
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    30
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                                                >
                                                                    31
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    1
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    2
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    3
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    4
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    5
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    6
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    7
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    8
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    9
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    10
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                                                >
                                                                    11
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right ">
                                <button className="btn btn-ghost btn-sm normal-case">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-4 mr-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                        ></path>
                                    </svg>
                                    Refresh Data{" "}
                                </button>
                                <button className="btn btn-ghost btn-sm normal-case  ml-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-4 mr-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                        ></path>
                                    </svg>
                                    Share{" "}
                                </button>
                                <div className="dropdown dropdown-bottom dropdown-end  ml-2">
                                    <label
                                        tabIndex={0}
                                        className="btn btn-ghost btn-sm normal-case btn-square "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                            ></path>
                                        </svg>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu menu-compact  p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <a>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                    ></path>
                                                </svg>
                                                Email Digests{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                                    ></path>
                                                </svg>
                                                Download{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure dark:text-slate-300 text-primary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title dark:text-slate-300">New Users</div>
                                    <div className="stat-value dark:text-slate-300 text-primary">34.7k</div>
                                    <div className="stat-desc  font-bold text-green-700 dark:text-green-300">↗︎ 2300 (22%)</div>
                                </div>
                            </div>
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure dark:text-slate-300 text-primary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title dark:text-slate-300">Total Sales</div>
                                    <div className="stat-value dark:text-slate-300 text-primary">$34,545</div>
                                    <div className="stat-desc  ">Current month</div>
                                </div>
                            </div>
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure dark:text-slate-300 text-primary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title dark:text-slate-300">Pending Leads</div>
                                    <div className="stat-value dark:text-slate-300 text-primary">450</div>
                                    <div className="stat-desc  ">50 in hot leads</div>
                                </div>
                            </div>
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure dark:text-slate-300 text-primary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title dark:text-slate-300">Active Users</div>
                                    <div className="stat-value dark:text-slate-300 text-primary">5.6k</div>
                                    <div className="stat-desc  font-bold text-rose-500 dark:text-red-400">↙ 300 (18%)</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                            <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
                                <div className="text-xl font-semibold ">Montly Active Users (in K)</div>
                                <div className="divider mt-2"></div>
                                <div className="h-full w-full pb-6 bg-base-100">
                                    <canvas
                                        role="img"
                                        height="179"
                                        width="359"
                                        style={{ display: "block", boxSizing: "border-box", height: "179px", width: "359px" }}
                                    ></canvas>
                                </div>
                            </div>
                            <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
                                <div className="text-xl font-semibold ">Revenue</div>
                                <div className="divider mt-2"></div>
                                <div className="h-full w-full pb-6 bg-base-100">
                                    <canvas
                                        role="img"
                                        height="179"
                                        width="359"
                                        style={{ display: "block", boxSizing: "border-box", height: "179px", width: "359px" }}
                                    ></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                            <div className="stats bg-base-100 shadow">
                                <div className="stat">
                                    <div className="stat-title">Amount to be Collected</div>
                                    <div className="stat-value">$25,600</div>
                                    <div className="stat-actions">
                                        <button className="btn btn-xs">View Users</button>
                                    </div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Cash in hand</div>
                                    <div className="stat-value">$5,600</div>
                                    <div className="stat-actions">
                                        <button className="btn btn-xs">View Members</button>
                                    </div>
                                </div>
                            </div>
                            <div className="stats bg-base-100 shadow">
                                <div className="stat">
                                    <div className="stat-figure invisible md:visible">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title">Total Likes</div>
                                    <div className="stat-value">25.6K</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-figure invisible md:visible">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title">Page Views</div>
                                    <div className="stat-value">2.6M</div>
                                    <div className="stat-desc">14% more than last month</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                            <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
                                <div className="text-xl font-semibold ">User Signup Source</div>
                                <div className="divider mt-2"></div>
                                <div className="h-full w-full pb-6 bg-base-100">
                                    <div className="overflow-x-auto">
                                        <table className="table w-full">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="normal-case">Source</th>
                                                    <th className="normal-case">No of Users</th>
                                                    <th className="normal-case">Conversion</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Facebook Ads</td>
                                                    <td>26,345</td>
                                                    <td>10.2%</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Google Ads</td>
                                                    <td>21,341</td>
                                                    <td>11.7%</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Instagram Ads</td>
                                                    <td>34,379</td>
                                                    <td>12.4%</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Affiliates</td>
                                                    <td>12,359</td>
                                                    <td>20.9%</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Organic</td>
                                                    <td>10,345</td>
                                                    <td>10.3%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
                                <div className="text-xl font-semibold ">Orders by Category</div>
                                <div className="divider mt-2"></div>
                                <div className="h-full w-full pb-6 bg-base-100">
                                    <canvas
                                        role="img"
                                        height="359"
                                        width="359"
                                        style={{ display: "block", boxSizing: "border-box", height: "359px", width: "359px" }}
                                    ></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="h-16"></div>
                    </div>
                </div>
                <div className="drawer-side  z-30  ">
                    <label
                        htmlFor="left-sidebar-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu  pt-2 w-80 bg-base-100 min-h-full   text-base-content">
                        <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-5 inline-block w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                        <li className="mb-2 font-semibold text-xl">
                            <a href="/app/welcome">
                                <img
                                    className="mask mask-squircle w-10"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="DashWind Logo"
                                />
                                DashWind{" "}
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="font-semibold  bg-base-200 "
                                href="/app/dashboard"
                                aria-current="page"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                    ></path>
                                </svg>{" "}
                                Dashboard{" "}
                                <span
                                    className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                    aria-hidden="true"
                                ></span>
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="font-normal"
                                href="/app/leads"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                                    ></path>
                                </svg>{" "}
                                Leads{" "}
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="font-normal"
                                href="/app/transactions"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>{" "}
                                Transactions{" "}
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="font-normal"
                                href="/app/charts"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                    ></path>
                                </svg>{" "}
                                Analytics{" "}
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="font-normal"
                                href="/app/integration"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                    ></path>
                                </svg>{" "}
                                Integration{" "}
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="font-normal"
                                href="/app/calendar"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                    ></path>
                                </svg>{" "}
                                Calendar{" "}
                            </a>
                        </li>
                        <li className="">
                            <div className="flex flex-col">
                                <div className="w-full block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-6 w-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                                        ></path>
                                    </svg>{" "}
                                    Pages{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </div>
                                <div className=" w-full hidden">
                                    <ul className="menu menu-compact">
                                        <li>
                                            <a href="/login">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                                    ></path>
                                                </svg>{" "}
                                                Login{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/register">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    ></path>
                                                </svg>{" "}
                                                Register{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/forgot-password">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                                    ></path>
                                                </svg>{" "}
                                                Forgot Password{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/app/blank">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                    ></path>
                                                </svg>{" "}
                                                Blank Page{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/app/404">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                                    ></path>
                                                </svg>{" "}
                                                404{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex flex-col">
                                <div className="w-full block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-6 w-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>{" "}
                                    Settings{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </div>
                                <div className=" w-full hidden">
                                    <ul className="menu menu-compact">
                                        <li>
                                            <a href="/app/settings-profile">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    ></path>
                                                </svg>{" "}
                                                Profile{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/app/settings-billing">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                                    ></path>
                                                </svg>{" "}
                                                Billing{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/app/settings-team">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                                    ></path>
                                                </svg>{" "}
                                                Team Members{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex flex-col">
                                <div className="w-full block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-6 w-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                        ></path>
                                    </svg>{" "}
                                    Documentation{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  rotate-180"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </div>
                                <div className=" w-full ">
                                    <ul className="menu menu-compact">
                                        <li>
                                            <a href="/app/getting-started">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                    ></path>
                                                </svg>{" "}
                                                Getting Started{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/app/features">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                                                    ></path>
                                                </svg>{" "}
                                                Features{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/app/components">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                                                    ></path>
                                                </svg>{" "}
                                                Components{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" fixed overflow-hidden z-20 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out  transition-all delay-500 opacity-0 translate-x-full  ">
                <section className="w-80 md:w-96  right-0 absolute bg-base-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform   translate-x-full ">
                    <div className="relative  pb-5 flex flex-col  h-full">
                        <div className="navbar   flex pl-4 pr-4   shadow-md ">
                            <button className="float-left btn btn-circle btn-outline btn-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <span className="ml-2 font-bold text-xl"></span>
                        </div>
                        <div className="overflow-y-scroll pl-4 pr-4">
                            <div className="flex flex-col w-full"></div>
                        </div>
                    </div>
                </section>
                <section className=" w-screen h-full cursor-pointer "></section>
            </div>
            <div className="notification-container notification-container-empty">
                <div></div>
            </div>
            <div className="modal ">
                <div className="modal-box  ">
                    <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                    <h3 className="font-semibold text-2xl pb-6 text-center"></h3>
                    <div></div>
                </div>
            </div>
        </>
    );
}
