import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import ColorBlobs from "@/components/colorBlobs";

export default function App({ Component, pageProps }: AppProps) {
  return <div className="">
      <TooltipProvider>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] border rounded-md overflow-auto backdrop-blur-lg">
          <Component {...pageProps} />
        </div>
        <div className="inset-x-0 bottom-2 fixed pr-2 pl-2 backdrop-blur-md">
          <Footer />
        </div>
      </TooltipProvider>
    </div>
}
