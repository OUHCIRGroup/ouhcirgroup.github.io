"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { useIsMobile } from "../hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Header() {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className="
        sticky top-0 z-60
        w-full border-b
        bg-white/90 dark:bg-black/90
        backdrop-blur
      "
    >
      <div
        className="
          mx-auto flex max-w-6xl
          items-center justify-between
          px-4 py-3
        "
      >
        {/* Left-side HCIR brand */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={closeMobile}
        >
          <span className="flex flex-col leading-tight">
            {/* <span className="text-3xl  font-extrabold md:pl-11">HCIR Lab</span> */}
            <span className="bg-linear-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent md:pl-11">
              HCIR Lab
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <NavigationMenu viewport={isMobile} className="ml-auto hidden md:flex">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-75 gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/#about">
                        <div className="font-medium">About Us</div>
                        <div className="text-muted-foreground">
                          Details about our lab.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/#lab-news">
                        <div className="font-medium">Lab News</div>
                        <div className="text-muted-foreground">
                          Recent updates.
                        </div>
                      </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                      <Link href="/#join-us">
                        <div className="font-medium">Join Us</div>
                        <div className="text-muted-foreground">
                          Get to know more about us.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/people">People</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Research</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-75 gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/areas">
                        <div className="font-medium">Areas</div>
                        <div className="text-muted-foreground">
                          Our Area of Interests & work.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/projects">
                        <div className="font-medium">Projects</div>
                        <div className="text-muted-foreground">
                          Learn more about different projects.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/publications">
                        <div className="font-medium">Publications</div>
                        <div className="text-muted-foreground">
                          View all publications.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/publications">Publications</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={toggleMobile}
          className="
            inline-flex items-center justify-center
            rounded-md border border-zinc-200 bg-white px-2.5 py-1.5
            text-sm font-medium text-zinc-700 shadow-sm
            hover:bg-zinc-50
            dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white py-3 text-sm dark:border-zinc-800 dark:bg-black md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4">
            <Link
              href="/"
              className="rounded-md px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={closeMobile}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="rounded-md px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={closeMobile}
            >
              About
            </Link>
            <Link
              href="/#lab-news"
              className="rounded-md px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={closeMobile}
            >
              Lab News
            </Link>
            <Link
              href="/#join-us"
              className="rounded-md px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={closeMobile}
            >
              Join Us
            </Link>
            <Link
              href="/"
              className="rounded-md px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={closeMobile}
            >
              People
            </Link>
            <Link
              href="/"
              className="rounded-md px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={closeMobile}
            >
              Research
            </Link>
            <Link
              href="/"
              className="rounded-md px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={closeMobile}
            >
              Publications
            </Link>
            <Link
              href="/"
              className="rounded-md px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={closeMobile}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
