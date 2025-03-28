"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import {
  Archive,
  Layout,
  LucideIcon,
  Menu,
  Clipboard,
  User,
  SlidersHorizontal,
  CircleDollarSign,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}
const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");
  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center  ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-400 dark:hover:text-blue-800 gap-3 transition-colors ${
          isActive ? "bg-blue-200 dark:bg-blue-600 dark:text-white" : ""
        }
         `}
      >
        <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700 dark:text-white`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
  };

  const sideBarClassNames = `fixed flex flex-col ${
    isSideBarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40 dark:bg-black`;

  return (
    <div className={sideBarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSideBarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <h1
          className={`${
            isSideBarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl dark:text-white`}
        >
          JSTOCK
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSideBar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSideBarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSideBarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500 dark:text-gray-100">
          &copy; 2025 JStock
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
