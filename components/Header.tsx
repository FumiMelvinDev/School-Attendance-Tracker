import { getUser } from "@/auth/server";
import { shadow } from "@/styles/utils";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

async function Header() {
  const user = await getUser();

  return (
    <header
      className="relative flex items-center justify-between bg-white px-10 py-4"
      style={{ boxShadow: shadow }}
    >
      <Link href={"/"} className="text-2xl text-primary font-bold">
        Attendify
      </Link>
      <p className="text-lg text-primary font-semibold cursor-none">
        {user ? (
          <>
            Welcome, {user.user_metadata.display_name}
            <span className="ml-4">
              <LogoutButton />
            </span>
          </>
        ) : (
          ""
        )}
      </p>
    </header>
  );
}

export default Header;
