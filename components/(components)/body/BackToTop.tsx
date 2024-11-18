"use client";

import { useEffect } from "react";

export default function BackToTop() {
    useEffect(() => {
        const scrollToTopButton = document.getElementById("scrollToTopButton");

        const scrollFunction = () => {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollToTopButton?.classList.remove("hidden");
            } else {
                scrollToTopButton?.classList.add("hidden");
            }
        };
        const backToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        scrollToTopButton?.addEventListener("click", backToTop);

        window.addEventListener("scroll", scrollFunction);
    }, []);

    return (
        <button
            id="scrollToTopButton"
            className="btn btn-primary btn-circle fixed right-10 bottom-10 hidden transition-all shadow-lg"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
            </svg>
        </button>
    );
}
