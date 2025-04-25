import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const navLinks = [
  { href: "/", label: "Services" },
  { href: "/", label: "Portfolio" },
  { href: "/", label: "Career" },
  { href: "/", label: "Blogs" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Team" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto h-[6.1rem] p-4 py-6 bg-background">
      <nav
        className="grid grid-cols-[auto_1fr_auto] max-w-7xl mx-auto items-center gap-5 rounded-xl border border-black px-6 py-4 lg:grid-cols-[auto_1fr_repeat(6,auto)_1fr_auto]"
        aria-label="Main Navigation"
      >
        <Link href="/" aria-label="Home">
          <Image src="/images/logo.svg" alt="Logo" height={34} width={34} />
        </Link>

        <div className="hidden lg:block" />
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hidden font-light lg:block"
          >
            {link.label}
          </Link>
        ))}
        <div />

        <div className="hidden rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] lg:block cursor-pointer">
          <Button
            className="rounded-full border-0 bg-background text-black font-light hover:bg-transparent hover:text-white"
            aria-label="Contact Us"
          >
            Let&apos;s Connect
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open Menu">
              <Menu />
            </SheetTrigger>
            <SheetContent className="border-0 p-4">
              <SheetTitle>
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  height={34}
                  width={34}
                />
              </SheetTitle>

              <div className="my-4 flex flex-col gap-4 text-lg">
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="w-min">
                <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] cursor-pointer">
                  <Button
                    className="rounded-full border-0 bg-background text-black font-light hover:bg-transparent hover:text-white"
                    aria-label="Contact Us"
                  >
                    Let&apos;s Connect
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
