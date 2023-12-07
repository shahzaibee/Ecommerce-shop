"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
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
    title: "Tops",
    href: "#",
    description:
      "Versatile tops for every style, occasion - chic, comfortable, and trendsetting.",
  },
  {
    title: "Pants",
    href: "#",
    description:
      "Stylish pants for all occasions, blending comfort, fashion, and versatility.",
  },
  {
    title: "Accesories",
    href: "#",
    description:
      "Elevate your style with curated accessories for a chic statement.",
  },
  {
    title: "shoes",
    href: "#",
    description:
      "Stylish shoes for every step, blending comfort, fashion, and durability.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home  portion*/}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Women  portion*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Womens</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-myWhite grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* About */}
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Contact */}
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block  select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-myOrange">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground  group-hover:text-myBlackpara">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
