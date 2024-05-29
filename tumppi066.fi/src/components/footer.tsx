import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoLogoGithub } from "react-icons/io";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Footer() {
    const page = useRouter().pathname;
    const push = useRouter().push;

    const formatter = new Intl.DateTimeFormat([], {
        timeZone: 'Europe/Helsinki',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    const [time, setTime] = useState("Loading...");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formatter.format(new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

	return (
        <div className="border h-10 rounded-sm flex items-center justify-between p-4">
            <div className="flex gap-5">
                <Tooltip>
                    <TooltipTrigger>
                        <p className="text-muted-foreground font-mono text-sm gap-1.5 hidden md:flex">
                            With 
                            <span className="text-red-300 opacity-80">♥</span> 
                            from 
                            <span className="text-green-300 opacity-80">Tampere</span> 
                            {'> '} 
                            {time}
                        </p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=23.52825164794922%2C61.38652670080459%2C23.901786804199222%2C61.60002861988763&amp;layer=mapnik"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=12/61.4935/23.7150">View Larger Map</a></small>
                    </TooltipContent>
                </Tooltip>
            </div>

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink onClick={() => push("/")} className="cursor-pointer">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {page !== "/" && (
                        <BreadcrumbSeparator />
                    )}
                    <BreadcrumbItem>
                        <BreadcrumbLink onClick={() => push(page)} className="cursor-pointer">
                            <p className="">{page.slice(1, 999)}</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="gap-3 items-center hidden md:flex">
                <p className="text-muted font-mono text-xs">Tumppi066 © 2024</p>
                <a href="https://github.com/Tumppi066" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className="w-5 h-5 opacity-30 hover:opacity-100 transition-all cursor-pointer" />
                </a>
                <a href="https://discordapp.com/users/304923494570000384" target="_blank" rel="noopener noreferrer">
                    <BsDiscord className="w-5 h-5 opacity-30 hover:opacity-100 transition-all cursor-pointer" />
                </a>
                <a href="mailto:contact@tumppi066.fi">
                    <MdEmail className="w-5 h-5 opacity-30 hover:opacity-100 transition-all cursor-pointer" />
                </a>
                <a href="https://www.youtube.com/channel/UCltUSXcpOqq0SS_y9QCUO3Q" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="w-5 h-5 opacity-30 hover:opacity-100 transition-all cursor-pointer" />
                </a>
            </div>
        </div>
	);
}
