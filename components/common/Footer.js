import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Services" },
  { href: "/", label: "Portfolio" },
  { href: "/", label: "Career" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Team" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/krishnarealty.market",
    icon: <Facebook size={18} />,
  },
  {
    href: "https://www.instagram.com/krishnarealty.market",
    icon: <Instagram size={18} />,
  },
  {
    href: "https://www.linkedin.com/company/krishnarealty-market/",
    icon: <Linkedin size={18} />,
  },
  {
    href: "https://www.youtube.com/@krishnarealty.market",
    icon: <Youtube size={18} />,
  },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full py-6 border-t border-t-black text-gray-600">
      <div className="grid gap-8 md:grid-cols-2 items-start max-w-7xl mx-auto px-4">
        {/* Logo + Description */}
        <div>
          <Link href="/" aria-label="Home">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
          </Link>
          <p className="text-sm leading-relaxed max-w-80 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
            facere numquam a itaque inventore saepe quo adipisci sed ipsam.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label="Social Link"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Pages</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Other */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Legal</h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-3xl sm:text-5xl md:text-[54px] font-bold my-6">
        <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
          A Venture of AP ADS
        </span>
      </div>

      <div className="border-t border-t-black pt-6 text-center text-xs px-4">
        &copy; {new Date().getFullYear()} Krishna Realty. All rights reserved.
      </div>
    </footer>
  );
}
