import { set } from "date-fns";
import {
    Tooltip, TooltipContent, TooltipTrigger
} from "./ui/tooltip";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function IconWithTooltip({ Icon, content, side, delay, offset, path } : { Icon: any, content: JSX.Element, side?: "left" | "right" | "top" | "bottom", delay?: number, offset?: number, path?: string}) {
    if (delay === undefined) delay = 1;
    if (offset === undefined) offset = 0;
    if (side === undefined) side = "top";

    const [currentPath, setCurrentPath] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [opacity, setOpacity] = useState("opacity-30");
    
    const router = useRouter();

    useEffect(() => {
        setIsActive(router.pathname === path);
        setOpacity(router.pathname === path ? "opacity-100" : "opacity-30");
    }, [router.pathname]);

    return (
        <Tooltip delayDuration={delay}>
            <TooltipTrigger>
                <Icon className={"w-5 h-5 " + opacity + " hover:opacity-100 transition-all cursor-pointer"} onClick={() => {path && router.push(path) || null}} />
            </TooltipTrigger>
            <TooltipContent side={side} sideOffset={offset}>
                {content}
            </TooltipContent>
        </Tooltip>
    );
}