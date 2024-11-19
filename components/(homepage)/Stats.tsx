import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/outline";

export const revalidate = 600; // 10 mins

export default async function Stats() {
    let npm_weekly, npm_version, github_stars;

    try {
        npm_weekly = await fetch("https://api.npmjs.org/downloads/point/last-week/daisyui")
            .then((res) => res.json())
            .then((data) => data.downloads);
    } catch (error) {
        console.error(error);
        npm_weekly = "N/A";
    }

    try {
        npm_version = await fetch("https://registry.npmjs.org/daisyui/latest")
            .then((res) => res.json())
            .then((data) => data.version);
    } catch (error) {
        console.error(error);
        npm_version = "N/A";
    }

    try {
        github_stars = await fetch("https://api.github.com/repos/saadeghi/daisyui")
            .then((res) => res.json())
            .then((data) => data.stargazers_count);
    } catch (error) {
        console.error(error);
        github_stars = "N/A";
    }

    return (
        <div className="text-center px-4 topMargin">
            <div className="stats shadow-lg stats-vertical md:stats-horizontal bg-base-300">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <ArrowDownTrayIcon className="size-8" />
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">{npm_weekly}</div>
                    <div className="stat-desc">this week on NPM</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <CheckBadgeIcon className="size-8" />
                    </div>
                    <div className="stat-title">Version</div>
                    <div className="stat-value">{npm_version}</div>
                    <div className="stat-desc">latest release</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <StarIcon className="size-8" />
                    </div>
                    <div className="stat-title">Stars</div>
                    <div className="stat-value">{github_stars}</div>
                    <div className="stat-desc">on GitHub</div>
                </div>
            </div>
        </div>
    );
}
