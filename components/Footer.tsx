import { footerLinks } from "@/constants";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <div className="footer__rights">
          <Image
            src={logo}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </div>

        <div className="footer__links">
          {footerLinks.map((links, index) => (
            <div key={index} className="footer__link">
              <h3 className="font-bold">{links.title}</h3>
              {links.links.map((link, index) => (
                <Link key={index} href={link.url} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyrights">
        <p>@2024 CarHub. Wszelkie prawa zastrzeżone</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
