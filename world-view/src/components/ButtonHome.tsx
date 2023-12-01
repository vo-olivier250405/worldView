import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const ButtonHome = () => {
  return (
    <>
      <Link href="/" className="home-button">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </>
  );
};
