"use client";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
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

        scrollFunction();

        window.addEventListener("scroll", scrollFunction);
    }, []);

    return (
        <button
            id="scrollToTopButton"
            className="btn btn-primary btn-circle fixed right-6 bottom-6 sm:right-10 sm:bottom-10 hidden transition-all shadow-xl"
        >
            <ArrowUpIcon className="size-6" />
        </button>
    );
}
