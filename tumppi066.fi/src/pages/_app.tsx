import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import { TooltipProvider } from "@radix-ui/react-tooltip";;
import SideBar from "@/components/sideBar";

export default function App({ Component, pageProps }: AppProps) {
  return <div className="" >
      <TooltipProvider>
        <div className="flex flex-col w-[calc(100%-48px)] translate-x-12 items-center justify-center h-[calc(100vh-64px)] border rounded-md overflow-auto backdrop-blur-lg" >
          <Component { ...pageProps } />
        </div>
        <div className = "inset-y-0 left-0 fixed pr-2 pl-2 pb-14 pt-2" >
          <SideBar />
        </div>
        <div className = "inset-x-0 bottom-2 fixed pr-2 pl-2" >
          <Footer />
        </div>
      </TooltipProvider>
    </div>
}
