import { FaProjectDiagram } from "react-icons/fa";
import IconWithTooltip from "./iconWithTooltip";
import { IoSpeedometer } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useRouter } from "next/router";
import { Icon } from "lucide-react";

export default function SideBar() {
	const push = useRouter().push;
	return (
		<div className= "border h-full w-10 rounded-sm flex flex-col gap-3 items-center justify-center" >
			<IconWithTooltip Icon={FaHome} content={<p>Home</p>} side="right" delay={0} offset={10} path="/"/>
			<IconWithTooltip Icon={FaProjectDiagram} content={<p>Projects</p>} side="right" delay={0} offset={10} path="/projects"/>
			<IconWithTooltip Icon={IoSpeedometer} content={<p>Server Performance</p>} side="right" delay={0} offset={10} path="/performance"/>
			<IconWithTooltip Icon={MdDashboard} content={<p>Dashboard</p>} side="right" delay={0} offset={10} path="/dashboard"/>
		</div>
	);
}
