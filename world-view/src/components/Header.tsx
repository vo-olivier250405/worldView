import { Logo } from "@/images/Logo";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <NavBar />
      <div className="header">WORLD VIEW</div>
      <Logo></Logo>
    </header>
  );
};
