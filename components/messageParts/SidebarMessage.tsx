import Link from "next/link";
import React from "react";

type Props = {};

function SidebarMessage({}: Props) {
  return (
    <li className="relative  h-auto hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md pl-2">
      <div className="group relative rounded-lg active:opacity-90 bg-token-sidebar-surface-tertiary">
        <Link
          href="/sage/68728b22-044c-45a9-90fe-f38fd542cc30"
          className="flex items-center gap-2 p-2"
        >
          <div className="relative grow overflow-hidden whitespace-nowrap text-sm">
            Pom-Cola Mocktail Names
            <div className="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-tertiary w-20 from-60%"></div>
          </div>
        </Link>
      </div>
    </li>
  );
}

export default SidebarMessage;
