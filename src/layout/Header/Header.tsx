import Link from "next/link";
import {
  Avatar,
  Badge,
  Input,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <div className="flex flex-1">
      <div className="flex max-w-[16rem] flex-[25%] items-center px-6 py-2">
        <Link href="/">
          <h1 className="text-xl font-semibold">Max Movie</h1>
        </Link>
      </div>
      <div className="flex flex-1 justify-between px-4 py-2">
        <div className="flex">
          <ul className="flex items-center gap-4">
            <li className="text-small font-semibold">
              <Link href="/movies">Movies</Link>
            </li>
            <li className="text-small font-semibold">
              <Link href="/series">Series</Link>
            </li>
            <li className="text-small font-semibold">
              <Link href="/animations">Animations</Link>
            </li>
            <li className="text-small font-semibold">
              <Link href="/genres">Genres</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <Input
            size="sm"
            label=""
            radius="lg"
            color="default"
            variant="bordered"
            labelPlacement="outside"
            className="max-w-xs"
            endContent={<IoSearch size={18} />}
          />
          <Button size="sm" radius="lg" color="secondary" variant="bordered">
            Signin
          </Button>
          <Button
            size="sm"
            radius="lg"
            color="secondary"
            variant="solid"
            className="px-8">
            Subscribe
          </Button>
          <Badge color="danger" content={2}>
            <FaRegBell size={20} />
          </Badge>
          <Popover
            radius="md"
            placement="bottom"
            classNames={{ content: "h-52 w-64" }}>
            <PopoverTrigger>
              <div className="flex items-center gap-1">
                <Avatar
                  size="sm"
                  color="default"
                  src=""
                  className="cursor-pointer"
                />
                <FaChevronDown size={12} />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div>
                <h1>Welcome</h1>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
