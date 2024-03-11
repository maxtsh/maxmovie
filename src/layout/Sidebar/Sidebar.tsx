import Link from "next/link";
import { FaRegCompass, FaRegStar,  } from "react-icons/fa";
import { IoStopwatchOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import ThemeSwitch from "./ThemeSwitch";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-6 border-r-[0.0625rem] border-r-gray-200 p-2">
      <div className="flex flex-col pl-4">
        <p className="muted">MENU</p>
        <ul className="flex flex-col gap-4 px-2 py-4">
          <li>
            <Link href="/discover" className="flex items-center gap-3">
              <FaRegCompass size={20} color="var(--icon)" />
              <h6>Discovery</h6>
            </Link>
          </li>
          <li>
            <Link href="/toprated" className="flex items-center gap-3">
              <FaRegStar size={20} color="var(--icon)" />
              <h6>Top Rated</h6>
            </Link>
          </li>
          <li>
            <Link href="/comingsoon" className="flex items-center gap-3">
              <IoStopwatchOutline size={20} color="var(--icon)" />
              <h6>Coming Soon</h6>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col pl-4">
        <p className="muted">LIBRARY</p>
        <ul className="flex flex-col gap-4 px-2 py-4">
          <li>
            <Link href="/recent" className="flex items-center gap-3">
              <FaRegCompass size={20} color="var(--icon)" />
              <h6>Recent Played</h6>
            </Link>
          </li>
          <li>
            <Link href="/download" className="flex items-center gap-3">
              <FaRegStar size={20} color="var(--icon)" />
              <h6>Download</h6>
            </Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <Link href="/settings" className="flex items-center gap-3">
              <BsGear size={20} color="var(--icon)" />
              <h6>Settings</h6>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
