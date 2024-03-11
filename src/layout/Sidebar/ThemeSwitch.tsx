"use client";

import { Switch } from "@nextui-org/react";
import { useState } from "react";
import { IoSunny, IoMoonOutline } from "react-icons/io5";

const ThemeSwitch: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const handleIsDark = () => setIsDark((prev) => !prev);

  return (
    <div className="flex items-center gap-3">
      {isDark ? (
        <IoSunny size={20} color="var(--icon)" />
      ) : (
        <IoMoonOutline size={20} color="var(--icon)" />
      )}
      <h6>Dark Mode</h6>
      <Switch
        size="sm"
        color="default"
        onChange={handleIsDark}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <IoSunny className={className} />
          ) : (
            <IoMoonOutline className={className} />
          )
        }
      />
    </div>
  );
};

export default ThemeSwitch;
