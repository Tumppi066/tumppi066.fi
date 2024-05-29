import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Header from "@/components/header";
import GithubStats from "@/components/githubStats";

export default function Home() {
	return (
		<div className="flex flex-col gap-y-20 items-center justify-center h-full">
			<Header />
		</div>
	);
}
