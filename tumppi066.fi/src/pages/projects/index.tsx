import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoLogoGithub } from "react-icons/io";
import { useRouter } from "next/router";
import ProjectCard from "@/components/projectCard";

export default function Header() {
	const push = useRouter().push;
    return (
        <div className="flex flex-col gap-4 md:gap-20 max-w-[600px] min-h-full justify-start p-2 md:pt-24">
            <ProjectCard 
                name="ETS2LA" Description={
                    <p>
                        <span className="font-mono text-green-300">Autopilot</span> software for Euro Truck Simulator 2. In addition provides an <span className="font-mono text-yellow-100">easy to use interface</span> for developers to create their own <span className="font-mono text-blue-300">plugins</span>.
                    </p>
                }
                github="https://github.com/ETS2LA" tags={["Python", "Self Driving"]}
                additional="https://www.youtube.com/watch?v=HMEzgTm0OWs" additionalText="Demo" 
                image="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/blob/main/assets/markdownLogo.png?raw=true" 
            />
            <ProjectCard
                name="ETS2LA / Installer" Description={
                    <p>
                        <span className="font-mono text-blue-300">Installer</span> program for ETS2LA. Downloads and installs the latest version and handles requirements. Built using <span className="font-mono text-yellow-100">NSIS</span> to be highly <span className="font-mono text-green-300">compatible</span> with most PC hardware.
                    </p>
                }
                github="https://github.com/ETS2LA/installer" tags={["NSIS", "Installer", "Compiled"]}
                additional="https://nsis.sourceforge.io/Main_Page" additionalText="What is NSIS?"
                image=""
            />
            <ProjectCard
                name="ts-map-lane-assist" Description={
                    <p>
                        A fork of the original project, adds <span className="font-mono text-green-300">data extraction</span> for use in ETS2LA. On startup outputs <span className="font-mono text-yellow-100">json</span> files containing: <span className="font-mono text-blue-300"><br/>- nodes <br/>- roads <br/>- prefabs <br/>- ferries</span>
                    </p>
                }
                github="https://github.com/Tumppi066/ts-map-lane-assist" tags={["C++", "Data Extraction", "Fork"]}
                additional="https://github.com/Spedcord/ts-map" additionalText="Original Project"
                image="https://github.com/Tumppi066/ts-map-lane-assist/raw/master/docs/preview.jpg"
            />
           <ProjectCard
                name="Terminal Video Player" Description={
                    <p>
                        Extremely <span className="font-mono text-green-300">well performing</span> video player for the terminal. Unfortunately over time the <span className="font-mono text-red-300">code has gotten messy</span>, as this project was originally for school. Still, I haven&apos;t seen a faster video player for the terminal, at least one that is <span className="font-mono text-blue-300">written in Python</span>.
                    </p>
                }
                github="https://github.com/Tumppi066/Terminal-Video-Player" tags={["Python", "Terminal", "Old Code!"]}
                additional="" additionalText=""
                image="https://github.com/Tumppi066/Terminal-Video-Player/blob/main/ExampleImage.jpg?raw=true"
            />
            <br/>
        </div>
	);
}
