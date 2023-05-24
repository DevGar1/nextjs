"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const settProviders = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };
    settProviders();
  }, []);

  return (
    <nav className="flex-between w-full mg-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <p className="logo_text">Propmptopia</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button onClick={signOut} type="button" className="outline_btn">
              Sign out
            </button>
            <Link href={"/profile"}>
              <Image src="/assets/images/logo.svg" width={30} height={30} className="rounded-full" alt="profile" />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button type="button" key={provider.id} onClick={() => signIn(provider.id)} className="black_btn">
                    Sign In
                  </button>
                );
              })}
          </>
        )}
      </div>
      {/* Mobile */}

      <div className="sm:hidden flex">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image src="/assets/images/logo.svg" width={30} height={30} className="rounded-full" alt="profile" />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button type="button" key={provider.id} onClick={() => signIn(provider.id)} className="black_btn">
                    Sign In
                  </button>
                );
              })}
          </> 
        )}
      </div>
    </nav>
  );
};

export default Nav;
