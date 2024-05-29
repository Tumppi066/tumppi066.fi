import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { BsDiscord } from "react-icons/bs";

export default function Header() {
	const push = useRouter().push;
    return (
        <div className="flex flex-col text-center content-center justify-center gap-4 max-w-[600px] px-6 rounded-lg p-10 ">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] block">Tumppi066</h1>
            <p className="text-center text-lg">
                Developer, student, open-source enthusiast.
            </p>
            <div className="flex flex-col gap-4 pt-4">
                <Button variant={"default"} onClick={
                    () => push("/projects")
                } className="items-center flex justify-center">
                    Projects
                </Button>
                <Button variant={"outline"} className="font-semibold" onClick={
                    () => window.open("mailto:contact@tumppi066.fi", "_blank")
                }>
                    Email me
                </Button>
                <Button variant={"outline"} onClick={
                    () => window.open("https://github.com/Tumppi066", "_blank")
                }>
                    GitHub
                </Button>
                <div className="flex justify-between w-full">
                    <Button variant={"outline"} className="w-full rounded-r-none border-r-1" onClick={() => window.open("https://discord.gg/DpJpkNpqwD", "_blank")}>
                        ETS2LA Discord
                    </Button>
                    <Button variant={"outline"} className="w-full rounded-l-none border-l-0" onClick={() => window.open("https://wiki.tumppi066.fi", "_blank")}>
                        ETS2LA Wiki
                    </Button>
                </div>
            </div>
        </div>
	);
}
