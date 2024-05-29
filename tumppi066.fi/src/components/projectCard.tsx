import { Card } from "./ui/card";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ReactElement } from "react";
import { useEffect, useState, useMemo } from "react";

export default function ProjectCard({name, Description, github, additional, additionalText, image, tags}: {name: string, Description: ReactElement, github: string, additional: string, additionalText: string, image: string, tags: string[]}) {
    // Generate a random number between -50 and 50
    const randomXOffset = useMemo(() => Math.floor(Math.random() * 50) - 25, []);
    const randomYOffset = useMemo(() => Math.floor(Math.random() * 50) - 25, []);
    const randomRotation = useMemo(() => Math.floor(Math.random() * 4) - 2, []);

    // State to hold the current viewport width
    const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1000);

    // Effect to update the viewport width when the window is resized
    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Check if the viewport width is above the md breakpoint
    const isMd = viewportWidth >= 768;

    return (
        <Card className="w-full overflow-visible group opacity-100 transition-all shadow-sm hover:shadow-lg shadow-black hover:shadow-black" 
            style={isMd ? { 
                transform: `translateX(${randomXOffset}px) translateY(${randomYOffset}px) rotate(${randomRotation}deg)` 
            } : {}}
        >
            <div className="flex flex-col gap-4 p-4 justify-between h-full">
                <div className="flex flex-row items-center justify-between gap-2">
                    <h1 className="text-2xl font-semibold font-mono">{name}</h1>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub size={24} />
                    </a>
                </div>
                <div className="flex text-start group flex-col-reverse md:flex-row-reverse gap-2 items-center">
                    {image !== "" &&
                        <img src={image} className="w-full md:w-1/2 object-cover rounded-md peer transition-all border border-transparent hover:border-white" onClick={() => window.open(image, "_blank")} />
                    }
                    <div className="md:pr-2">
                        {Description}
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-2 items-center justify-between">
                    <div className="flex gap-2">
                        {additional && additionalText &&
                            <Button variant={"outline"} onClick={
                                () => window.open(additional, "_blank")
                            } className="font-mono font-semibold">
                                {additionalText}
                            </Button>
                        }
                        <Button variant={"outline"} onClick={
                            () => window.open(github, "_blank")
                        } className="font-mono font-semibold">
                            GitHub
                        </Button>
                    </div>
                    <div>
                        {tags && tags.length > 0 && 
                            <div className="flex flex-row gap-2 pb-2">
                                {tags.map((tag) => {
                                    return (
                                        <Badge key={tag} className="font-mono font-semibold rounded-md h-6"> 
                                            {tag}
                                        </Badge>
                                    );
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Card>
    );
}