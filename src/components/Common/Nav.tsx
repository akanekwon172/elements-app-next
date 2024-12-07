import Link from "next/link";

import ThemeToggler from "@/components/Feature/ThemeToggler";

function Nav() {
  return (
    <div className="flex h-auto w-full items-center justify-between border-b-2 px-4 py-3 font-semibold">
      <Link href="/">Elements App</Link>
      <ThemeToggler />
    </div>
  );
}

export default Nav;
