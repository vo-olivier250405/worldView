import { Logo } from "@/images/Logo";
import { NavBar } from "./NavBar";
import earth from "@/images/earth.png";
import Image from "next/image";
import { HoverAnimation, RotateOnClick } from "@/app/PageWrapper";

export const Header = () => {
  return (
    <header>
      <NavBar />
      <RotateOnClick>
        <Image className="img" src={earth} alt="Logo" />
      </RotateOnClick>

      <div className="header">WORLD VIEW</div>
    </header>
  );
};
