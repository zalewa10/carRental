import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={logo}
            alt="Auto logo"
            width={118}
            height={18}
            className="object-obtain"
          />
        </Link>
        <Button
          title="Zaloguj się"
          btnType="button"
          className="text-primary-blue rounded-full bg-white"
        />
      </nav>
    </header>
  );
}
