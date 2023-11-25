import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const NavBar = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <section className="nav-bar">
        <button>
          <FontAwesomeIcon icon={faHome} />
        </button>
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </section>
    </>
  );
};
