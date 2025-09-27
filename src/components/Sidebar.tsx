import { LogoIcon } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { Sidebaritem } from "./Sidebaritem";

export function Sidebar() {

    return <div className="bg-white h-screen w-72 border-r-2 fixed left-0 top-0 pl-4">

        <div className="text-2xl flex pl-2 pt-8 flex items-center gap-1">
           <div className="pr-1 text-purple-600">
            <LogoIcon/>
           </div>
            <div className="font-semibold">
             Brainly
            </div>
        </div>

        <div className="pt-8 flex flex-col gap-2 pl-4">
            <Sidebaritem text="Twitter" icon={<TwitterIcon/>}/>
            <Sidebaritem text="Youtube" icon={<YoutubeIcon/>} />
        </div>
    </div>
}
