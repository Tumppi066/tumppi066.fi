import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Panel from "./panel";
import useSWR from "swr";

export default function GithubStats() {
    const {data: followerData, error: followerError} = useSWR("https://api.github.com/users/Tumppi066", async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    });
    // Extract the commit count from the GH Readme Streak Stats url
    const {data: contributionData, error: contributionError} = useSWR("https://streak-stats.demolab.com/?user=Tumppi066&theme=dark", async (url) => {
        const res = await fetch(url);
        const data = await res.text();
        const match = data.match(/data-commits="(\d+)"/);
        return match && parseInt(match[1]);
    });

	return (
        <div className="flex text-center content-center justify-center gap-4 w-min">
            {followerData &&
                <Panel title="Followers" Icon={Github} value1={followerData["followers"]} value2="Followers on GitHub" /> 
                ||
                <Panel title="Followers" Icon={Github} value1="Loading..." value2="Loading..." />
            }
            {contributionData &&
                <Panel title="Contributions" Icon={Github} value1={String(contributionData)} value2="Contributions over the past year" />
                ||
                <Panel title="Contributions" Icon={Github} value1="Loading..." value2="Loading..." />
            }
        </div>
	);
}
