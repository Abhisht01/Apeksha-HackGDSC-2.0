/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between p-8">
      <Link href="/" passHref className="tyr">
        APEKSHA
      </Link>
      <Link passHref href="/signup">
        <div className="cta flex">
          <img src="/static/images/user.svg" alt="" className="h-[25px] cta" />
          <span className="hover-underline-animation">Sign Up / Login</span>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
