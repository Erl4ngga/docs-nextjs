"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header>
      <Navbar isBordered>
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        ></NavbarContent>
        <NavbarContent justify="end">
          <button aria-label="moon" onClick={() => setTheme("light")}>
            <SunIcon width={30} height={30} />
          </button>
          <button aria-label="sun" onClick={() => setTheme("dark")}>
            <MoonIcon width={30} height={30} />
          </button>
          <NavbarItem>
            {/*<Button as={Link} color="success" href="/" variant="flat">
              Home
            </Button>*/}
            {/*<Button
              as={Link}
              color="success"
              href="/mobile"
              variant="flat"
              className="mx-5"
            >
              Mobile
            </Button>*/}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
