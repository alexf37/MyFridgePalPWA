import Link from "next/link";
import { HomeIcon, ScanLineIcon, SproutIcon, StoreIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

const NavItem = ({
  href,
  label,
  children,
}: PropsWithChildren<{ href: string; label: string }>) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center text-slate-700"
    >
      {children}
      <div className="mt-1 text-xs font-semibold">{label}</div>
    </Link>
  );
};

export default function BottomNavbar() {
  return (
    <>
      <nav className="pb-safe z-10 mt-auto shrink-0 rounded-t-3xl bg-white shadow-2xl drop-shadow-2xl">
        <div className="flex justify-around px-4 pb-2 pt-4">
          <NavItem label="Home" href="/">
            <HomeIcon />
          </NavItem>
          <NavItem label="Scan" href="/scan">
            <ScanLineIcon />
          </NavItem>
          <NavItem label="Plan" href="/plan">
            <SproutIcon />
          </NavItem>
          <NavItem label="Market" href="/market">
            <StoreIcon />
          </NavItem>
        </div>
      </nav>
    </>
  );
}
