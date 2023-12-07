import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { HoverAnimation } from "@/app/Animations";

export const ButtonHome = () => {
  return (
    <HoverAnimation>
      <Link href="/" className="home-button">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </HoverAnimation>
  );
};
